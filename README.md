<p align="center">
  <a href="https://strapi.io">
    <img src="https://blog.strapi.io/content/images/2017/10/logo.png" width="318px" alt="Strapi logo" />
  </a>
</p>
<h3 align="center">API创建变得简单，安全和快速。</h3>
<p align="center">最先进的开源无头CMS，可轻松构建强大的API。</p>
<br />
<p align="center">
  <a href="https://www.npmjs.org/package/strapi">
    <img src="https://img.shields.io/npm/v/strapi/beta.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.org/package/strapi">
    <img src="https://img.shields.io/npm/dm/strapi.svg" alt="Monthly download on NPM" />
  </a>
  <a href="https://travis-ci.org/strapi/strapi">
    <img src="https://travis-ci.org/strapi/strapi.svg?branch=master" alt="Travis Build Status" />
  </a>
  <a href="http://slack.strapi.io">
    <img src="https://slack.strapi.io/badge.svg" alt="Strapi on Slack" />
  </a>
</p>

<br>

<p align="center">
  <a href="https://strapi.io">
    <img src="https://strapi.io/assets/images/readme.png" />
  </a>
</p>

<br>

Strapi是一个免费的开源无头CMS，可在您需要的任何地方提供您的内容。

- **掌控您的数据**。 使用Strapi，您可以知道数据的存储位置，并且始终可以完全控制。
- **自托管**。 您可以按照自己的方式托管和扩展Strapi项目。 您可以选择所需的任何托管平台：AWS，Netlify，Heroku，VPS或专用服务器。 您可以随着成长而扩展，100％独立。
- **数据库不限制**。 您可以选择自己喜欢的数据库。 Strapi适用于SQL和NoSQL数据库：MongoDB，PostgreSQL，MySQL，MariaDB和SQLite。
- **可自定义**。 您可以通过完全自定义API，路由或插件来完全满足您的需求，从而快速构建自己的逻辑。

## 入门

<a href="https://strapi.io/documentation/3.0.0-beta.x/getting-started/quick-start.html" target="_blank">阅读入门教程</a> 或按照以下步骤操作：

### ⏳ 安装

使用此**Quickstart**命令安装Strapi，以立即创建Strapi项目：

- (使用 **yarn** 安装 Strapi 项目 (推荐). [yarn的安装](https://yarnpkg.com/lang/en/docs/install/).)

```bash
yarn create strapi-app my-project --quickstart
```

**or**

- (使用 npm/npx 安装 Strapi 项目.)

```bash
npx create-strapi-app my-project --quickstart
```

此命令将生成一个具有默认功能（身份验证，权限，内容管理，内容类型生成器和文件上传）的全新项目。 **Quickstart**命令使用**SQLite**数据库安装Strapi，该数据库用于开发中的原型制作。

Enjoy 🎉

### 🖐 要求

完整的安装要求可以在下面的文档中找到 <a href="https://strapi.io/documentation/3.0.0-beta.x/getting-started/install-requirements.html">安装要求</a>.

**支持的操作系统**:

- Ubuntu 18.04/Debian 9.x
- CentOS/RHEL 8
- macOS Mojave
- Windows 10
- Docker - [Docker-Repo](https://github.com/strapi/strapi-docker)

(请注意，Strapi可能在其他操作系统上运行，但目前尚未经过测试或正式支持。)

**Node:**

- NodeJS >= 10.x
- NPM >= 6.x

**数据库:**

- MongoDB >= 3.6
- MySQL >= 5.6
- MariaDB >= 10.1
- PostgreSQL >= 10
- SQLite >= 3

**我们建议始终使用最新版本的Strapi来开始新项目**.

该项目目前在 **Beta** 中。 在项目的此阶段不太可能进行重大的重大更改，但是使用最新版本的Strapi可以确保您具有所有最新功能和更新。 通常每两周发布一次新版本，以修复/增强项目。

## 特征

- **现代管理面板：** 优雅，完全可定制且完全可扩展的管理面板。
- **默认情况下安全：** 可重用策略，CORS，CSP，P3P，Xframe，XSS等。
- **面向插件：** 在几秒钟内安装身份验证系统，内容管理，自定义插件等。
- **快速发展：** Strapi建立在Node.js之上，提供了惊人的性能。
- **前端框架：** 使用任何前端框架（React，Vue，Angular等），移动应用程序甚至是IoT。
- **强大的CLI：** 快速运行Scaffold项目和API。
- **SQL和NoSQL数据库：** 与MongoDB，PostgreSQL，MySQL，MariaDB和SQLite一起使用。

**[在我们的网站上查看更多](https://strapi.io/overview)**.

## 贡献

在向项目提交请求请求之前，请阅读我们的[Contributing Guide](./CONTRIBUTING.md)。

## 社区支持

有关使用Strapi的一般帮助，请参阅[官方Strapi文档](https://strapi.io/documentation/)。 要获得其他帮助，您可以使用以下任一渠道提出问题：

- [StackOverflow](http://stackoverflow.com/questions/tagged/strapi)
- [Slack](http://slack.strapi.io) (更快的支持帮助)
- [Spectrum](https://spectrum.chat/strapi)
- [GitHub](https://github.com/strapi/strapi) (错误报告，贡献)
- [ProductBoard](https://portal.productboard.com/strapi/tabs/2-under-consideration) (路线图，功能要求)
- [Twitter](https://twitter.com/strapijs) (快速获取新消息)
- [Facebook](https://www.facebook.com/Strapi-616063331867161)
- [YouTube 频道](https://www.youtube.com/strapi) (从视频教程中学习)

## 迁移

遵循Wiki上的[迁移指南](https://github.com/strapi/strapi/wiki)，以使您的项目保持最新。

## 开发计划

查看我们的[开发计划](https://portal.productboard.com/strapi)，以了解已发布的最新功能和即将推出的功能。 您也可以给我们提供见解并投票支持特定功能。

## 许可证

[MIT License](LICENSE.md)Copyright (c) 2015-2020 [Strapi Solutions](https://strapi.io/).
