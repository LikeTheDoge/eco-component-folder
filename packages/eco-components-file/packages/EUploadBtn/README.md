### 文件直接上传组件

点击选择文件直接上传

#### 参考示例

![file tree](/{{ctx_public}}/design/uploadbtn.gif)

#### 主要功能

- 上传按钮，遵循按钮规范

- 实现上传中的 loading 效果

- 上传完成成功提示，以及成功后回调函数
  
- 结合 `EcoFile` Model , 但不绑定后台接口

#### API

- < slot > defalut 

`(op:{isLoading:boolean}) => VNode`

按钮插槽，可以单独做样式的定制，默认显示带上传图标和文字的按钮

- < prop > title

`string`

上传按钮的内部文字,默认为 "上传文件"

- < prop > onUpload
 
`(file:File) => Promise<boolean|string|null> | boolean|string|null` 

上传事件回调，接受参数 `file` 为用户上传的文件 (浏览器原生 File 类型)

返回结果为 `true` 提示成功上传

返回结果为 `fasle` 提示默认上传失败文案

返回结果为 `string` 将返回结果作为上传失败文案

返回结果为 `null` 将不做提示除了

返回结果为 `Promise<T>` 则会显示 loading 效果

- < prop > validate 

`((file:File) => Promise<string | void> | string | void)[]`

文件验证回调，接受参数 `file` 为用户上传的文件 (浏览器原生 File 类型)

返回结果为 `void` 则代表验证成功

返回结果为 `string` 则代表为验证失败，并将结果作为失败提示

传入多个验证函数会将其进行串联验证。
