/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sidebar: [
    {
      type: 'doc',
      id: 'index',
    },
    {
      type: 'category',
      label: 'Basic Functionality',
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'addresses',
        },
        {
          type: 'doc',
          id: 'signing',
        },
      ]
    },
    {
      type: 'category',
      label: 'Tutorials',
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'tutorials/calldataDecoding'
        },
        {
          type: 'doc',
          id: 'tutorials/addressTags',
        },
      ]
    },
    {
      type: 'category',
      label: 'API',
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'api/classes/client.Client',
          label: 'Client',
        },
        {
          type: 'doc',
          id: 'api/modules/util',
          label: 'Utils',
        },
        {
          type: 'doc',
          id: 'api/modules/constants',
          label: 'Constants',
        },
        {
          type: 'doc',
          id: 'api/modules/calldata_evm',
          label: 'Calldata',
        },
        {
          type: 'category',
          label: 'Interfaces',
          collapsible: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/interfaces', // '.' means the current docs folder
            },
          ],
        },
      ],
    },
    {
      type: 'doc',
      id: 'testing',
    }
    // {
    //   type: 'autogenerated',
    //   dirName: '.', // '.' means the current docs folder
    // },
  ],
};

module.exports = sidebars;
