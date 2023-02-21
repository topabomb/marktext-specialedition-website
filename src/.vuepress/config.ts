import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import plantuml from "markdown-it-plantuml"
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "MarkText中文特别版",
      description: "全面中文化的MarkText特别版，针对Ebook跟本地笔记增加了一些实用化的功能；",
    },
  },
  theme,
  shouldPrefetch: false,
  extendsMarkdown:(md)=>{
    md.use(plantuml,{
      openMarker:"```plantuml",
      closeMarker:"```"
    })
  },
  plugins: [
    searchProPlugin({
      // index all contents
      indexContent: true,
      // add supports for category and tags
      customFields: [
        {
          getter: (page) => page.frontmatter.category as string | null,
          formatter: "分类: $content",
        },
        {
          getter: (page) => page.frontmatter.tag as string | null,
          formatter: "标签: $content",
        },
      ],
    }),
  ],
});
