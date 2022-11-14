export const state = () => ({
    modalMarks: false
})
export const getters = {
    modalMarks: (state) => {
        return state.modalMarks
    },
}
export const mutations = {
    setModalMarks(state, data) {
        state.modalMarks = data
    },
}