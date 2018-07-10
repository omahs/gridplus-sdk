// Tests on communications with simulated agent devices
const assert = require('assert');
const config = require(`${__dirname}/../config.js`);
const secp256k1 = require('secp256k1');
const { sha3, pubToAddress } = require('ethereumjs-util');
const GridPlusSDK = require('../index.js').default;
const request = require('superagent');
let sdk, privKey, addr, provider, erc20Addr, sender, senderPriv;

// Handle all promise rejections
process.on('unhandledRejection', e => { throw e; });

describe('Basic tests', () => {
  it('Should instantiate an SDK object', (done) => {
    try {
      sdk = new GridPlusSDK();
      done();
    } catch (err) {
      assert(err === null, err);
      done();
    }
  });

  it('Should connect to an agent', (done) => {
    sdk.connect((err, res) => {
      assert(err === null, err);
      assert(sdk.ecdhPub === res.key, 'Mismatched key on response')
      done()
    });
  });

  it('Should start the pairing process on the agent', (done) => {
    sdk.setupPairing((err, res) => {
      assert(err === null, err);
      assert(res.status === 200);
      done();
    });
  });

  it('Should pair with the agent', (done) => {
    sdk.pair(sdk.name, (err, res) => {
      assert(err === null, err)
      done();
    });
  });

  it('Should create a manual permission', (done) => {
    sdk.addManualPermission((err, res) => {
      assert(err === null, err);
      assert(res.result.status === 200);
      done();
    })
  });

  it('Should get the Bitcoin addresses of the manual permission', (done) => {
    const req = {
      permissionIndex: 0,
      isManual: true,
      total: 3,
    }
    sdk.addresses(req, (err, res) => {
      assert(err === null, err);
      assert(res.result.data.addresses.length === 3);
      assert(res.result.data.addresses[0].slice(0, 1) === '3', 'Not a segwit address');
      done();
    })
  });

  it('Should get testnet addresses', (done) => {
    const req = {
      permissionIndex: 0,
      isManual: true,
      total: 3,
      network: 'testnet'
    }
    sdk.addresses(req, (err, res) => {
      assert(err === null, err);
      assert(res.result.data.addresses.length === 3);
      assert(res.result.data.addresses[0].slice(0, 1) === '2', 'Not a testnet address');
      done();
    });
  });

  it('Should create an automated permission', (done) => {
    const req = {
      schemaIndex: 0,
      typeIndex: 0,
      rules: [
        null, null, null,
        null, null, null,
        null, null, null,
        'equals', '0x39765400baa16dbcd1d7b473bac4d55dd5a7cffb', null,
        'equals', 1000, null,
        'equals', '', null,
      ],
      timeLimit: 10000
    };

    sdk.addPermission(req, (err, res) => {
      assert(err === null, err);
      assert(res.result.status === 200);
      done();
    })
  });

  it('Should get the Ethereum address and request a signature from it', (done) => {
    const req1 = {
      permissionIndex: 0,
      isManual: false,
      coin_type: "60'"
    };
    const req2 = {
      schemaIndex: 0,
      typeIndex: 0,
      params: [ 1, 100000000, 100000, '0x39765400baa16dbcd1d7b473bac4d55dd5a7cffb', 1000, '' ]
    }

    sdk.addresses(req1, (err, res) => {
      assert(err === null, err);
      const addr = res.result.data.addresses;
      sdk.signAutomated(req2, (err, res) => {
        assert(err === null, err);
        assert(res.result.status === 200);
        // The message includes the preImage payload concatenated to a signature,
        // separated by a standard string/buffer
        const sigData = res.result.data.sigData.split(config.api.SPLIT_BUF);
        const preImage = Buffer.from(sigData[0], 'hex');
        const msg = sha3(preImage);
        const sig = sigData[1];
        // Deconstruct the signature and ensure the signer is the key associated
        // with the permission
        const sr = Buffer.from(sig.substr(0, sig.length - 1), 'hex');
        const v = parseInt(sig.slice(-1));
        const signer = secp256k1.recover(msg, sr, v, false);
        assert.equal('0x' + pubToAddress(signer.slice(1)).toString('hex'), addr, 'Incorrect signature');
        done();
      });
    });
  });

  it('Should create an automated permission to send Bitcoins', (done) => {
    const req = {
      schemaIndex: 1,
      typeIndex: 2,
      rules: [ // version, locktime, recipient, value, outScriptType (e.g. p2pkh)
        'equals', 1, null,
        'equals', 0, null,
        null, null, null,
        'lte', 12000, null,
        null, null, null,
        null, null, null,
      ],
      timeLimit: 0,
    };

    sdk.addPermission(req, (err, res) => {
      assert(err === null, err);
      assert(res.result.status === 200);
      done();
    });
  });

  it('Should create an automated Bitcoin transaction')

});