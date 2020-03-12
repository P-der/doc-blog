# 图组件
---
<ClientOnly>
  <p-line/>
  
  <font size=5>groupData</font>
  <Alert type="warning">注意需设置style中的height，否则无法展示图表</Alert>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| title | 标题 | string |- | '' |
| xData | x轴坐标 | array |- | [] |
| yData | x轴坐标 | array |- | [] |
| xname | x轴单位 | string |- | 时间 |
| yname | y轴单位 | string |- | 人次 |
| type | 图表类型 | string | line/bar | bar |
</ClientOnly>