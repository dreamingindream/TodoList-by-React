import _ from 'lodash';

function component() {
  var element = document.createElement('h1');

  /* 需要引入 lodash，下一行才能正常工作 */
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = _.join(['Haha', 'My Webpack is successful running even though I don\'t konw what the f**k it is!!!'], ' ');

  return element;
}

document.body.appendChild(component());