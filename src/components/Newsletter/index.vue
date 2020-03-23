<template>
  <div class="container newsl_container">
    <h2>Join Our Daily Newsletter</h2>
    <div class="form">
      <input type="text" v-model="email" />
      <button @click="submitHandler">Subscribe</button>
    </div>
    <div class="error_label">
      <div>{{ error }}</div>
    </div>
    <div class="success_label">
      <div>{{ success }}</div>
    </div>
    <div class="small">
      <p>
        By signing up for this newsletter, you will be emailed daily with
        updates related to COVID-19. We will include tips on how to stay safe
        and maintain a life as sanitary and sane as possible. You may opt out of
        these email updates at any time. <br />Thank you for your interest.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      error: "",
      success: ""
    };
  },
  methods: {
    validate(email) {
      let valid = [true, ""];

      if (!/\S+@\S+\.\S+/.test(email)) {
        valid = [false, "Enter a valid email"];
      }
      if (email === "") {
        valid = [false, "Its empty"];
      }
      return valid;
    },
    submitHandler() {
      let valid = this.validate(this.email);
      if (valid[0]) {
        this.error = "";
        this.addEmail(this.email);
      } else {
        this.error = valid[1];
      }
    }
    // addEmail(email) {
    //   this.$http
    //     .get(`users.json?orderBy="email"&&equalTo="${email}"`)
    //     .then(response => {
    //       if (Object.getOwnPropertyNames(response.data).length === 0) {
    //         this.$http
    //           .post("users.json", { email: this.email })
    //           .then(response => {
    //             this.success = "Thank you";
    //           });
    //       } else {
    //         this.success = "Your email is already on the list";
    //       }
    //     });
    //   this.clearSuccess();
    // },
    // clearSuccess() {
    //   setTimeout(() => {
    //     this.email = "";
    //     this.success = "";
    //   }, 3000);
    // }
  }
};
</script>
