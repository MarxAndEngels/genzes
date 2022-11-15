export const state = () => ({
    filters: {},
    showFilters: true
})

export const getters = {
    filters(state) {
        return state.filters
    },
    showFilters(state) {
        return state.showFilters
    }
}

export const mutations = {
    SET_FILTERS(state, data) {
        state.filters = data
    },
    SET_SHOW_FILTERS(state, data) {
        state.showFilters = data
    },
}
