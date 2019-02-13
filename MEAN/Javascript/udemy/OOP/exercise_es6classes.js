const _arr = new WeakMap();

class Stack {
  constructor() {
    _arr.set(this, []);
  }

  push(v) {
    _arr.get(this).push(v);
  }

  pop(v) {
    const arr = _arr.get(this);

    if (arr.length === 0) throw new Error("stack is empty");

    return arr.pop(v);
  }

  peek() {
    const arr = _arr.get(this);

    if (arr.length === 0) throw new Error("stack is empty");

    return arr[arr.length - 1];
  }

  get count() {
    return _arr.get(this).length;
  }
}

const stack = new Stack();

stack.push("5");
