import _ from 'lodash'
export const actions = {
    async request({rootState}, {query, variables}) {
        let assignVariables = {
            site_id: Number(rootState.settings.site_id)
        }
        let client = this.app.apolloProvider.defaultClient
        let params = {...assignVariables, ...variables}

        return await client.query(
            {
                query: query,
                variables: _.pickBy(params),
                fetchPolicy: 'no-cache'
            })
    },
    async requestPOST({rootState}, {query, variables}) {
        let assignVariables = {
            site_id: Number(rootState.settings.site_id)
        }
        let client = this.app.apolloProvider.defaultClient
        let params = {...assignVariables, ...variables}

        return await client.mutate(
            {
                mutation: query,
                variables: _.pickBy(params)
            })
    },
}