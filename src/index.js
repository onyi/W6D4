const DOMNodeCollection = require('./dom_node_collection');

window.$l = function(arg) {
  if(arg instanceof HTMLElement) {
    let array = [];
    array.push(arg);
    return new DOMNodeCollection(array);
  } else {
    if(arg[0] === '#'){
      // console.log("#");
      return new DOMNodeCollection(Array.from(document.getElementById(arg.split('').slice(1).join(''))));
    } else if (arg[0] === '.'){
      let elements = Array.from(document.getElementsByClassName(arg.split('').slice(1).join('')));
      return new DOMNodeCollection(elements);

    } else {
      return new DOMNodeCollection(Array.from(document.querySelectorAll(arg)));
    }
  }
};


