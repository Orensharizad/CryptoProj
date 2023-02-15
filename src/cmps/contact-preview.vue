<template>
  <article @click="onSetContact" class="contact-preview">
    <img
      :src="`https://api.dicebear.com/5.x/avataaars/svg?seed=${contact.name}`"
      alt="contact-img"
    />
    <!-- <img
      src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
      alt="contact-img"
    /> -->
    <p>{{ contact.name }}</p>
  </article>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onNavigate() {
      this.$router.push(`/contact/${this.contact._id}`);
    },
    onSetContact() {
      this.$emit("select", this.contact);
    },
  },
};
</script>

