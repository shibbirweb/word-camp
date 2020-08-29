export const updateSearchText = (state, payload) => {
    state.searchKeyword = payload
}
export const mutationUpdateLastSync = (state) => {
    const date = new Date()
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timezone: 'UTC+6'
    }
    state.lastSyncedAt = date.toLocaleDateString('en-GB', options) + ' ' + date.toLocaleTimeString('en-US')
}
export const updateBackendSearchKeyword = (state, payload) => {
    state.backendSearchKeyword = payload
}
export const mutationWords = (state, payload) => {
    state.words = payload
}
export const mutationAddNewWord = (state, payload) => {
    const words = [...state.words]
    words.push({ ...payload })
    words.sort((a, b) => {
        const enA = a.en.toLowerCase()
        const enB = b.en.toLowerCase()
        return (enA < enB) ? -1 : 1
    })

    state.words = words
}
export const mutationUpdateWord = (state, payload) => {
    const words = [...state.words]
    const word = words.find(word => word.uid === payload.uid)
    const indexNumber = state.words.indexOf(word)
    words.splice(indexNumber, 1, payload)

    words.sort((a, b) => {
        const enA = a.en.toLowerCase()
        const enB = b.en.toLowerCase()
        return (enA < enB) ? -1 : 1
    })

    state.words = words
}
export const mutationDeleteWord = (state, payload) => {
    const word = state.words.find(word => word.uid === payload.uid)
    const indexNumber = state.words.indexOf(word)
    state.words.splice(indexNumber, 1)
}
