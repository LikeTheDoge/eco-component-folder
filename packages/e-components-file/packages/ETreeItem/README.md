---
title: ETreeItem
subtitle: 树节点
---

自定义的树节点，需要全局安装 EIcon


## 主要功能

- 实现 title 和子节点区域的插槽展示

- 子节点区域的展开和收起，添加动画，支持动态长度

- 添加 loading 效果，为 lazyload 树做基础

  
## Demo

[demo](Demo)

## API

- < prop > checkPoint

`'icon' | 'title'= 'title'`

点击触发区域

- < prop > loaded

`boolean = true`

子节点是否加载完成，控制展开的时候是否触发加载函数

- < prop > onload

`()=> Promise<void> = ()=>{}`

当未加载时，展开触发的加载函数

- < slot > title 

`() => VNode`

标题插槽

- < slot > content 

`() => VNode`

内容插槽
