export const state = () => ({
    modalMenu: false
})
export const getters = {
    modalMenu: (state) => {
        return state.modalMenu
    },
}
export const mutations = {
    setModalMenu(state, data) {
        state.modalMenu = data
    },
}