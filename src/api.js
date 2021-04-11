import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000',
})

export const insertJournal = payload => api.post('/journal', payload)
export const getAllJournals = () => api.get('/journals')
export const updateJournalById = (id, payload) => api.put(`/journal/${id}`, payload)
export const deleteJournalById = id => api.delete(`/journal/${id}`)

const apis = {
    insertJournal,
    getAllJournals,
    updateJournalById,
    deleteJournalById,
}

export default apis