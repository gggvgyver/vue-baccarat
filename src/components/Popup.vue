<template>
  <v-dialog max-width="600px">
    <v-btn flat slot="activator" class="success">새프로젝트 추가</v-btn>
    <v-card>
      <v-card-title>
        <h2>새프로젝트 추가</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="Title" v-model="title"></v-text-field>
          <v-textarea></v-textarea>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            title: '',
        }
    },
}
</script>

<style>
</style>
