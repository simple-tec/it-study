# 简说学堂 - IT学习平台

简说学堂是一个专业的IT学习平台，提供系统化的在线课程，帮助学习者从零基础到高级开发技能的系统提升。

## ✨ 项目特色

- 📚 **系统化课程**：从初级到高级的完整课程体系
- 🎯 **实战导向**：结合实际项目的实战课程
- 💡 **精选内容**：专业团队精心打造的高质量课程
- 🚀 **持续更新**：紧跟技术发展趋势的课程内容

## 📖 项目概述

本项目是一个现代化的响应式网站，包含以下四个主要页面：

1. **首页** - 展示平台特色和亮点
2. **课程页** - 展示所有课程，支持按难度筛选
3. **文档页** - 提供详细的学习指南和参考资料
4. **博客页** - 技术文章和经验分享

## 🗂️ 项目结构

```
it-study/
├── index.html          # 首页
├── courses.html        # 课程页
├── docs.html          # 文档页
├── blog.html          # 博客页
├── css/               # 样式文件目录
│   ├── style.css      # 主样式文件
│   ├── responsive.css # 响应式样式
│   ├── docs.css       # 文档页专用样式
│   └── blog.css       # 博客页专用样式
├── js/                # JavaScript文件目录
│   ├── script.js      # 主交互功能
│   ├── courses.js     # 课程筛选功能
│   ├── docs.js        # 文档导航功能
│   └── blog.js        # 博客交互功能
└── README.md          # 项目说明文档
```

## 🎨 设计特点

- **现代化UI设计**：采用渐变色彩、卡片式布局
- **完全响应式**：适配所有设备（桌面、平板、手机）
- **流畅动画效果**：滚动动画、悬停效果、过渡动画
- **交互式导航**：移动端友好的汉堡菜单

## 📚 课程体系

### 初级课程（¥99）
- 📝 **结合C语言、Java语言，学习Go语言**
  - 通过对比学习的方式，深入理解Go语言的特性和应用场景
  - 链接：https://www.bilibili.com/cheese/play/ss20866

- 🤖 **零基础AI开发指南**
  - 从零开始学习AI开发，无需编程基础
  - 链接：https://www.bilibili.com/cheese/play/ss10591

### 中级课程（¥99）
- ☸️ **Kubernetes/K8s核心开发从入门到精通**
  - 深入学习Kubernetes容器编排平台
  - 链接：https://www.bilibili.com/cheese/play/ss5715

### 高级课程（¥109）
- 🌐 **linux网络协议栈从应用层到内核层**
  - 深入理解Linux网络协议栈的实现机制
  - 链接：https://www.bilibili.com/cheese/play/ss5362

- 💾 **从linux内核到应用层，深入浅出内存管理和调试**
  - 全面掌握Linux内存管理机制
  - 链接：https://www.bilibili.com/cheese/play/ss3125

- ⚡ **轻松玩转linux下的性能调优，开发运维必备！**
  - 学习Linux系统性能调优的各种技巧和方法
  - 链接：https://www.bilibili.com/cheese/play/ss1706

## 🚀 快速开始

### 方法一：直接打开HTML文件
```bash
# 直接在浏览器中打开 index.html
open index.html
# 或者使用文件管理器双击 index.html
```

### 方法二：使用Python HTTP服务器
```bash
# Python 3
python3 -m http.server 9000

# 然后在浏览器中访问
# http://localhost:9000
```

### 方法三：使用Node.js的http-server
```bash
# 安装http-server
npm install -g http-server

# 启动服务器
http-server -p 9000

# 访问地址
# http://localhost:9000
```

## 📱 功能特性

### 首页 (index.html)
- 🏠 Hero区域展示平台标语
- ⭐ 特色功能介绍（4个特色卡片）
- 📊 数据统计展示
- 📢 行动召唤（CTA）区域
- 🦶 页脚信息

### 课程页 (courses.html)
- 🔍 课程筛选功能（全部/初级/中级/高级）
- 📇 课程卡片展示
- 💰 价格标签
- 🔗 课程链接（跳转至B站学习页面）

### 文档页 (docs.html)
- 📋 侧边栏导航
- 📖 文档内容区域
- 🔗 平滑滚动导航
- 📑 文档章节组织

### 博客页 (blog.html)
- 📰 文章卡片展示
- 🏷️ 分类标签
- 📅 发布日期
- 📄 分页功能

## 🎯 交互功能

- **响应式导航栏**：移动端汉堡菜单
- **课程筛选**：点击按钮筛选不同难度的课程
- **平滑滚动**：锚点链接平滑滚动到目标位置
- **动画效果**：滚动时的渐入动画
- **悬停效果**：卡片悬停时的变换效果

## 🛠️ 技术栈

- **HTML5**：语义化标签
- **CSS3**：
  - Flexbox布局
  - Grid布局
  - CSS变量（CSS Custom Properties）
  - 渐变和阴影效果
  - 媒体查询（响应式设计）
- **JavaScript**：
  - ES6+语法
  - DOM操作
  - 事件监听
  - Intersection Observer API（滚动动画）

## 📦 浏览器支持

- ✅ Chrome（推荐）
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ IE 11+（部分功能可能不支持）

## 🎨 颜色方案

```css
主色调：
- 主蓝色：#3b82f6
- 深蓝色：#2563eb
- 紫色：#8b5cf6
- 文字深色：#1f2937
- 文字浅色：#6b7280
- 背景色：#f9fafb
- 白色：#ffffff
```

## 📊 项目统计

- **总文件数**：12个
- **HTML页面**：4个
- **CSS文件**：4个
- **JavaScript文件**：4个
- **课程数量**：6个
- **难度等级**：3个（初级、中级、高级）

## 🔧 自定义开发

### 修改主题颜色
编辑 `css/style.css` 文件中的CSS变量：
```css
:root {
    --primary-color: #3b82f6;  /* 修改主色调 */
    --secondary-color: #8b5cf6; /* 修改辅助色 */
}
```

### 添加新课程
在 `courses.html` 中复制课程卡片HTML结构，修改：
- 课程标题
- 课程描述
- 价格
- 难度等级（data-level属性）
- 链接地址

### 修改动画效果
编辑对应的JS文件：
- `js/script.js` - 全局动画
- `js/courses.js` - 课程筛选动画
- `js/docs.js` - 文档导航动画
- `js/blog.js` - 博客动画

## 📄 许可证

本项目仅供学习和参考使用。

## 👥 贡献

欢迎提交问题和改进建议！

## 📞 联系我们

- 邮箱：contact@jianxue.com
- 技术支持：support@jianxue.com

---

**简说学堂** - 专业的IT学习平台，助力您的技术成长 🚀
