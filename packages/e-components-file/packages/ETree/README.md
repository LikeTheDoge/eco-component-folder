---
title: ETree
subtitle: 树型组件
---

自定义的树，需要全局安装 EIcon ETreeItem


## 主要功能

- 根据数据结构，递归生成 ETreeItem 节点

  
## Demo

[demo](Demo)

## API

- < prop > checkPoint

`'icon' | 'title'= 'title'`

点击触发区域

- < prop > treeData

`<Node> Node[] = []`

根节点数组

- < prop > loaded

`(node:Node) => boolean = ()=> true`

当前节点是否加载完成，控制展开的时候是否触发加载函数

- < prop > nodeId

`(node:Node) => string =  (node) => node.nodeId`

获取当前节点的 id ，用于 v-for 的 key 字段

- < prop > isLeaf

`(node:Node) => boolean =  (node) => !node.children`

判断当前节点是否为叶子节点

- < prop > children

`(node:Node) => Node[]|void =  (node) => node.children`

当前节点为非叶子节点时候，获取其子节点数组

- < slot > title 

`(node:Node) => VNode`

标题插槽

- < slot > blank 

`(node:Node) => VNode`

当当前节点为非叶子节点，并且其子节点为 0 的时候，显示的提示文本
