// ==と===の違いは何ですか？

console.log(`型の違いもわかる。
＝＝で1 == n\'1n\'場合、自動で数値型に変換し比較が行われる`)
console.log('ーーーーーーーーーーーーーーーーーーーーーーーーーーーー')

// 1 == '1'の結果は何ですか？
// const result = 1 == '1';
// if (result === false) console.log(`PASS`);
// else console.error(`FAIL`);
console.log('true（でした）')
console.log('なぜなら比較する前に両方の値が同じ型になるから')
console.log('ーーーーーーーーーーーーーーーーーーーーーーーーーーーー')

// 1 === '1'の結果は何ですか？

console.log('false')
console.log('なぜなら左右の型が違うから。左は数値型で右は文字列型')
console.log('ーーーーーーーーーーーーーーーーーーーーーーーーーーーー')

// [] === []の結果はなんですか？ また、その理由はなんですか？

console.log('false')
console.log('なぜなら構造が一緒でも異なるメモリに保存されているため。')
console.log('ーーーーーーーーーーーーーーーーーーーーーーーーーーーー')

// {}.hoge === undefinedの結果は何ですか？

console.log('false（でした。最初はtrueだと思ってました）')
console.log('オブジェクトのhogeを参照しようとしているが空なのでundefined が返されるため')
console.log('ーーーーーーーーーーーーーーーーーーーーーーーーーーーー')

// {}.hoge == nullの結果は何ですか？

console.log('こっちはtrue(でした)undefinedとnullの違いがわかってないです')
console.log('＝＝の比較では値が存在しないことを比較しているため。')
console.log('ーーーーーーーーーーーーーーーーーーーーーーーーーーーー')

// {}.hoge === nullの結果は何ですか？

console.log('false')
console.log('左がundefinedだから')
console.log('ーーーーーーーーーーーーーーーーーーーーーーーーーーーー')

// undefinedとnullの違い
console.log(`undefinedとnullの違いは基本的には似ているが違いとして
参照先がないときなどに返されるときは自動的にundefinedが返ってくるがnullは割り当てる必要がある。
これでエラーとか少しわかるようになった気がします`);

let variable;
console.log(variable); // undefined

let variable2 = null;
console.log(variable2); // null


