<template>
  <main class="civi-main">
    <introduction :data="resumeData.introduction" />
    <section class="civi-area">
      <div class="civi-left-column">
        <skills-list :skills="resumeData.skills" />
        <languages :languages="resumeData.languages" />
        <interests :interests="resumeData.interests" />
      </div>
      <div class="civi-right-column">
        <experiences-list :experiences="resumeData.experiences" />
        <educations-list :educations="resumeData.educations" />
      </div>
    </section>
  </main>
</template>

<script>
/**
 * TODO: Replace with api
 */
import _data from './lib/mocked-data.js'

import Introduction from './components/sections/introduction.vue'
import SkillsList from './components/sections/skill-list.vue'
import ExperiencesList from './components/sections/experiences-list'
import EducationsList from './components/sections/educations-list'
import Languages from './components/sections/languages'
import Interests from './components/sections/interests'

export default {
  name: 'app',
  data: function() {
    return {
      resumeData: {}
    }
  },
  mounted: function() {
    this.resumeData = _data
  },
  components: {
    Introduction,
    SkillsList,
    ExperiencesList,
    EducationsList,
    Languages,
    Interests
  }
}
</script>

<style lang="scss">

@import '@/styles/variables.scss';

body {
  width:100%;
  max-width: 1024px;
  margin: 0 auto;
  @include font('normal');
  color: $c-dark;
  &:before {
    content: '';
    display: block;
    width: 50%;
    height: 48px;
    border-right: 1px solid $c-primary;
  }
  main.civi-main {
    width: 100%;
    .civi-area {
      @media (min-width: $bp-tablet) {
        display: flex;
      }
      .civi-left-column {
        width: 32%;
        @include wrapper;
        border-right: 1px solid $c-primary;
      }
      .civi-right-column {
        width: 76%;
      }
    }

  }
}

</style>
