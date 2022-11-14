export const state = () => ({
    marks: [],
    popularMarks: [
        'audi', 'bmw', 'ford', 'hyundai', 'kia', 'mazda', 'mercedes-benz', 'mitsubishi', 'nissan', 'skoda'
    ],
})

export const getters = {
    marks(state) {
        return state.marks
    },
    popularMarks: (state) => {
        return state.popularMarks
    },
}

export const mutations = {
    SET_MARKS(state, data) {
        state.marks = data
    }
}
