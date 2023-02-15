import { contactService } from "../services/contact.service.js"


export const contactStore = {
    state: {
        contacts: [],
    },
    getters: {
        contacts({ contacts }) {
            return contacts
        }
    },

    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact(state, { contactId }) {
            const idx = state.contacts.findIndex(p => p._id === contactId)
            state.lastRemovedContact = state.contacts[idx]
            state.contacts.splice(idx, 1)
        },
        addContact(state, { contact }) {
            state.contacts.push(contact)
        },
        updateContact(state, { contact }) {
            const idx = state.contacts.findIndex(p => p._id === contact._id)
            state.contacts.splice(idx, 1, contact)
        },

    },
    actions: {
        async loadContacts({ commit }, payload) {
            try {
                const contacts = await contactService.query(payload.filterBy)
                commit({ type: 'setContacts', contacts })
            } catch (err) {
                console.log('cannot load contacts', err)
            }

        },
        async removeContact({ commit }, payload) {
            console.log('payload: ', payload);
            commit(payload)
            try {
                await contactService.remove(payload.contactId)
                commit({ type: 'removeContact' })
            } catch (err) {
                console.log('cannot remove contact:', err)
                throw err
            }
        },
        async saveContact({ commit }, { contact }) {
            const actionType = (contact._id) ? 'updateContact' : 'addContact'
            try {
                const savedContact = await contactService.save(contact)
                commit({ type: actionType, contact: savedContact })
                return savedContact

            } catch (err) {
                console.log('cannot save contact:', err)
            }

        },
    }
}