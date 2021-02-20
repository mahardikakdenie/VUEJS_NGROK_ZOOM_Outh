<template>
  <div>
    <a :href="url">
      login
    </a>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  data: () => ({
    cient_id: "",
    client_secret: "",
    redirect_url: "",
    url: ""
  }),
  created() {
    this.client_id = process.env.VUE_APP_CLIENT_ID; // client id ambil di app zoom marketpplace 
    this.client_secret = process.env.VUE_APP_CLIENT_SECRET; // do ambil darri zoom
    this.redirect_url = process.env.VUE_APP_REDIRECT_URL;
    this.url =
      "https://zoom.us/oauth/authorize?response_type=code&client_id=" +
      this.client_id +
      "&redirect_uri=" +
      this.redirect_url;
  }
};
</script>

<style></style>
