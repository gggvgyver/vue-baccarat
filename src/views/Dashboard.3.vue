/* eslint-disable */
<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">데시보드</h1>
    <v-container class="my-5">
      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
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
                    due: '기간',
                    status: 'ongoing',
                    content: '내용',
                },
                {
                    title: '타이틀2',
                    person: '사람2',
                    due: '기간',
                    status: 'complete',
                    content: '내용',
                },
                {
                    title: '타이틀3',
                    person: '사람3',
                    due: '기간',
                    status: 'ongoing',
                    content: '내용',
                },
                {
                    title: '타이틀4',
                    person: '사람4',
                    due: '기간',
                    status: 'overdue',
                    content: '내용',
                },
            ],
        }
    },
}
</script>

<style>
.project.complete {
    border-left: 4px solid #3cd1c2;
}
.project.ongoing {
    border-left: 4px solid #ddbd2e;
}
.project.overdue {
    border-left: 4px solid #98c715;
}
.v-chip.complete {
    background: #3cd1c2;
}
.v-chip.ongoing {
    background: #ddbd2e;
}
.v-chip.overdue {
    background: #98c715;
}
</style>
