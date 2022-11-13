import settings from '~/apollo/queries/settings'
import marks from '~/apollo/queries/marks'

export const actions = {
    async nuxtServerInit({dispatch, commit, state}, {app, req}) {
        let site_id = 45
        let site_id_mirror = 55
        let current_site_id
        await commit('settings/SET_SITE_ID', site_id)

        if (req.headers.host === 'car-vana.ru') {
            await commit('settings/SET_SITE_ID', site_id)
            await commit('settings/SET_DOMAIN', 'https://car-vana.ru')
            await commit('settings/SET_CATALOG_ROUTE', 'cars')
            await commit('settings/SET_IS_MIRROR', false)
            current_site_id = site_id
        }
        else if (req.headers.host === 'car-wana.ru') {
            await commit('settings/SET_SITE_ID', site_id_mirror)
            await commit('settings/SET_DOMAIN', 'https://car-wana.ru')
            await commit('settings/SET_CATALOG_ROUTE', 'coche')
            await commit('settings/SET_IS_MIRROR', true)
            current_site_id = site_id_mirror
        }
        else{
            await commit('settings/SET_SITE_ID', site_id)
            await commit('settings/SET_DOMAIN', 'https://car-vana.ru')
            await commit('settings/SET_CATALOG_ROUTE', 'cars')
            await commit('settings/SET_IS_MIRROR', true)
            current_site_id = site_id
        }
        let client = app.apolloProvider.defaultClient
        let marksResponse = await client.query(
            {
                query: marks,
                variables: {
                    site_id: current_site_id
                }
            })
        await commit('marks/SET_MARKS', marksResponse.data.marks)

        let currentSettings = {}
        let settingsResponse = await client.query(
            {
                query: settings,
                variables: {
                    site_id: current_site_id
                }
            })
        settingsResponse.data.settings.settings.map(value => {
            currentSettings[value.key] = value.value
        })
        commit('settings/SET_SETTINGS', currentSettings)
    },

}