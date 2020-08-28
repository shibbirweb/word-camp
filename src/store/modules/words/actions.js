import { firestore, Timestamp } from '@/config/firebase'

const wordCollection = firestore.collection('words')

export const fetchWords = async ({ commit }) => {
    const querySnapshot = await wordCollection.orderBy('en').get()

    const words = []
    querySnapshot.forEach((doc) => {
        words.push(doc.data())
    })

    commit('mutationWords', words)
    commit('mutationUpdateLastSync')
}

export const saveNewWord = async ({ commit, rootState }, payload) => {
    const data = { ...payload }
    const newWordRef = wordCollection.doc()
    data.uid = newWordRef.id
    data.createdAt = Timestamp.fromDate(new Date())
    data.updatedAt = Timestamp.fromDate(new Date())
    data.AddedBy = rootState.authentication.currentUser.uid
    await newWordRef.set(data)
    commit('mutationAddNewWord', data)
}

export const updateWord = async ({ state, commit, rootState }, payload) => {
    const word = state.words.find(word => word.uid === payload.uid)
    const data = { ...word }
    data.en = payload.en
    data.bn = payload.bn
    data.updatedAt = Timestamp.fromDate(new Date())
    data.lastModifiedBy = rootState.authentication.currentUser.uid
    await wordCollection.doc(data.uid).set(data, { merge: true })

    commit('mutationUpdateWord', data)
}

export const deleteWord = async ({ commit }, payload) => {
    const wordRef = wordCollection.doc(payload.uid)
    await wordRef.delete()
    commit('mutationDeleteWord', payload)
}
