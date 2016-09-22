# Msger

这是一个JS库，可以实现浏览器标签之间的消息收发。
This is a JavaScript Library for browser send or recive message among their tags.

> 本库使用localStorage和Cookie进行页面间的通信，由于这两个对象的特殊性，本库必须运行在Apache，IIS等服务器环境下。
> This library is use localStorage and Cookie to communicate, so it should run under a server environment, such as Apache, IIS, etc.

## 用例 / Usage

首先要调用init方法，给页面一个名字。
First, should use init() to give a name for the pages.

然后使用on方法，接收消息。
Then, use on() to recive message.

``` JavaScript

    msger.init("hello");
    // 所以，当前页面的名字是hello
    // Then, this page's name is 'hello'

    msger.on("testMsg",function(){
        // 接收testMsg消息
        // To recive 'testMsg'

        alert("Gotcha");
    });

```

你需要多个页面（在同一个浏览器内打开）来测试这个库。
You need more than one page to test this JS library.

``` JavaScript

    msger.init("world");
    // 另一个页面
    // another page

    msger.send("hello","testMsg");

```
请看示例页面了解更多用法。
Please see the example pages to learn about more.

## MIT License / MIT协议

感谢您的使用。
enjoy it, thanks.