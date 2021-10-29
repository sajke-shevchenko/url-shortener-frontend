<template>
  <div class="redirect">
    <v-img :src="image"></v-img>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  name: 'Redirect',
  data() {
    return {
      image: null,
      url: null,
      loading: false,
    }
  },
  mounted() {
    this.visit();
  },
  methods: {
    async visit() {
      try {
       this.loading = true;

       const { data } = await axios.post("http://localhost:8000/api/visits" + this.$route.path, {})
           .then(response => response.data);
        this.image = data.image_url;
        this.url = data.url;
        await new Promise(resolve => setTimeout(resolve, 5000));
      } catch (e) {
        let message = '';

        switch (e.response.status) {
          case 404:
            message = "Данная ссылка не действительна.";
            break;
          case 500:
            message = "Срок действия ссылки истёк.";
            break;
          default:
            message = "Неизвестная ошибка."
        }

        await router.push({ name: 'error', params: { message } })
      } finally {
        this.loading = false;
        window.location.href = this.url.target;
      }
    }
  },
}
</script>
