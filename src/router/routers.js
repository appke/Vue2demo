export default [
    {
        path: '/hello-world',
        name: 'hello-world',
        meta: {
            hide: true
        },
        component: Main,
        children: [
            {
                path: 'hello-word-page',
                name: 'hello word child page',
                meta: {
                    icon: 'social-buffer',
                    title: 'hello world'
                },
                component: () => import('@/view/hello-word.vue')
            }
        ]
    }
]