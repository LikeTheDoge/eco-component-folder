---
title: EUploadBtn
subtitle: 基础上传按钮
---

点击选择文件直接上传

## 主要功能

- 上传按钮，遵循按钮规范

- 实现上传中的 loading 效果

- 直接使用 `e-btn` 样式，可以基于其进行拓展

- todo: 上传完成成功提示，以及成功后回调函数
  
## Demo

[demo](Demo)

## API


- < prop > link

`boolean = false`

是否为 e-btn 的link 样式，false 的时候为 block 样式


- < prop.sync > loading

`boolean = false`

是否 loading 状态，可以外部控制组件 loading，或者获取 loading 状态


- < slot > text 

`(op:{loading:boolean}) => VNode`

按钮文本插槽

- < prop > text 

`string = '上传文件'`

按钮文本

- < prop > loadingText

`string = '上传中'`

按钮 loading 文本

- < slot > icon 

`(op:{loading:boolean}) => VNode`

按钮图标插槽

- < prop > upload
 
`(file:File) => Promise<void> ` 

上传事件回调，接受参数 `file` 为用户上传的文件 (浏览器原生 File 类型)

直接在上传回调中做文件相关的验证

todo:返回结果为 `true` 提示成功上传

- <del>< prop > validate </del> 