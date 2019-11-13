## 动态Polyfill

Polyfill

> 我们希望浏览器提供一些特性，但是没有，然后我们自己写一段代码来实现他，那这段代码就是补丁。

一般处理方式：babel-polyfill.js

> 引入
> <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.2.5/polyfill.js"></script>
> 然后就 es6、es7 特性随便写了，但缺点是，babel-polyfill 包含所有补丁，不管浏览器是否支持，也不管你的项目是否有用到，都全量引了

动态补丁[polyfill.io](https://polyfill.io/v3/url-builder/)

在需要补丁的浏览器会加载补丁代码，不需要补丁的浏览器不会加载代码，比如：


```
<script src="https://polyfill.io/v3/polyfill.min.js?features=Promise%2CArray.prototype.includes"></script>
```

然后在 Chrome@71 下的输出是：

```
/* Disable minification (remove `.min` from URL path) for more info */
```

啥都没有，因为 Promsie 特性 Chrome@71 已经支持了。

> 阿里也搭了个服务，可以考虑引用阿里的

```
<script src="https://polyfill.alicdn.com/polyfill.min.js?features=Promise%2CArray.prototype.includes"></script>
```