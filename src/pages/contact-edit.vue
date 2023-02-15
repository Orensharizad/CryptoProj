<template>
  <form @submit.prevent="save" v-if="contact" class="contact-edit">
    <input placeholder="name ..." type="text" v-model="contact.name" />
    <input placeholder="Email ..." type="text" v-model="contact.email" />
    <input placeholder="Phone ..." type="text" v-model="contact.phone" />
    <button>Save</button>
  </form>
</template>

<script>
import { contactService } from "@/services/contact.service.js";
export default {
  data() {
    return {
      contact: null,
    };
  },
  async created() {
    const contactId = this.$route.params._id;
    if (contactId) {
      this.contact = await contactService.getById(contactId);
    } else {
      this.contact = contactService.getEmptyContact();
    }
  },
  methods: {
    async save() {
      await this.$store.dispatch({
        type: "saveContact",
        contact: this.contact,
      });
      this.$router.push("/contact");
    },
  },
};
</script>

