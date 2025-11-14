# LogicFun 演示页面文件结构

## 📁 目录结构

```
logicfun.github.io/
├── assets/                       # 资源文件目录
│   ├── styles.css               # CSS 样式文件
│   └── script.js                # JavaScript 脚本
│
├── images/                       # 图片目录
│   ├── app_icon.png             # 应用图标
│   ├── LogicFun.png             # 主界面截图
│   ├── BottleGame.png           # 瓶子配对截图
│   ├── AkariGame.png            # 点亮灯泡截图
│   ├── SudokuGame.png           # 数独游戏截图
│   ├── DecoderGame.png          # 超级密码器截图
│   ├── MemoryGame.png           # 记忆翻牌截图
│   ├── DotboxGame.png           # 点格棋截图
│   ├── KlotskiGame.png          # 数字华容道截图
│   └── 2048Game.png             # 2048游戏截图
│
├── docs/                         # 文档目录
│   ├── DEPLOYMENT.md            # 部署指南
│   └── FILE_STRUCTURE.md        # 文件结构说明（本文件）
│
├── index.html                    # 主页面
├── privacy.html                  # 隐私政策页面
├── terms.html                    # 用户协议页面
├── favicon.png                   # 网站图标
└── README.md                     # 项目说明
```

## 📊 文件说明

### 核心文件

| 文件/目录 | 说明 |
|-----------|------|
| **index.html** | 主页面，包含导航栏、英雄区域、应用预览、项目特色、游戏列表、下载区域和页脚 |
| **assets/styles.css** | CSS 样式文件，包含全局样式、响应式设计、动画效果 |
| **assets/script.js** | JavaScript 脚本，实现平滑滚动、Gallery 交互、Lightbox 功能 |
| **images/** | 图片目录，包含应用图标和所有游戏截图 |
| **favicon.png** | 网站图标，显示在浏览器标签页 |

### 法律文档

| 文件 | 说明 |
|------|------|
| **privacy.html** | 隐私政策页面，说明信息收集、使用和保护措施 |
| **terms.html** | 用户协议页面，定义使用条款和免责声明 |

### 文档文件

| 文件 | 说明 |
|------|------|
| **README.md** | 项目说明文档，介绍项目概况和使用方法 |
| **docs/DEPLOYMENT.md** | 部署指南，详细说明如何部署到 GitHub Pages |
| **docs/FILE_STRUCTURE.md** | 文件结构说明（本文件） |

## 📦 部署清单

### 必需文件（最小部署）

```
✅ index.html
✅ assets/styles.css
✅ assets/script.js
✅ images/ (所有截图)
✅ favicon.png
```

### 推荐文件（完整部署）

```
✅ index.html
✅ assets/styles.css
✅ assets/script.js
✅ images/ (所有截图)
✅ favicon.png
✅ privacy.html
✅ terms.html
✅ README.md
✅ docs/ (所有文档)
```

## 🔗 文件依赖关系

```
index.html
├── 依赖 → assets/styles.css (样式)
├── 依赖 → assets/script.js (交互)
├── 依赖 → images/*.png (截图)
├── 链接 → privacy.html (隐私政策)
├── 链接 → terms.html (用户协议)
└── 引用 → favicon.png (网站图标)

privacy.html
└── 链接 → index.html (返回首页)

terms.html
└── 链接 → index.html (返回首页)
```

## 🎨 页面特性

### 响应式设计
- 桌面端、平板、移动端自适应
- 横向滚动 Gallery 展示截图
- 触摸友好的交互设计

### 交互功能
- 平滑滚动导航
- Gallery 左右箭头控制
- Lightbox 图片查看器
- 悬停动画效果

### 视觉效果
- 渐变色背景
- 卡片阴影效果
- 浮动动画
- 淡入淡出过渡

---

**文件结构说明完成！** 📁✨

