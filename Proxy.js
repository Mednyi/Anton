let target = {
  name: 'Anton',
  age: 45
};

const proxy = new Proxy(target, {});

console.log(proxy);