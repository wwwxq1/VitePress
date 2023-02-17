module.exports = {
    title: 'Hello VitePress',
    description: 'Just playing around.',
    themeConfig: {
      siteTitle: "Kitty",
      logo: "/logo.png",
      nav: [
        { text: "Guide", link: "/guide/" },
        { text: "GuideTest", link: "/guide/test" },
        { text: "gitee", link: "https://github.com/wwwxq1" },
        { 
          text: "Drop Menu",
          items: [
            {text:'Item A', link:'/item-1'},
            {text:'Item B', link:'/item-2'},
            {text:'Item C', link:'/item-3'},
          ]
        },
      ],
    },
  }