<template>
  <article class="civi-project">
    <header>
      <h1>
        {{project.name}}
        <a v-if="project.website" :href="project.website" target="_blank">
          {{project.website}}
        </a>
      </h1>
    </header>
    <p>{{project.description}}</p>
    <ul class="technologies-list">
      <li :key="key" v-for="(tech, key) in project.technologies">
        {{tech}}
      </li>
    </ul>
  </article>
</template>


<script>

export default {
  name: 'project',
  props: {
    project: {
      type: Object,
      default: function() {
        return {
          name: '',
          website: null,
          description: '',
          technologies: []
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.civi-project {
  header {
    h1 {
      @include font('normal');
      color: $c-secondary;
      a {
        @include font('tag');
        color: $c-primary-light;
      }
    }
  }
  .technologies-list {
    display: flex;
    padding-bottom: 5px;
    li {
      margin-right: 5px;
      padding: 2px;
      border: 1px solid lighten($c-dark, 90%);
      background: lighten($c-dark, 90%);
      color: $c-primary;
    }
  }
}
</style>