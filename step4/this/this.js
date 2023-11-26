console.log('> オブジェクトに関数を設定した場合におけるthisのサンプル');
const obj1 = {
  name: 'これはobj1です',
  test: function() {
    console.log(this);
    console.log(this === obj1);
  }
};

console.log(obj1); // => {name: "これはobj1です", test: f}

obj1.test();
// => {name: "これはobj1です", test: f}
// => true

console.log('> クラスにおけるthisのサンプル');
class MyClass {
  constructor() {
    this.name = 'これはMyClassです';
  }

  test() {
    console.log(this);
    console.log(this === instance1);
  }
}

const instance1 = new MyClass();

console.log(instance1); // => MyClass { name: "これはMyClassです"}

instance1.test();
// => MyClass { name: "これはMyClassです"}
// => true

console.log('> 「呼び出された時」の所有者のサンプル');
const obj2 = {
  name: 'これはobj2です'
};

obj2.test = obj1.test; // obj1の関数の参照をobj2に代入
obj2.test();

console.log('> callのサンプル');
obj1.test.call(obj2); // obj1.testを呼んでいますが、thisはobj2に差し替えて実行します
