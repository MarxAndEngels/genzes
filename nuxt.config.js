const axios = require('axios')
export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        htmlAttrs: {
            lang: 'ru'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    loading: {
        color: '#013b70',
        height: '0',
        duration: 3000,
        continuous: true,
        throttle: 0
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~assets/scss/index.scss',
        '@fancyapps/ui/src/Fancybox/Fancybox.scss'
    ],
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        {src: '~/plugins/helpers.js'},
        {src: '~/plugins/slideToggle.js'},
        {src: '~/plugins/tippy.js'},
        {src: "plugins/pagination.js", mode: 'client'},
        {src: "~/plugins/fancyapps-ui.js", mode: 'client'},
        {src: 'plugins/owl.js', mode: 'client'},
        {src: '~/plugins/inputmask.js', mode: 'client'},
        {src: '~/plugins/ymapPlugin.js', mode: 'client'},
        '~/plugins/lodash'
    ],
    buildModules: ['nuxt-lazysizes'],
    lazySizes: {
        extendAssetUrls: {
            img: ['src', 'srcset', 'data-src', 'data-srcset'],
            source: ['src', 'srcset', 'data-src', 'data-srcset']
        }
    },
    sitemap: {
        defaults: {
            changefreq: 'daily',
            priority: 1,
            lastmod: new Date()
        },
        exclude: [
            '/thanks'
        ]
        // routes: async () => {
        //     const {data} = await axios.get('https://apinew.carro.ru/api/sitemap/volkswagen')
        //     return data.map((item) => `/cars/${item}`)
        // }
    },
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    router: {
        scrollBehavior: async (to, from, savedPosition) => {
            if (savedPosition) {
                return savedPosition
            }

            const findEl = async (hash, x) => {
                return document.querySelector(hash) ||
                    new Promise((resolve, reject) => {
                        if (x > 50) {
                            return resolve()
                        }
                        setTimeout(() => {
                            resolve(findEl(hash, ++x || 1))
                        }, 100)
                    })
            }

            if (to.hash) {
                let el = await findEl(to.hash)
                if ('scrollBehavior' in document.documentElement.style) {
                    return window.scrollTo({top: el.offsetTop, behavior: 'smooth'})
                }
            }
            if (Number(localStorage.firstCome) !== 1) {
                return {x: 0, y: 0}
            }


        },
        linkExactActiveClass: 'active'
    },
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/svg-sprite',
        '@nuxtjs/apollo',
        '@nuxtjs/axios',
        '@nuxtjs/device',
        '@nuxtjs/sitemap'
    ],
    svgSprite: {
        input: '~/assets/icons/'
    },
    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: 'https://webapi.car-vana.ru/graphql'
            }
        }
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        loaders: {
            scss: {
                implementation: require('sass')
            }
        }
    },
    serverMiddleware: {
        '/feeds/yandex/adverts': '~/server-middleware/feeds.js',
        '/feeds/google/xml/adverts': '~/server-middleware/google.js',
        '/robots.txt': '~/server-middleware/robots.js',
        '/sitemap.xml': '~/server-middleware/sitemap.js'
    }
}
