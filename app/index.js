import _ from 'lodash';
import $ from 'jquery';
import myownjs from "./myownjs";

function component() {
  // var element = document.createElement('h1');
  var element = $("<h1></h1>");

  /* 需要引入 lodash，下一行才能正常工作 */
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.innerHTML = _.join(['Haha', 'My Webpack is successful running even though I don\'t konw what the f**k it is!!!'], ' ');
  element.html(_.join(['Haha', 'My Webpack is successful running even though I don\'t konw what the f**k it is!!!(and jQuery is installed too!!!)'], ' '));

  // return element;
  return element.get(0);
}

document.body.appendChild(component());
console.log(myownjs);
console.log(myownjs());