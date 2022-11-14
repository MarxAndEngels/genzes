export const state = () => ({
    popularMarks: null,
})
export const getters = {
    popularMarks: (state) => {
        return state.popularMarks
    },
}

export const mutations = {
    SET_POPULAR_MARKS(state, data) {
        let popularMarks = data.sort((a, b) => parseFloat(b.offers_count) - parseFloat(a.offers_count))
		popularMarks = popularMarks.filter((el,index)=>{return index <= 10})
		function SortArray(x, y){
    return x.title.localeCompare(y.title
);
}

popularMarks = popularMarks.sort(SortArray);
state.popularMarks = popularMarks
    },
}