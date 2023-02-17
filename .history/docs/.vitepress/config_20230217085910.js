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
      socialLinks: [
        { icon: "github", link: "https://gitee.com/geeksdidi" },
        { icon: "twitter", link: "..." },
        // You can also add custom icons by passing SVG as string:
        {
          icon: {
            svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
          },
          link: "...",
        },
      ],  
    },
  }