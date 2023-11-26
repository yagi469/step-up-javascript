const str = new String('Test'); // 普段は文字列専用の短縮記法で'Test'と書けば動いています
console.log(str.length); // => 4
console.log(str.toUpperCase()); // => TEST

{
  //  定義の仕方
class TextDecorator {
  // コンストラクタ。newされた時に呼ばれます
  // JavaScriptでは名前は必ずconstructorです
  constructor() {
    console.log('コンストラクタが呼ばれました');
  }

  // メソッド
  decorate() {
    console.log('decorateが呼ばれました');
  }
}

// 使い方
const td = new TextDecorator(); // => コンストラクタが呼ばれました
td.decorate(); // => decorateが呼ばれました
}

{
  class TextDecorator {
    constructor(name) {
      console.log('コンストラクタが呼ばれました');
      this.name = name;
    }

    decorate() {
      console.log(`decorateが呼ばれました：${this.name}`);
      return `■■■ ${this.name} ■■■`;
    }
  }

  const td = new TextDecorator('JS!'); // => コンストラクタが呼ばれました
  console.log(td.name); // => JS!
  const str = td.decorate(); // => decorateが呼ばれました：JS!
  console.log(str); // => ■■■ JS! ■■■
}
