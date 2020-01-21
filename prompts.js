/**
 *
 * @authors liwb (you@example.org)
 * @date    2019-04-29 09:31
 * @version $ IIFE
 */
module.exports = [
  {
    name: 'routerVuex',
    type: 'list',
    message: 'use router and vuex',
    choices: [
      {
        name: 'router',
        value: 'router'
      },
      {
        name: 'vuex',
        value: 'vuex'
      },
      {
        name: 'none',
        value: 'none'
      },
      {
        name: 'all',
        value: 'all'
      }
    ],
    default: 'router'
  }
];
