import { sidebar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar([
  "/DailyRoutine",
  // "/Fitness",
  // 读书笔记架构更换到 docsify，不能使用相对链接
  { text: "读书笔记", link: "https://colania.github.io/reading/" },
  {
    text: "随心记",
    prefix: "/daily/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "程序人生",
    prefix: "/code",
    collapsible: true,
    children: [
      {
        text: "语言",
        collapsible: true,
        prefix: "language",
        children: ["Markdown.md", "Regex.md"],
      }, {
        text: "编码",
        link: "",
        collapsible: true,
        prefix: "services",
        children: ["Docker.md"],
      }, {
        text: "工作感悟",
        link: "",
        collapsible: true,
        prefix: "work",
        children: [
          "onlineProblem.md",
          {
            text: "事前",
            link: "",
            collapsible: true,
            prefix: "before",
            children: [],
          },
          {
            text: "事中",
            link: "",
            collapsible: true,
            prefix: "during",
            children: [],
          },
          {
            text: "事后",
            link: "after",
            collapsible: true,
            children: [],
          }
        ],
      }
    ],
  },
  {
    text: "应用手册",
    prefix: "/apps/",
    collapsible: true,
    children: [
      "ChatGPT.md",
      "AppNotes.md",
      "Chrome.md",
    ],
  },

  {
    text: "生活记录",
    prefix: "/life/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "开口说英语",
    prefix: "/english/",
    collapsible: true,
    children: [
      {
        text: "工作英语",
        collapsible: true,
        prefix: "work",
        children: ["meeting.md"],
      }, {
        text: "生活英语",
        link: "",
        collapsible: true,
        prefix: "life",
        children: [],
      }
    ],
  },

  {
    text: "金融小知识",
    prefix: "/finance",
    link: "",
    collapsible: true,
    children: "structure",
  },
]);
