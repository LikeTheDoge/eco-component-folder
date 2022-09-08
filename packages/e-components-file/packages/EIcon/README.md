---
title: EIcon
subtitle: 基础图标组件
---

图标组件，使用之前需要从阿里巴巴矢量图库上生成对应  `symbol` 类型的资源文件（js 文件），并引入项目。

## Demo

[demo](Icon)

## API


- < prop > family
  
`string`

图标前缀，参考对应的图库项目配置的前缀，不带最后的短横杠（-）

- < prop > name
  
`string`

图标名称，参考对应图库项目内图标的名字。

- < prop > size

`number`

图标大小,单位为 px，如果不填，则默认继承其自父元素的 `font-size`

- < prop > color

`string`

图标颜色,如果不填，则默认继承其自父元素的 `color`

> **注意：** 如果图标原本自带颜色，则设置颜色不会起任何作用。


