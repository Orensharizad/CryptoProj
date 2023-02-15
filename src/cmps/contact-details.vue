<template>
  <section class="contact-details">
    <div class="details-header">
      <img
        :src="`https://api.dicebear.com/5.x/avataaars/svg?seed=${currContact.name}`"
        alt="contact-img"
        class="contact-img"
      />
    </div>
    <div class="details-content">
      <h3 class="contact-name">{{ currContact.name }}</h3>
      <p>Email : {{ currContact.email }}</p>
      <p>Phone : {{ currContact.phone }}</p>
      <div class="flex align-center">
        <button class="btn" @click="onRemoveContact(currContact._id)">
          Remove
        </button>
        <RouterLink :to="`/contact/edit/${currContact._id}`">
          <button class="btn">Edit</button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    currContact: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onRemoveContact(contactId) {
      this.$emit("remove", contactId);
    },
  },
};
</script>

