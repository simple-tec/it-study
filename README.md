# 简说学堂 - 专业技术学习平台

一个现代化的技术教育网站，提供高质量的在线课程、技术文档和博客内容。

## 🚀 项目特色

- **响应式设计** - 完美适配桌面端、平板和手机
- **现代UI设计** - 采用渐变色彩和流畅动画
- **丰富交互** - 包含搜索、筛选、懒加载等功能
- **SEO友好** - 语义化HTML结构
- **高性能** - 优化的CSS和JavaScript

## 📁 项目结构

```
简说学堂/
├── index.html          # 首页
├── courses.html        # 课程页面
├── docs.html          # 文档页面
├── blog.html          # 博客页面
├── css/
│   ├── style.css      # 基础样式
│   ├── courses.css    # 课程页面样式
│   ├── docs.css       # 文档页面样式
│   ├── blog.css       # 博客页面样式
│   └── responsive.css # 响应式样式
├── js/
│   ├── script.js      # 公共脚本
│   ├── courses.js     # 课程页面脚本
│   ├── docs.js        # 文档页面脚本
│   └── blog.js        # 博客页面脚本
├── images/            # 图片资源
└── README.md          # 项目说明
```

## 🎯 页面功能

### 🏠 首页 (index.html)
- Hero区域展示品牌形象
- 学习特色介绍
- 热门课程预览
- 统计数据展示

### 📚 课程页 (courses.html)
- 6个精品课程展示
- 按难度等级筛选（初级/中级/高级）
- 课程详细信息
- 学习路径推荐

### 📖 文档页 (docs.html)
- 技术文档中心
- 侧边栏导航
- 搜索功能
- 代码示例高亮
- 页面目录生成

### ✍️ 博客页 (blog.html)
- 技术文章列表
- 分类筛选
- 搜索功能
- 热门文章推荐
- 标签云

## 🛠️ 技术栈

- **HTML5** - 语义化标签
- **CSS3** - Flexbox/Grid布局、动画
- **JavaScript ES6+** - 现代JavaScript特性
- **Font Awesome** - 图标库

## ✨ 特色功能

### 🔍 搜索功能
- 实时搜索高亮
- 支持标题、内容、标签搜索
- 搜索结果计数

### 📱 响应式设计
- 移动优先设计
- 断点适配（480px, 768px, 1024px, 1200px）
- 触摸设备优化

### 🎨 交互效果
- 平滑滚动
- 悬停动画
- 加载动画
- 页面过渡效果

### ♿ 无障碍支持
- 语义化HTML
- 键盘导航
- 高对比度模式
- 减少动画偏好

## 🚀 快速开始

1. **克隆项目**
   ```bash
   git clone <项目地址>
   cd 简说学堂
   ```

2. **启动本地服务器**
   ```bash
   # 使用Python
   python -m http.server 8000

   # 使用Node.js
   npx serve .

   # 使用PHP
   php -S localhost:8000
   ```

3. **访问网站**
   打开浏览器访问 `http://localhost:8000`

## 📱 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 🎨 自定义配置

### 主题色彩
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #1a202c;
    --bg-color: #ffffff;
}
```

### 字体配置
```css
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

## 📊 课程信息

### 初级课程
1. **结合C语言、Java语言，学习Go语言** - ¥99
2. **零基础AI开发指南** - ¥99

### 中级课程
1. **Kubernetes/K8s核心开发从入门到精通** - ¥99

### 高级课程
1. **Linux网络协议栈从应用层到内核层** - ¥109
2. **从Linux内核到应用层，深入浅出内存管理和调试** - ¥109
3. **轻松玩转Linux下的性能调优，开发运维必备！** - ¥109

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📝 更新日志

### v1.0.0 (2024-03-15)
- ✨ 初始版本发布
- 🎨 完整的UI设计
- 📱 响应式布局
- 🔍 搜索功能
- 📚 4个核心页面

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系方式

- 邮箱: info@jianshuo.com
- 网站: https://jianshuo.com

---

⭐ 如果这个项目对你有帮助，请给我们一个星标！