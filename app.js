// ==と===の違いは何ですか？

console.log('型の違いもわかる。')
console.log('＝＝で1 == n\'1n\'場合、自動で数値型に変換し比較が行われる')
console.log('ーーーーーーーーーーーーーーーーーーーーーーーーーーーー')

// 1 == '1'の結果は何ですか？

console.log('false')
console.log('なぜなら左右の型が違うから。左は数値型で右は文字列型')
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


