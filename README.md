# 小兔鲜儿

基于 Vue 3 构建的全功能电商前端项目，涵盖商品浏览、购物车、结算、支付、用户中心等完整购物流程。

## 技术栈

| 类别         | 技术                          |
| ------------ | ----------------------------- |
| 框架         | Vue 3（Composition API）      |
| 构建工具     | Vite                          |
| 状态管理     | Pinia（含持久化插件）         |
| 路由         | Vue Router                    |
| UI 组件库    | Element Plus                  |
| HTTP 客户端  | Axios                         |
| CSS 预处理   | SCSS                          |
| 工具库       | @vueuse/core、dayjs           |

## 功能特性

- **首页** — 分类导航、轮播图、新品推荐、热门推荐、按分类展示商品
- **分类浏览** — 一级分类与二级分类页面，支持排序与无限滚动加载
- **商品详情** — 图片预览、SKU 规格选择、加入购物车、热销排行
- **购物车** — 支持未登录（本地存储）和已登录（服务端同步）双模式，登录后自动合并
- **结算下单** — 地址选择、配送时间、支付方式、订单汇总
- **支付** — 支付宝/微信/银行卡支付，倒计时自动取消，支付结果回调
- **登录** — 账号密码登录，Token 认证，401 自动跳转登录页
- **个人中心** — 个人信息展示、订单列表（分状态筛选、分页）

## 项目结构

```
vue3-rabbit/
├── index.html                  # 入口 HTML
├── vite.config.js              # Vite 配置（代理、别名、SCSS 自动注入）
├── package.json
└── src/
    ├── main.js                 # 应用入口
    ├── App.vue                 # 根组件
    ├── apis/                   # API 接口层
    │   ├── home.js             # 首页相关接口
    │   ├── category.js         # 分类相关接口
    │   ├── detail.js           # 商品详情接口
    │   ├── cart.js             # 购物车接口
    │   ├── checkout.js         # 结算/下单接口
    │   ├── pay.js              # 支付接口
    │   ├── order.js            # 订单接口
    │   └── user.js             # 用户/登录接口
    ├── stores/                 # Pinia 状态管理
    │   ├── user.js             # 用户状态（含持久化）
    │   ├── cartStore.js        # 购物车状态（含持久化）
    │   └── category.js         # 分类状态
    ├── router/                 # 路由配置
    │   └── index.js
    ├── components/             # 全局组件
    │   ├── XtxSku/             # SKU 规格选择器
    │   └── ImageView/          # 图片预览组件
    ├── composables/            # 组合式函数
    │   └── useCountDown.js     # 倒计时逻辑
    ├── directives/             # 自定义指令
    │   └── index.js            # 图片懒加载指令
    ├── utils/
    │   └── http.js             # Axios 封装（拦截器、统一错误处理）
    ├── styles/                 # 全局样式
    │   ├── var.scss            # SCSS 变量
    │   ├── common.scss         # 全局重置与工具类
    │   └── element/            # Element Plus 主题覆盖
    └── views/                  # 页面视图
        ├── Layout/             # 布局组件（头部、导航、页脚）
        ├── Home/               # 首页
        ├── Category/           # 一级分类
        ├── SubCategory/        # 二级分类
        ├── Detail/             # 商品详情
        ├── CartList/           # 购物车列表
        ├── Checkout/           # 结算页
        ├── Pay/                # 支付页
        ├── Login/              # 登录页
        └── Member/             # 个人中心
```

## 快速开始

### 环境要求

- Node.js `^20.19.0` 或 `>=22.12.0`
- 包管理器：npm / pnpm / yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

开发服务器默认运行在 `http://localhost:5173`，所有 `/api` 请求会自动代理到远程后端。

### 构建生产版本

```bash
npm run build
```

构建产物输出到 `dist/` 目录。

## 项目配置

### 路径别名

`@` 映射到 `src/` 目录，可在任意文件中使用：

```js
import { getUserInfo } from '@/apis/user'
```

### API 代理

开发环境下，`/api` 前缀的请求会被 Vite 代理到远程服务器，详见 `vite.config.js` 中的 `server.proxy` 配置。

### SCSS 主题

主题色等变量定义在 `src/styles/var.scss` 中，已通过 Vite 配置自动注入到所有组件，可直接使用：

```scss
.my-element {
  color: $xtxColor;
}
```

### 代码格式化

项目使用 Prettier 进行代码格式化，配置见 `.prettierrc.json`。推荐使用 VS Code 并安装 Prettier 扩展，保存时自动格式化。
