export const state = () => ({
    crumbs: [],
})

export const getters = {
    crumbs(state) {
        return state.crumbs
    }
}

export const mutations = {
    SET_CRUMBS(state, data) {
        state.crumbs = data
    }
}
