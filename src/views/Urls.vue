<template>
  <div class="urls">
    <h1>Ссылки</h1>
    <h1 v-if="urls.length < 1">Пока ссылок нет...</h1>
    <v-container>
      <v-row v-for="url in urls"
             :key="url.id">
        <v-card class="m-4">
          <v-text-field
              :value="url.target"
              label="Целевая ссылка"
              readonly
          ></v-text-field>
          <v-text-field
              :value="url.short"
              label="Короткая ссылка"
              readonly
          ></v-text-field>
          <v-text-field
              :value="new Date(url.expired_at) | dateFormat('MM/DD/YYYY HH:mm A')"
              label="Срок жизни"
              readonly
          ></v-text-field>
          <v-text-field
              :value="url.unique_count"
              label="Уникальных посещений"
              readonly
          ></v-text-field>
          <v-card-actions>
            <a class="btn btn-outline-primary" :href="`urls/` + url.id">Статистика посещений</a>
          </v-card-actions>
        </v-card>
      </v-row>
      <v-pagination
          v-if="urls.length > 0"
          v-model="pagination.page"
          :length="pagination.total_pages"
          total-visible="5"
      ></v-pagination>
    </v-container>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'Urls',
  data() {
    return {
      page: 1,
    }
  },
  created() {
    this.loadUrls();
  },
  computed: {
    ...mapState(['urls', 'pagination']),
  },
  methods: {
    ...mapActions([
      'loadUrls',
    ]),
  },
  watch: {
    pagination: {
      deep: true,
      handler() {
        this.page = this.pagination.page;
      }
    },
    page() {
      this.loadUrls();
    }
  }
}
</script>
