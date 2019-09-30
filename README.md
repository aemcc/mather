# zzllrr Mather - An open-sourced comprehensive Web APP for Mathematics

![zzllrr Mather Demo Version Screenshot](https://github.com/zzllrr/mather/blob/master/img/zzllrr-mather-demo.jpg)

小乐数学，一款基于web网页的覆盖数学全部学科的数学开源软件。
 
国际用户请访问 <https://zzllrr.github.io/mather/>
国内用户请访问 <http://zzllrr.gitee.io/mather/>

[![ ](https://img.shields.io/badge/license-MIT-blue)](https://mit-license.org/) [![ ](https://img.shields.io/badge/donate-Paypal-green)](https://www.paypal.me/zzllrr/8)

[About 关于](https://zzllrr.github.io/mather/about.html "简介") | [API](https://zzllrr.github.io/mather/api.html) 

## Aims 宗旨
Make mathematics easier to learn, practice, teach, study, appreciate, play, show, spread and reach.

让数学更易学易练，易教易研，易赏易玩，易见易得，易传易及。

## Summary 摘要

开箱即用（兼容电脑和触屏移动设备）,
支持离线解题（serverless）、数学运算、公式编辑、几何绘图、
演示（文档、PPT、AR、VR、语音、2D及3D动画等富媒体）、
知识库（数学概念实体库、公式库、定理库、题库、文献资源索引库）。
软件适合广大的数学师生、爱好者、研究者、开发者、科普工作者使用。
在内容上，覆盖全数学学科的知识概念和思想方法图谱、典型题库和解法、未解难题及开放课题；
在功能上，集公式编辑、几何绘图、演示交互、解题、知识穿透联想、数学百科启发探索于一身；
软件体积小巧便携，但功能强大，高度结构化和系统化，并可离线使用和自由扩展定制。



## How to Use 使用方法
### 1. 直接在线使用
访问网址 <https://zzllrr.github.io/mather/>
或 <http://zzllrr.gitee.io/mather/>

### 2. 离线使用
1. 下载安装包源文件
2. 打开其中的网页index.html即可

## Function 功能模块
### 0. 编辑器功能
在输入框右侧，选择一种输入格式，可以编辑相应格式的内容。

- 1. 数学公式编辑
在输入框中，输入LaTeX语法命令（支持Unicode字符），或者点击相应公式按钮，得到模板，再进行编辑。
点击右侧的预览按钮(左箭头)，可以开启或关闭实时LaTeX数学公式预览功能。
- 2. 文档编辑
点击演示（Show）菜单，文档（Document）子菜单，
在输入框中，输入文本内容（以及图形或动画命令），然后点击左侧下方的绿色播放按钮，可以进入文档浏览模式。
支持LaTeX、Markdown、HTML、SVG、Canvas、JavaScript、Echarts、Zdog、VR、AR等格式混合内容排版，
不同格式内容需使用相应闭合标签括起来。
例如（更多示例，参见软件内的输入框右侧提示）：
- 行内数学公式：使用IL标签包裹LaTeX内容（参见KaTeX所支持的语法）
```html
<IL>x^2+y^2=z^2</IL>
 ```

- 行间数学公式：使用LA标签包裹LaTeX内容（参见KaTeX所支持的语法）
```html
<LA>x^2+y^2=z^2</LA>
```

- Markdown代码：使用MD标签包裹Markdown内容
与常见Markdown软件支持的格式类似。数学公式用美元符号$括起来。

- HTML代码：直接输入，无需额外的闭合标签包裹

- SVG：直接输入完整的SVG源代码，或者使用SV标签包裹内容
```html
<SV><rect x=10 y=10 width=100 height=30 stroke=green fill=none /></SV>
```

- Canvas：用CV标签包裹Canvas的JS代码（变量c代指canvas.getContext('2d')）
``` <CV> ```
```js
c.strokeRect(10, 20, 200, 150);
```
``` </CV> ```

- JavaScript: 用JS标签包裹JS代码片段
``` <JS> ```
```js
1+2
```
``` </JS> ```

- Echarts: 用EC标签包裹Echarts中的JSON数据命令
``` <EC> ```
```json
{"xAxis":{"type":"category","data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},"yAxis":{"type":"value"},"series":[{"data":[100,932,901,200,400,600,700],"type":"line"}]}
```
``` </EC> ```

可以画出一个折线图

- I18国际化：用I18标签包裹英文键值（软件会在预览时自动翻译为当前语言）：
```html
<I18>Algebra and Geometry</I18>
```

- EN翻译成英语：用EN标签包裹英文键值（软件会在预览时自动翻译为英文语言）：
```html
<EN>代数 几何</EN>
```

- 3. 数学图形绘制
输入方式，支持命令输入（文本框输入）和可视化编辑（点击右上角图标，或者按下快捷键Esc进入）。
输出格式，支持Canvas画布或SVG矢量图。
另外，还封装集成了Echarts图表生成工具箱，实现各种统计图的快速生成。
另外，点击Graphic（作图）菜单，可以输入数据，点击产生相应数学图形。



### 1. Solve 数学解题

点击解题（Solve）菜单，选择相应子学科，点击子菜单，输入内容，点击绿色播放按钮即可
目前仅支持下列学科的解题：
21 代数学 -> 2110 线性代数（或 2119 其它代数学科，初等代数的内容放在这里）
81 离散数学

例如：求解矩阵行列式
1. 点击解题（Solve）菜单，选择相应子学科：21 代数学 -> 2110 线性代数，默认进入矩阵子选项
2. 选择“行列式”，点击|A|子菜单
3. 文本框输入矩阵： 
```1 2 3 4```
4. 点击下方绿色播放按钮，立即得出行列式求解步骤和结果


### 2. Show 演示功能 
点击演示（Show）菜单，文档（Document）子菜单，

- 文档功能：在输入框输入内容（支持格式参见上述文档编辑功能的介绍）。
如使用外链文档，直接在输入框中输入文档网址，点击绿色播放按钮即可
即使用网址：document.html?src=你的文档地址
即可在线查看你的数学文档

- PPT功能：使用section闭合标签，将每一张幻灯片的内容括起来。
如使用外链PPT文档，直接在输入框中输入文档网址，点击绿色播放按钮即可
即使用网址：slide.html?src=你的PPT文档地址
即可在线演示你的PPT文档

- 文字转语音：输入文本内容，点击左下方绿色播放按钮，播放语音音频。
注意：文字转语音功能，需要联网才能使用。

- VR、AR功能：使用a-scene闭合标签，编辑相应源代码，再点击绿色播放按钮即可。
如使用外链VR、AR文档，直接在输入框中输入文档网址，点击绿色播放按钮即可
即使用网址：vr.html?src=你的VR文档地址 或 ar.html?src=你的AR文档地址 
即可在线查看你的VR作品或AR作品



### 3. Wiki 数学百科知识浏览功能 
点击百科（Wiki）菜单，选择相应子学科，即可。

### 4. Teaching 教学功能 
贴近教学场景所支持的功能，如课程及题库设计、考试试题出卷、阅卷批改、课堂测验、抢答、投票等（待完善）

### 5. Academic 学术功能
满足科研人员所支持的功能，如论文检索、写作发表、学术研讨、竞赛奖项追踪等（待完善）


### 6. Technology 技术
满足技术人员所支持的功能，如数学建模，软件编程，硬件设计，产学研标准化（待完善）

### 7. Science 科学
满足数学科普及在相关的大科学问题、终极问题方面的基础研究探索功能，如宇宙、生命、健康、智能、环境保护等（待完善）

### 8. Culture 文化
通过数学游戏、玩具、历史、漫画、视频、博客等。来加快普及数学文化，增进大众对数学的了解。（待完善）


## Future Plans 未来方向
- 完成内核精简，减少不同开源库之间的重复冗余和不相容代码
- 推进行业协议

## How to Contribute 如何贡献
- 如果你是开发者，相信你的编码能力一定比小乐强。
欢迎创建你自己的分支branch，将其中的非第三方API，进行优化重构重写。
一些第三方API，也可以使用您认为更优秀的库进行替换升级。
- 如果你是数学工作者，请不吝赐教您的专业数学知识，贡献理论知识库，或相关建设建议。
方法是编写一系列该软件支持的格式的数学课程或百科内容。
- 如果你是用户，请尽情使用和分享吧！让数学人尽可学。

## Additional information	附录相关链接

* 小乐数学GitHub地址
https://github.com/zzllrr/mather

* 小乐图客 zzllrr Imager Geek
https://chrome.google.com/webstore/detail/gfjhimhkjmipphnaminnnnjpnlneeplk?hl=zh_cn

* 小乐阅读 zzllrr RSS Reader
https://chrome.google.com/webstore/detail/aphanomkkjgledipighdfjnilhfenpam?hl=zh_cn

* 小乐联系邮箱：zzllrr@gmail.com

* WeChat 小乐公众号：zzllrr小乐
