
// async function getComponent() {
//     const element = document.createElement('div');
//     const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
 
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 
//     return element;
//   }
  
//   getComponent().then(component => {
//     document.body.appendChild(component);
//   })

import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }
  
document.body.appendChild(component());