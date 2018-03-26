 import _ from 'lodash';
 import './scss/style.scss';
 
function component() {
    var element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
//+ Lodash, now imported by this script
    element.innerHTML = _.join(['Hola', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());