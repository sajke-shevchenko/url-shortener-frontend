<template>
  <div class="details container">
    <v-card>
      <hr><h3 class="m-4">Статистика посещений</h3><hr>
      <v-card-text>
        <v-row class="m-4">
          <v-col>
            <v-text-field
                v-model="url.target"
                label="Целевая ссылка"
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field
                v-model="url.short"
                label="Короткая ссылка"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row class="m-4">
          <v-col>
            <v-text-field
                :value="new Date(url.expired_at) | dateFormat('MM/DD/YYYY HH:mm A')"
                label="Срок жизни"
                readonly
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
                :value="url.unique_count"
                label="Уникальных посещений"
                readonly
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-data-table
       :headers="[
           {text: 'IP Адрес', value: 'ip_address', sortable: true},
           {text: 'Ссылка на изображение', value: 'image_url', sortable: false},
           {text: 'Посещен', value: 'created_at', sortable: true},
       ]"
      :items="url.history"
      items-per-page="5"
    >
    </v-data-table>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'UrlDetails',
  data() {
    return {
      url: {},
      loading: false,
    }
  },
  async mounted() {
    const { data } = await axios.get('http://localhost:8000/api/urls/' + this.$route.params.id)
        .then(response => response.data)

    this.url = data;
  },
  methods: {
  }
}
</script>
