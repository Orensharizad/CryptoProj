<template>
  <section class="main-contact-list">
    <div class="list-header">
      <input
        @input="onFilter"
        placeholder="Search ..."
        v-model="filterBy.name"
        type="text"
      />
      <RouterLink to="/contact/edit"
        ><button class="btn">Add a Contact</button></RouterLink
      >
    </div>
    <div class="contact-list" v-for="contact in contacts" :key="contact._id">
      <ContactPreview @select="$emit('select', $event)" :contact="contact" />
    </div>
  </section>
</template>

<script>
import ContactPreview from "@/cmps/contact-preview.vue";
export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      filterBy: { name: "" },
    };
  },
  methods: {
    onFilter() {
      this.$emit("filter", this.filterBy);
    },
  },

  components: {
    ContactPreview,
  },
};
</script>

