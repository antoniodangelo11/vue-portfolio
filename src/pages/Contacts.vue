<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      name: "",
      email: "",
      message: "",
      newsletter: true,
      showSuccess: false,
      isSending: false,
      hasError: false,
    };
  },
  methods: {
    sendLead() {
      this.isSending = true;
      axios
        .post(this.store.baseUrl + "api/leads", {
          name: this.name,
          email: this.email,
          message: this.message,
          newsletter: this.newsletter,
        })
        .then((response) => {
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
      this.name = "";
      this.email = "";
      this.message = "";
      this.newsletter = true;
    },
  },
};
</script>

<template>
  <div v-if="hasError" class="m-4">
    Error in form submission!
    <button
      type="button"
      class="close"
      data-dismiss="alert"
      aria-label="Close"
      @click="hasError = false"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>

  <div
    v-if="showSuccess"
    class="bg-green-100 text-green-600 border border-green-600 py-2 px-4 rounded mb-4"
  >
    Message sent successfully!
    <button
      type="button"
      class="close"
      data-dismiss="alert"
      aria-label="Close"
      @click="showSuccess = false"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>

  <div class="grid grid-cols-2 grid-rows-1">
    <div class="bg-contacts flex items-center justify-center">
      <i class="fa-solid fa-envelopes-bulk text-[20rem] text-slate-600"></i>
    </div>
    <section class="m-5 p-4 dark:text-gray-50">
      <div class="p-5 text-gray-100">
        <form
          @submit.prevent="sendLead"
          novalidate
          class="container flex flex-col mx-auto space-y-12"
        >
          <fieldset
            class="bg-slate-600 grid grid-cols-4 gap-4 p-6 rounded-md shadow-sm dark:bg-gray-900"
          >
            <h1 class="text-3xl font-bold mx-5">Contact Us</h1>
          </fieldset>

          <fieldset
            class="bg-slate-600 py-10 grid grid-cols-4 gap-4 px-6 rounded-md shadow-sm dark:bg-gray-900"
          >
            <div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-6">
              <div class="col-span-full sm:col-span-6">
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-100"
                  >Name</label
                >
                <input
                  type="name"
                  class="form-input mt-1 block w-full rounded-md border-gray-300"
                  id="name"
                  v-model="name"
                />
              </div>
            </div>

            <div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-6">
              <div class="col-span-full sm:col-span-6">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-100"
                  >Email address</label
                >
                <input
                  type="email"
                  class="form-input mt-1 block w-full rounded-md border-gray-300"
                  id="email"
                  v-model="email"
                />
              </div>
            </div>

            <div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-6">
              <div class="col-span-full sm:col-span-6">
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-100"
                  >Message</label
                >
                <textarea
                  id="message"
                  class="form-textarea mt-1 block w-full rounded-md border-gray-300"
                  rows="5"
                  v-model="message"
                ></textarea>
              </div>
            </div>

            <div>
              <input
                type="checkbox"
                class="form-checkbox"
                id="newsletter"
                v-model="newsletter"
              />
              <label class="ml-2 text-sm text-gray-100" for="newsletter"
                >Subscribe to newsletter</label
              >
            </div>
          </fieldset>

          <div
            class="bg-slate-600 py-4 flex justify-center rounded-md shadow-sm dark:bg-gray-900"
          >
            <button
              type="submit"
              class="px-4 py-2 border rounded-md dark:border-gray-100"
              :class="{ 'opacity-50 pointer-events-none': isSending }"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
