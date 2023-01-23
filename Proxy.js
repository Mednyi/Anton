let target = {
  name: 'Anton',
  age: 45
};

const proxy = new Proxy(target, {});
proxy.test = 5;

console.log(proxy);