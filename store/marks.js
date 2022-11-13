export const state = () => ({
    marks: []
})

export const getters = {
    marks(state) {
        return state.marks
    },
}

export const mutations = {
    SET_MARKS(state, data) {
        state.marks = data
    }
}
