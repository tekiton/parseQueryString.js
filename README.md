parseQueryString.js
===================

何これ？ - What's this ? -
--------
PHPライクに location.search をパースします。
厳密に同じ挙動ではないのですが、実用面においてはほぼ問題ない（ような気がする）。
あんまり確認していませんが、IE6とかでも動きます。たぶん。



使い方 - Example -
------
parseQueryString.jsを読み込むだけで $_GET が使えるようになります。
PHPのように [] で配列になります。

* example url
http://example.com/?aaa=a&bbb[]=b0&bbb[]=b1&bbb[]=b2&ccc[test]=cTest&ccc[sample]=cSample&ccc[7]=c7&ddd[hoge][]=dHoge0&ddd[hoge][]=dHoge1

* source
```javascript
console.log(JSON.stringify($_GET));
```

* log
```javascript
{"aaa":"a","bbb":["b0","b1","b2"],"ccc":{"7":"c7","test":"cTest","sample":"cSample"},"ddd":{"hoge":["dHoge0","dHoge1"]}}
```



ライセンス
----------
This is MIT LICENSE :)

