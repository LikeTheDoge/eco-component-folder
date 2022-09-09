---
title: EChoseLabel
subtitle: 单项选择标签按钮
---

自定义的标签选择按钮，需要全局安装 ACheckbox。

对 ACheckbox 的封装，更好的支持自定义内容，以及部分选择状态。

## 主要功能

- 实现 radio 功能，控制选中状态

- 针对默认 radio 添加取消选中功能

- 默认添加  `cursor:pointer`

- radio 的显示、隐藏

- 元素内容插槽，实现自定义标签展示
  
## Demo

[demo](Demo)

## API


- < prop.sync > chosen

`boolean= false`

是否为选中

- < prop.sync > hidden

`boolean = false`

是否展示 checkbox 


- < slot > default 

`(op:{chosen:boolean}) => VNode`

内容插槽
