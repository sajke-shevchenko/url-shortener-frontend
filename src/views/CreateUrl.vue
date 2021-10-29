<template>
  <div class="create container">
    <v-card>
      <hr><h3 class="m-4">Создать новую ссылку</h3><hr>
      <v-card-text>
        <v-row class="m-4">
          <v-col>
            <v-text-field
                v-model="formData.target"
                label="Целевая ссылка"
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field
                v-model="formData.short"
                label="Короткая ссылка"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row class="m-4">
          <v-col>
            <v-text-field
                v-model="formData.expirationDate"
                label="Срок жизни"
                type="datetime-local"
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-checkbox v-model="formData.commercial"
                        label="Коммерческая?"
            >
            </v-checkbox>
          </v-col>
        </v-row>
        <v-btn :loading="loading" @click="create">Создать</v-btn>
      </v-card-text>
    </v-card>
    <v-card v-if="statsUrl"
            class="m-4">
      <v-card-text>
        <v-text-field
            v-model="targetUrl"
            label="Целевая ссылка"
            readonly>
        </v-text-field>
        <v-text-field
            v-model="shortUrl"
            label="Короткая ссылка"
            readonly>
        </v-text-field>
        <a class="btn btn-outline-primary" :href="statsUrl">Статистика посещений</a>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'CreateUrl',
  data() {
    return {
      formData: {
        target: '',
        short: '',
        expirationDate: null,
        commercial: false,
      },
      targetUrl: null,
      statsUrl: null,
      shortUrl: null,
      loading: false,
    }
  },
  methods: {
    /** Create a new url **/
    async create () {
      try {
        this.loading = true;
        const requestBody = {
          target: this.formData.target,
          short: this.formData.short,
          expired_at: this.formData.expirationDate,
          commercial: this.formData.commercial,
        }

        const { data, stats_url } = await axios.post('http://localhost:8000/api/urls', requestBody)
            .then(response => response.data)

        this.shortUrl = data.short;
        this.statsUrl = stats_url;
        this.targetUrl = data.target;
        this.clearForm();
        this.$notify({type: 'success', text: 'Successfully created'})
      } catch (error) {
        this.$notify({type: 'error', text: error.response.data.message })
      } finally {
        this.loading = false;
      }
    },

    /** Clear the form **/
    clearForm(){
      this.formData.target = '';
      this.formData.short = '';
      this.formData.expirationDate = null;
      this.formData.commercial = false;
    }
  }
}
</script>
