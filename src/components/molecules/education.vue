<template>
  <article class="civi-education">
    <header>
      <h3>{{education.period}}</h3>
      <h1 class="education-title">
        {{education.name}} 
        <template v-if="education.grade"> 
          - 
          <span class="grade">{{education.grade}}</span>
        </template>
      </h1>
      <h2 class="education-role">{{education.place}}</h2>
    </header>
    <main>
      <p>{{education.description}}</p>
    </main>
  </article>
</template>

<script>

export default {
  name: 'education',
  props: {
    education: {
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
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.civi-education {
  width: 100%;
  header {
    h3 {
      @include wrapper('side');
      @include font('tag');
    }
    h1.education-title {
      @include font('subtitle');
      @include wrapper('side');
      color: $c-secondary;
      width: 70%;
      border-bottom: 1px solid $c-primary;
      a {
        text-decoration: none;
      }
      span.grade {
        color: $c-dark;
      }
    }
    h2.education-role {
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
      color: $c-primary-dark;
    }
  }
}
</style>
