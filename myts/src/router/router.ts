/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
export default [
    {
        path: '/',
        redirect: '/index',
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue'),

        meta: {
            icon: '',
            keepAlive: false,
            title: 'login',
        },
    },
    {
        path: '/index1',
        name: 'index',
        component: () => import('@/views/index/index.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            title: 'index',
        },
    } ,
    {
        path: '/page',
        name: 'index',
        component: () => import('@/views/page1/page1.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            title: 'page',
        },
        children: [
            {
                path: '/contentPage',
                name: 'test',
                component: () => import('@/components/contentPage/contentPage.vue'),
                meta: {
                    icon: '',
                    keepAlive: true,
                    title: 'contentPage',
                },
                children: [
                    {
                        path: '/test',
                        name: 'test',
                        component: () => import('@/components/test/test.vue'),
                        meta: {
                            icon: '',
                            keepAlive: true,
                            title: 'test',
                        },
                    },
                    {
                        path: '/index',
                        name: 'index',
                        component: () => import('@/views/index/index.vue'),
                        meta: {
                            icon: '',
                            keepAlive: true,
                            title: 'index',
                        },
                    } ,
                    {
                        path: '/login1',
                        name: 'login',
                        component: () => import('@/views/login/login.vue'),

                        meta: {
                            icon: '',
                            keepAlive: false,
                            title: 'login',
                        },
                    },
                    {
                        path: '/articleList',
                        name: 'login',
                        component: () => import('@/views/articleList/articleList.vue'),

                        meta: {
                            icon: '',
                            keepAlive: false,
                            title: 'articleList',
                        },
                    },
                ],
            },
            {
                path: '/addText',
                name: 'test',
                component: () => import('@/components/addText/addText.vue'),
                meta: {
                    icon: '',
                    keepAlive: true,
                    title: 'test',
                },
            },

        ],
    },

];
