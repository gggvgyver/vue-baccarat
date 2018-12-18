<template>
  <div class="team">
    <h1 class="subheading grey--text">팀</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            team: [
                {name: '일별이', role: '1직업', avatar: '/1.gif'},
                {name: '이별이', role: '2직업', avatar: '/2.gif'},
                {name: '삼별이', role: '3직업', avatar: '/3.gif'},
                {name: '사별이', role: '4직업', avatar: '/4.gif'},
                {name: '오별이', role: '5직업', avatar: '/5.gif'},
            ],
        }
    },
}
</script>

<style>
</style>
