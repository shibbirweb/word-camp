export const filteredWords = (state) => {
    return state.words.filter((word) => {
        return (word.en.toLowerCase().includes(state.searchKeyword.toLowerCase()) || word.bn.toLowerCase().includes(state.searchKeyword.toLowerCase()))
    })
}
