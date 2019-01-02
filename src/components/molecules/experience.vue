<template>
  <article class="civi-experience">
    <header>
      <h3>{{experience.period}}</h3>
      <h1 class="experience-title" v-if="experience.website">
        <a :href="experience.website" target="_blank">
         {{experience.company}}</a>
      </h1>
      <h1 class="experience-title" v-else>{{experience.company}}</h1>
      <h2 class="experience-role">{{experience.role}}</h2>
    </header>
    <main>
      <h3>Projects: </h3>
      <ul>
        <li :key="key" v-for="(project, key) in experience.projects">
          <project :project="project" />
        </li>
      </ul>
    </main>
  </article>
</template>

<script>
import Project from './project';

export default {
  name: 'experience',
  props: {
    experience: {
      type: Object,
      default: function() {
        return {
          period: '',
          company: '',
          role: '',
          website: null,
          projects: []
        }
      }
    }
  },
  components: {
    Project
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.civi-experience {
  width: 100%;
  header {
    h3 {
      @include wrapper('side');
      @include font('tag');
    }
    h1.experience-title {
      @include font('subtitle');
      @include wrapper('side');
      color: $c-primary-light;
      width: 70%;
      border-bottom: 1px solid $c-primary;
      a {
        color: $c-primary-light;
        text-decoration: none;
      }
    }
    h2.experience-role {
      @include wrapper('side');
    }
  }
  main {
    @include wrapper;
    ul {
      padding-top: 10px;
      padding-left: 20px;
    }
    h3 {
      color: $c-secondary-dark;
    }
  }
}
</style>
