<template>
  <div></div>
</template>

<script>
const axios = require("axios");
axios.defaults.headers.common.Authorization =
  "Basic " +
  btoa(process.env.VUE_APP_CLIENT_ID + ":" + process.env.VUE_APP_CLIENT_SECRET);
export default {
  name: "callback",
  data: () => ({}),

  created() {
    console.log(
      btoa(
        process.env.VUE_APP_CLIENT_ID + ":" + process.env.VUE_APP_CLIENT_SECRET
      )
    );
    const code = this.$route.query.code;
    const redirect_uri = process.env.VUE_APP_REDIRECT_URL;
    axios
      .post("/oauth/token", {
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirect_uri
      })
      .then(response => {
        console.log(response);
      });
  }
};
</script>

<style></style>
