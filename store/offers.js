export const state = () => ({
    offers: [],
    offersInfo: [],
    nodata: false,
})

export const getters = {
    offers(state) {
        return state.offers
    },
    offersInfo(state) {
        return state.offersInfo
    },
    nodata(state) {
        return state.nodata
    },
}

export const mutations = {
    SET_OFFERS(state, data) {
        state.offers = data
    },
    SET_NODATA(state, data) {
        state.nodata = data
    },
    SET_OFFERS_INFO(state, data) {
        state.offersInfo = data
    },
}
