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
                // {
                //     text: 'GitHub',
                //     link: 'https://github.com/dev-valan/'
                // },
                {
                    text: 'RESUME',
                    link: 'https://valanlog.notion.site/Valan-b91bd2f277ef4c10b4327839af2b865d'
                }
            ],


        sidebar: [

            {
                title: 'Flutter',
                children: CONST.Flutter,
            },
            {
                title: 'React.js',
                children: CONST.ReactJS,
            },

            {
                title: 'Next.js',
                children: CONST.NextJS,
            },

            {
                title: 'JavaScript',
                children: CONST.JavaScriptList,
            },

            {
                title: 'Python',
                children: CONST.Python,
            },

            {
                title: 'Git',
                children: CONST.Git
            },

            {
                title: 'Debug',
                children: CONST.Debug
            },

            {
                title: 'Etc',
                children: CONST.Etc
            }

        ],
    },
}