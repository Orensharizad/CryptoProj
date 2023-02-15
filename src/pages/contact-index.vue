<template>
  <section class="contact-index">
    <ContactList
      v-if="contacts"
      @select="getCurrContact"
      @filter="onSetFilterBy"
      :contacts="contacts"
    />
    <ContactDetails
      @remove="removeContact"
      v-if="currContact"
      :currContact="currContact"
    />
  </section>
</template>

<script>
import ContactList from "@/cmps/contact-list.vue";
import ContactDetails from "@/cmps/contact-details.vue";
export default {
  data() {
    return {
      currContact: null,
      filterBy: {},
    };
  },
  async created() {
    await this.loadContacts();
    this.getCurrContact();
  },

  methods: {
    async loadContacts() {
      await this.$store.dispatch({
        type: "loadContacts",
        filterBy: this.filterBy,
      });
    },

    async removeContact(contactId) {
      await this.$store.dispatch({ type: "removeContact", contactId });
      this.currContact = this.contacts[0];
    },

    async getCurrContact(contact) {
      if (contact) {
        this.currContact = contact;
      } else {
        this.currContact = this.contacts[0];
      }
    },

    onSetFilterBy(filterBy) {
      this.filterBy = filterBy;
      this.loadContacts();
    },
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts;
    },
  },

  components: {
    ContactList,
    ContactDetails,
  },
};
</script>

