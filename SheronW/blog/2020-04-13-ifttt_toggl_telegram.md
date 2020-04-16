---
title: 利用 IFTTT 将 Toggl Report 发送到 Telegram Channel
tags: [折腾记录]
---

## 主要思路

<del>生写一个 Telegram Bot 也不是不行但我就是想找借口玩 IFTTT</del>

VPS 或树莓派：写一个自动化的程序并定时运行，从 Toggl Report API 获取数据，整理之后 Post 给 IFTTT 的 Webhook。

IFTTT：`if` 收到服务器端的 Post `then` 发消息到 Telegram 指定 chat

Telegram：利用[@IFTTT](https://t.me/IFTTT)实现 IFTTT 与 Telegram 的联动

本记录使用的是目前的 Toggl API v8 以及 Toggl Report API v2。

<!--truncate-->

## 获取 Toggl API Token 及 Workspace ID

登录 Toggl 网页版，进入`Profile Settings`页面翻到下面有自己的`api_token`，把这玩意儿记下来待会儿用。切换到自己想要获取 Report 的 Workspace，点 Settings，把地址栏中`https://toggl.com/app/{workspace_id}/settings/general`的`workspace_id`记下来。

还有另外一种更加麻烦的获取方式：

在命令行中输入（第一行替换自己的`api_token`）：

```shell
curl -v -u {api_token}:api_token \
  -H "Content-Type: application/json" \
  -X GET 'https://www.toggl.com/api/v8/workspaces'
```

然后在返回的一大堆 JSON 数据中中找到相应 Workspace 名字并记录其`id`。

## 创建 IFTTT Recipe

在 Telegram 中找到 [@IFTTT](https://t.me/IFTTT) 的官方机器人，`\start`并授权 IFTTT 帐号，根据机器人提示关联相应的群组或频道。（如果是私密频道的话要先公开把机器人拉进来再改回去……）

在 IFTTT 中新建一个 Recipe：

- `this` 选择 Webhook -> Receive a web request，设置 event 名
- `that` 选择 Telegram -> Send message -> 信息内容只留 value1

## 编码及部署

<del>IFTTT 还是不太行，对于高贵的 Apple 用户来说，整个流程都能用 workflow 来无代码无服务器实现。</del>

咱用了 Node.js 在 Linode 上跑。

### 获取 Toggl 数据

以每周发送本周的 Detailed Report 为例，想要在这个基础上实现其他功能可以参考其[官方文档](https://github.com/toggl/toggl_api_docs/blob/master/reports.md#request-parameters)。

常用参数：

- `user_agent`：必填，app 名或自己邮箱就行
- `workspace_id`：必填，即上一步我们记录的 id
- `since`和`until`：YYYY-MM-DD 格式，默认区间为[today-6 days,today]

先`node 文件名.js` 在命令行里打印下原始数据，确认代码可用。

```javascript
const https = require("https");

const api_token = "你的api_token";
const workplace_id = "你的workplace_id";
const user_agent = "你的邮箱或应用名";

const url = new URL(
  "https://toggl.com/reports/api/v2/details?user_agent=" +
    user_agent +
    "&workspace_id=" +
    workplace_id
);

const options = {
  headers: {
    "Content-Type": "application/json",
  },
  auth: api_token + ":api_token",
};

https.get(url, options, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    // 获得所有数据
    console.log(data);
  });
});
```

### 清理格式

IFTTT <del>果然不太行，</del>只能 POST 三个值，那就头铁把结果并成一个字符串吧。

先把能用得到的数据挑出来，然后整理格式。

把上面代码里的 `console.log(data);`替换成下面的内容，再打印看效果……

```javascript
let minEntries = JSON.parse(data).data.reduce((acc, cur) => {
  // 选取需要的信息
  const { description, start, end, project } = cur;
  const summary = `${start.slice(5, 10)} ${start.slice(11, 16)}-${end.slice(
    11,
    16
  )}「${project}」${description}<br>`;
  return acc + summary;
}, "");
console.log(minEntries);
```

### 发送至 IFTTT

进入 https://ifttt.com/maker_webhooks，选择右上角 `Documentation`，记录发送请求的 URL。

然后把之前新建的 Receipe 的 Event 名添加到你的 URL 那个空缺里，用它来发送一个 POST 请求。

把我们上一步处理完的字符串作为数据 POST 出去，然后整个编码过程就完工了（

再次运行，测试自己的频道或群聊是否收到相应消息。

```javascript
const https = require("https");

const api_token = "你的 API Token";
const workplace_id = "你的 Workplace ID";
const user_agent = "你的邮箱或应用名";

const webhook = `https://maker.ifttt.com/trigger/你的Event名/with/key/你url的key`;

const url = new URL(
  "https://toggl.com/reports/api/v2/details?user_agent=" +
    user_agent +
    "&workspace_id=" +
    workplace_id
);

const options = {
  headers: {
    "Content-Type": "application/json",
  },
  auth: api_token + ":api_token",
};

https.get(url, options, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    let minEntries = JSON.parse(data).data.reduce((acc, cur) => {
      // 选取需要的信息
      const { description, start, end, project } = cur;
      const summary = `${start.slice(5, 10)} ${start.slice(11, 16)}-${end.slice(
        11,
        16
      )}「${project}」${description}<br>`;
      return acc + summary;
    }, "");
    sendToIFTTT(minEntries);
  });
});

function sendToIFTTT(data) {
  const postData = JSON.stringify({
    value1: data,
  });

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(postData),
    },
  };

  const req = https.request(webhook, options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
  });

  req.on("error", (e) => {
    console.error(`problem with request: ${e.message}`);
  });

  // Write data to request body
  req.write(postData);
  req.end();
}
```

### 定时运行

利用 Crontab 实现每周日晚上 23:59 运行该程序<del>，请使用命令`date`查看 VPS 所在地区的时间</del>。

命令行中输入`crontab -e`，然后添加一行：

```bash
59 23 * * 0 node /home/你的用户名/到程序的路径
```

## 其他想法

这么一套搞下来，觉得用 IFTTT 的自动化还是挺鸡肋的，工作量近似于自己搞一个 Telegram Bot ，POST 还有参数限制。

不过动手搞的过程中想到了很多脑洞：

- _因为 Toggl API 还可以输出 PDF 格式的 Report，所以可以用类似的原理来自动化储存 Report 至云端（IFTTT）？_
- 可以用 IFTTT 实现 Google Assistant 和之前写的 Expire Soon Bot 的联动
- IFTTT 只适合轻量级的自动化，比如 Spotify 收藏新歌或者 Github 开新坑之后分享到频道这样的。但从另一个角度来说，其简单易用性能让非程序员也能玩得开心，相比之下 Workflow 虽然简单易用，但功能过于强大所以对于不熟悉程序的人来说上手成本太高了（
