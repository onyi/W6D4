
class DOMNodeCollection {
  constructor(elements) {
    this.elements = elements;
  }

  // myEach(callback) {
  //   this.elements.forEach((el)=>{
  //     callback(el);
  //   });
  // }


  html(string) {
    if(string) {
      this.elements.forEach(el => {
        el.innerHTML = string;
      });
    } else {
      return this.elements[0].innerHTML;
    }
  }

  empty() {
    this.elements[0].innerHTML = '';
  }

  append(node) {
    this.elements.forEach( (el) => {
      if (node instanceof HTMLElement) {
        el.appendChild(node);
      } else {
        el.innerText = node;
      }
    });
  }

  attr(name,value) {
    this.elements.forEach( (el) => {
      if (!value) {
        el.getAttribute(name);
      } else {
        el.setAttribute(name, value);
      }
    });
  }

  addClass(className) {
    this.elements.forEach( (el)=> {
      el.classList.add(className);
    });
  }
  
  removeClass(className) {
    this.elements.forEach((el) => {
      el.classList.remove(className);
    });  
  }

  children() {
    let array = [];
    this.elements.forEach((el)=>{
      array.push(new DOMNodeCollection(el.children));
    });
    return array;
  }

  parent() {
    let array = [];
    this.elements.forEach((el) => {
      array.push(new DOMNodeCollection(el.parentNode));
    });
    return array;  
  }

  find(selector) {
    let array = [];
    this.elements.forEach((el) => {
      array.push(new DOMNodeCollection(Array.from(el.querySelectorAll(selector))));
    });
    return array;
  }

  remove() {
    this.elements.forEach((el) => {
    el.remove();
    });
  }
}

module.exports = DOMNodeCollection;