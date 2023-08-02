<script>
import axios from 'axios';
import { store } from '../store';

export default {
  data() {
    return {
      store,
      name: '',
      email: '',
      message: '',
      newsletter: true,
      showSuccess: false,
      isSending: false,
      hasError: false,
    }
  },
  methods: {
    sendLead() {
      this.isSending = true;
      axios.post(this.store.baseUrl + 'api/leads', {
        name: this.name,
        email: this.email,
        message: this.message,
        newsletter: this.newsletter,

      })
        .then(response => {
          this.isSending = false;

          if (response.data.success) {
            this.showSuccess = true;
            this.resetForm();
          } else {
            this.hasError = true;

          }
        });
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.message = '';
      this.newsletter = true;
    },

  },

};
</script>

<template>
  
  <div class="container">
    <h1 class="text-3xl font-bold mb-6">Contact Us</h1>

    <div v-if="hasError" class="bg-red-100 text-red-600 border border-red-600 py-2 px-4 rounded mb-4">
      Error in form submission!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="hasError = false">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div v-if="showSuccess" class="bg-green-100 text-green-600 border border-green-600 py-2 px-4 rounded mb-4">
      Message sent successfully!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="showSuccess = false">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <form @submit.prevent="sendLead" novalidate>
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input type="name" class="form-input mt-1 block w-full rounded-md border-gray-300" id="name" v-model="name">
      </div>

      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
        <input type="email" class="form-input mt-1 block w-full rounded-md border-gray-300" id="email" v-model="email">
      </div>

      <div class="mb-4">
        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
        <textarea id="message" class="form-textarea mt-1 block w-full rounded-md border-gray-300" rows="5" v-model="message"></textarea>
      </div>

      <div class="mb-4">
        <input type="checkbox" class="form-checkbox" id="newsletter" v-model="newsletter">
        <label class="ml-2 text-sm text-gray-700" for="newsletter">Subscribe to newsletter</label>
      </div>

      <button type="submit" class="btn btn-primary" :class="{'opacity-50 pointer-events-none': isSending}">
        Submit
      </button>
    </form>
  </div>


</template>

<style lang="scss" scoped></style>
