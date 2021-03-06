module.exports = {
  base: "/",
  title: "Esper Docs",
  description: "Esper documentation",
  plugins: ["vuepress-plugin-reading-time", "@vuepress/back-to-top"],
  themeConfig: {
    esper_tenant_name: 'foo',
    serviceWorker: {
      updatePopup: true // Boolean | Object, default to undefined.
    },
    algolia: {
      apiKey: 'd18aabe96ec6834a5c269f0b13b9a880',
      indexName: 'esper'
    },
    lastUpdated: "Last Updated",
    head: [
      ['link', { rel: 'icon', href: `favicon.ico` }],
    ['link', { rel: 'manifest', href: 'manifest.json' }],
    ],
    logo: `/esper.svg`,
    nav: [
      // { text: "SDK", link: "/home/pythonsdk.md" },
      // { text: "CLI", link: "/home/espercli.md" },
      // { text: "API", link: "https://esper-io.github.io/esper-api-spec/" },
      { text: "Blog", link: "https://blog.esper.io" },
      // { text: "Product Documentation", link: "/home/devconsole/" }
    ],
    docsRepo: "esper-io/dev-docs",
    docsDir: "docs",
    docsBranch: "develop",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    sidebar: {
      "/home/": [
        "",
        "requirements",
        "gettingstarted",
        "emulator",
        "devicekit",
        "pythonsdk",
        "espercli",
        "api",
        ["devconsole/", "Dev Console"],
        "tutorials",
        "support",
        "faq"
      ]
    },
    displayAllHeaders: false
  }
};
