import seoTags from "@/apollo/queries/seoTags";
import bank from "@/apollo/queries/bank/bank";
import {mapGetters, mapMutations} from "vuex";

export default {
    async asyncData({app, route, store, error}) {
        let site_id = store.getters['settings/site_id']
        let client = app.apolloProvider.defaultClient
        let seo = await client.query({
            query: seoTags,
            variables: {site_id: site_id, url: route.path === '/' ? '/home' : route.path}
        })
        if(route.params.bank){
            try {
                let response = await client.query(
                    {
                        query: bank,
                        variables: {
                            site_id,
                            slug: route.params.bank,
                        }
                    })
                store.commit('banks/SET_BANK', response.data.bank)
            }
            catch (er){
                error({statusCode: 404, message: '404'})
            }
        }
        if(seo.data.seoTag.title === null && seo.data.seoTag.page_title === null){

            error({statusCode: 404, message: '404'})
        }
        return {
            description: seo.data.seoTag.description,
            pageTitle: seo.data.seoTag.page_title,
            title: seo.data.seoTag.title,
            crumbs: seo.data.seoTag.crumbs
        }
    },
    methods: {
        ...mapMutations({
            setCrumbs: 'crumbs/SET_CRUMBS'
        })
    },
    computed: {
        ...mapGetters({
            domain: 'settings/domain'
        })
    },
    created() {
        this.setCrumbs(this.crumbs)
    },
    head() {
        let currentMeta = [
            {
                hid: 'desctiption',
                name: 'description',
                content: this.description
            },
            {
                hid: 'og:type',
                property: 'og:type',
                content: 'website',
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: this.domain + this.$route.fullPath,
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: this.title,
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: this.description
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: this.domain + 'img/about/1.jpeg'
            }
        ]
        if (this.domain === 'https://car-wana.ru/') {
            // currentMeta.push({
            //     name: 'robots',
            //     content: 'noindex, nofollow'
            // })
        }
        return {
            title: this.title,
            description: this.description,
            link: [
                {
                    rel: 'canonical',
                    href: this.domain + this.$route.fullPath
                }
            ],
            meta: currentMeta
        }
    }
}