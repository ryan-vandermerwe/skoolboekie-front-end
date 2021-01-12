<template>
  <div>
    <h1>Test button</h1>
    <!-- <button @click="handleClick">{{ buttonName }}</button> -->
    <b-button v-b-modal.modal-1>Launch this modal</b-button>
    <b-modal id="modal-1" title="First modal test!!">
      <p class="my-4">{{ modalMessage }}</p>
    </b-modal>
  </div>
</template>

<script>
import { BModal } from "bootstrap-vue";

export default {
  name: "SimpleButton",
  components: {
    "test-modal": BModal,
  },
  data() {
    return {
      buttonName: "Click Me",
      modalMessage: "This is so cool!",
    };
  },

  methods: {
    handleClick() {
      console.log("Here");
      alert("I've been clicked");
    },
  },
};
</script>