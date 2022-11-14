export const state = () => ({
    backButton: {}
})
export const getters = {
    backButton: (state) => {
        return state.backButton
    },
}

export const mutations = {
    SET_BACK_BUTTON(state, data) {

        console.log(data)
        state.backButton = data

    },
}