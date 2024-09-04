export default {

  editor: {
    label: {
      en: "Spend Share",
    },
  },

  

  properties: {

    categories: {
      label: 'Categories',
      type: 'Info',
      options: { text: 'Bind categories data' },
      section: 'settings',
      bindable: "list",
      responsive: true,
      states: true,
      defaultValue: null,
      /* wwEditor:start */
      bindingValidation: {
          type: 'array',
          tooltip: 'A collection of data in array format: `[{}, {}, ...]`',
      },
      /* wwEditor:end */
  },

  series: {
    label: 'Series',
    type: 'Info',
    options: { text: 'Bind series data' },
    section: 'settings',
    bindable: "list",
    responsive: true,
    states: true,
    defaultValue: null,
    /* wwEditor:start */
    bindingValidation: {
        type: 'array',
        tooltip: 'A collection of data in array format: `[{name: XXX, data:[]}, {name: XXX, data:[]}, ...]`',
    },
    /* wwEditor:end */
},

  },

  
};
