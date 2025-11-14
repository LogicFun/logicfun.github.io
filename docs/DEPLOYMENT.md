# LogicFun 演示页面部署指南

本指南将帮助您将 LogicFun 演示页面部署到 GitHub Pages。

## 📋 前提条件

- GitHub 账号
- Git 已安装（可选，用于命令行部署）

## ⚡ 快速开始（5分钟完成）

### 第一步：创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角的 **"+"** 按钮，选择 **"New repository"**
3. 仓库名称填写：**`logicfun.github.io`**
4. 选择 **"Public"**（公开）
5. **不要**勾选任何初始化选项
6. 点击 **"Create repository"**

### 第二步：上传文件

1. 在新创建的仓库页面，点击 **"uploading an existing file"**
2. 将以下文件拖拽到上传区域：
   - ✅ `index.html`
   - ✅ `assets/styles.css`
   - ✅ `assets/script.js`
   - ✅ `images/` 目录（所有截图）
   - ✅ `privacy.html`
   - ✅ `terms.html`
   - ✅ `README.md`
   - ✅ `favicon.png`
3. 在底部填写提交信息：**`初始化 LogicFun 演示页面`**
4. 点击 **"Commit changes"**

### 第三步：启用 GitHub Pages

1. 点击仓库顶部的 **"Settings"**（设置）
2. 在左侧菜单找到 **"Pages"**
3. 在 **"Source"** 下拉菜单中选择 **"main"** 分支
4. 点击 **"Save"**
5. 页面会显示：**"Your site is ready to be published at https://logicfun.github.io"**

### 第四步：等待并访问

1. 等待 **2-5 分钟**（GitHub 需要时间构建网站）
2. 访问：**https://logicfun.github.io**
3. 🎉 完成！

---

## 🚀 详细部署步骤

### 方法 1：通过 GitHub 网页界面（推荐新手）

#### 步骤 1：创建仓库

1. 登录 GitHub
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 仓库名称填写：`logicfun.github.io`（如果是组织账号）或 `username.github.io`（如果是个人账号）
4. 选择 "Public"（公开仓库）
5. 不要勾选 "Initialize this repository with a README"
6. 点击 "Create repository"

#### 步骤 2：上传文件

1. 在新创建的仓库页面，点击 "uploading an existing file"
2. 将以下文件拖拽到上传区域：
   - `index.html`
   - `styles.css`
   - `script.js`
   - `privacy.html`
   - `terms.html`
   - `README.md`
3. 在底部填写提交信息：`Add LogicFun demo page`
4. 点击 "Commit changes"

#### 步骤 3：启用 GitHub Pages

1. 进入仓库的 "Settings"（设置）
2. 在左侧菜单找到 "Pages"
3. 在 "Source" 下拉菜单中选择 "main" 分支
4. 点击 "Save"
5. 等待几分钟，页面会显示访问链接

#### 步骤 4：访问网站

访问 `https://logicfun.github.io` 或 `https://username.github.io`

---

### 方法 2：通过命令行（推荐开发者）

#### 步骤 1：创建并克隆仓库

```bash
# 在 GitHub 上创建仓库后，克隆到本地
git clone https://github.com/username/logicfun.github.io.git
cd logicfun.github.io
```

#### 步骤 2：复制文件

```bash
# 将演示页面文件复制到仓库目录
cp /path/to/demo/index.html .
cp /path/to/demo/styles.css .
cp /path/to/demo/script.js .
cp /path/to/demo/privacy.html .
cp /path/to/demo/terms.html .
cp /path/to/demo/README.md .
```

#### 步骤 3：提交并推送

```bash
# 添加所有文件
git add .

# 提交更改
git commit -m "Add LogicFun demo page"

# 推送到 GitHub
git push origin main
```

#### 步骤 4：启用 GitHub Pages

1. 进入 GitHub 仓库页面
2. Settings > Pages
3. Source 选择 "main" 分支
4. 保存

#### 步骤 5：访问网站

等待几分钟后访问 `https://logicfun.github.io`

---

## 🎨 自定义域名（可选）

如果您有自己的域名，可以配置自定义域名：

### 步骤 1：添加 CNAME 文件

在仓库根目录创建 `CNAME` 文件，内容为您的域名：

```
www.yourdomain.com
```

### 步骤 2：配置 DNS

在您的域名提供商处添加 DNS 记录：

**A 记录：**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**或 CNAME 记录：**
```
username.github.io
```

### 步骤 3：在 GitHub 设置自定义域名

1. Settings > Pages
2. Custom domain 填写您的域名
3. 勾选 "Enforce HTTPS"
4. 保存

---

## 🔧 更新网站

### 通过网页界面更新

1. 进入仓库
2. 点击要编辑的文件
3. 点击铅笔图标编辑
4. 提交更改

### 通过命令行更新

```bash
# 进入仓库目录
cd logicfun.github.io

# 修改文件后提交
git add .
git commit -m "Update content"
git push origin main
```

---

## 📱 添加应用图标（可选）

### 步骤 1：准备图标文件

从 LogicFun 项目复制图标：

```bash
cp /path/to/LogicFun/assets/app_icon.png favicon.png
```

### 步骤 2：上传到仓库

将 `favicon.png` 上传到仓库根目录

### 步骤 3：更新 HTML

在 `index.html` 的 `<head>` 部分已经包含了图标引用：

```html
<link rel="icon" type="image/png" href="favicon.png">
```

---

## ✅ 验证部署

部署完成后，检查以下内容：

- [ ] 主页正常显示
- [ ] 所有链接可以点击
- [ ] 导航菜单工作正常
- [ ] 平滑滚动效果正常
- [ ] 响应式设计在移动端正常
- [ ] 隐私政策页面可访问
- [ ] 用户协议页面可访问

---

## 🐛 常见问题

### 问题 1：页面显示 404

**解决方案：**
- 确认仓库名称正确（必须是 `username.github.io` 格式）
- 确认 GitHub Pages 已启用
- 等待 5-10 分钟让 GitHub 构建网站

### 问题 2：样式没有加载

**解决方案：**
- 检查 `styles.css` 文件是否在仓库根目录
- 检查文件名大小写是否正确
- 清除浏览器缓存后重试

### 问题 3：JavaScript 不工作

**解决方案：**
- 检查 `script.js` 文件是否在仓库根目录
- 打开浏览器开发者工具查看错误信息
- 确认文件编码为 UTF-8

---

## 📊 监控和分析（可选）

### 添加 Google Analytics

在 `index.html` 的 `</head>` 前添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

---

## 🔗 相关资源

- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [自定义域名配置](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## 📞 需要帮助？

如果遇到问题，可以：

1. 查看 [GitHub Pages 文档](https://docs.github.com/en/pages)
2. 通过邮箱联系：support@logicfun.com
3. 使用应用内反馈功能

---

**祝您部署顺利！** 🚀

