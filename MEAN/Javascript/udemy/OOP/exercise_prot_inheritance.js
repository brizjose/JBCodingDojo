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
//   HtmlElement.call(this, this.click);

  this.items = items;

  this.addItem = function(i) {
    this.items.push(i);
  };

  this.removeItem = function(i) {
    items.splice(this.items.indexOf(i), 1);
  };
}

// doing this would require to do HtmlElement.call() and pass the instance elements, because the below only copies the prototype members:

// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);

// in contrast, use:
HtmlSelectElement.prototype = new HtmlElement()
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const h = new HtmlSelectElement();

console.log(h);

for (m in h) {
  console.log(m);
}
