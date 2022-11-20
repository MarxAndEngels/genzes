export const state = () => ({
    modal: false,
    modalAutoteka: false,
    modalFilter: true,
    modalType: '',
    modalTitle: '',
    modalSubTitle: '',
    modalOffer: null,
})
export const getters = {
    modal(state) {
        return state.modal
    },
    modalAutoteka(state) {
        return state.modalAutoteka
    },
    modalFilter(state) {
        return state.modalFilter
    },
    modalType(state) {
        return state.modalType
    },
    modalTitle(state) {
        return state.modalTitle
    },
    modalSubTitle(state) {
        return state.modalSubTitle
    },
    modalOffer(state) {
        return state.modalOffer
    },
}
export const mutations = {
    SET_MODAL(state, data) {
        state.modal = data
    },
    SET_MODAL_AUTOTEKA(state, data) {
        state.modalAutoteka = data
    },
    SET_MODAL_FILTER(state, data) {
        state.modalFilter = data
    },
    SET_MODAL_TYPE(state, data) {
        state.modalType = data
    },
    SET_MODAL_TITLE(state, data) {
        state.modalTitle = data
    },
    SET_MODAL_SUB_TITLE(state, data) {
        state.modalSubTitle = data
    },
    SET_MODAL_OFFER(state, data) {
        state.modalOffer = data
    },
}
export const actions = {

    async openAutoteka({commit}, payload) {
        console.log(payload)
        await commit('SET_MODAL_AUTOTEKA', true)
        await commit('SET_MODAL_OFFER', payload)
    },
    async closeAutoteka({commit}, payload) {
        await commit('SET_MODAL_AUTOTEKA', false)
        await commit('SET_MODAL_OFFER', null)
    },

    async openModal({commit}, payload) {
        await commit('SET_MODAL_TYPE', payload.type)
        await commit('SET_MODAL_TITLE', payload.title)
        if (payload.subTitle) {
            await commit('SET_MODAL_SUB_TITLE', payload.subTitle)
        }
        if (payload.offer) {
            await commit('SET_MODAL_OFFER', payload.offer)
        }
        await commit('SET_MODAL', true)
    },
    async closeModal({commit}) {
        await commit('SET_MODAL', false)
        setTimeout(() => {
            commit('SET_MODAL_TYPE', '')
            commit('SET_MODAL_TITLE', '')
            commit('SET_MODAL_SUB_TITLE', '')
            commit('SET_MODAL_OFFER', null)
        }, 500)


    },
}
