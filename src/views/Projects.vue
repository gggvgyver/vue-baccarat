<template>
  <div class="projects">
    <h1 class="subheading grey--text">프로젝트</h1>

    <v-container class="my-5">
      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
          <div slot="header">{{project.title}}</div>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">오늘도 별이는 내 무릎에서 잔다.{{project.due}}</div>
              <div>{{project.content}}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </div>
</template>

<script>
import db from '@/fb'
export default {
    data() {
        return {
            projects: [],
        }
    },
    computed: {
        myProjects() {
            return this.projects.filter(project => {
                return project.person === '별이'
            })
        },
    },
    created() {
        db.collection('projects').onSnapshot(res => {
            const changes = res.docChanges()

            changes.forEach(change => {
                if (change.type === 'added') {
                    this.projects.push({
                        ...change.doc.data(),
                        id: change.doc.id,
                    })
                }
            })
        })
    },
}
</script>

<style>
</style>
