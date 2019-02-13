function HtmlElement() {
  this.click = function() {
    console.log("click");
  };
}

HtmlElement.prototype.focus = function() {
  console.log("focus");
};

const e = new HtmlElement();

e.click();
e.focus();

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function(i) {
    this.items.push(i);
  };

  this.removeItem = function(i) {
    items.splice(this.items.indexOf(i), 1);
  };

  this.render = function() {
    return `
      <select>${this.items
        .map(item => `<option>${item}</option>`)
        .join("")}</select>`;
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
  this.src = src;

  this.render = function() {
    return `<img src="${this.src}" />`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const img = new HtmlImageElement();
console.log(img);

img.src = "http://";

img.render();

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement("http://")
];

