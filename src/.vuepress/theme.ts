import { hopeTheme } from "vuepress-theme-hope";
import {  zhNavbar } from "./navbar/index.js";
import {  zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  //hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",
  author: {
    name: "topabomb",
    url: "https://weero.net",
  },
  iconAssets: "iconfont",
  logo: "/logo.svg",
  repo: "topabomb",

  docsDir: "...",
  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,
      // sidebar
      sidebar: zhSidebar,
      displayFooter: true,
      metaLocales: {
        editLink: "在GitHub中编辑此页面",
      },
    },
  },
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },
  plugins: {
    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
