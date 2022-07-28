var CONST = require("./const");

module.exports = {
    title: "Valan's TIL",
    description: "Valan's Log (Today I Learned)",
    base: "/TIL/",
    dest: 'build',
    sidebarDepth: 2,
    markdown: {
        lineNumbers: true
    },
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/logo.png'
            }
        ]
    ],


    themeConfig: {
        nav:
            [
                {
                    text: 'GitHub',
                    link: 'https://github.com/dev-valan/'
                }, {
                text: 'Blogs',
                link: 'https://valan.tistoy.com/'
            }
            ],


        sidebar: [
            {
                title: 'ReactJS',
                children: CONST.ReactJS,
            },

            {
                title: 'JavaScript',
                children: CONST.JavaScriptList,
            },

            {
                title: 'Flutter',
                children: CONST.Flutter,
            },

            {
                title: 'Git',
                children: CONST.Git
            },

            {
                title: 'Debug',
                children: CONST.Debug
            }

        ],
    },
}