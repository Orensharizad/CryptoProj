import { createStore } from 'vuex'
import { contactStore } from './contact.store.js'

export const myStore = createStore({
    strict: true,
    modules: {
        contactStore
    }
})


