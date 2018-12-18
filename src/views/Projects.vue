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
export default {
    data() {
        return {
            projects: [
                {
                    title: '타이틀1',
                    person: '사람1',
                    due: '기간1',
                    status: 'ongoing',
                    content: '컨텐트1',
                },
                {
                    title: '타이틀2',
                    person: '사람2',
                    due: '기간2',
                    status: 'complete',
                    content: '내용',
                },
                {
                    title: '또같은a이틀4',
                    person: '별이아빠',
                    due: '기간4',
                    status: 'overdue',
                    content: 'Eh내용',
                },
                {
                    title: '타이틀3',
                    person: 'a사람3',
                    due: '기간3',
                    status: 'ongoing',
                    content: '내용',
                },
                {
                    title: 'a이틀4',
                    person: '별이아빠',
                    due: '기간4',
                    status: 'overdue',
                    content: '내용',
                },
            ],
        }
    },
    computed: {
        myProjects() {
            return this.projects.filter(project => {
                return project.person === '별이아빠'
            })
        },
    },
}
</script>

<style>
</style>
