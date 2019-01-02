<template>
  <section class="civi-educations-list">
    <h3 class="section-title">Education</h3>
    <ul>
      <education 
        :key="key"
        v-for="(education, key) in educations"
        :education="education" />
    </ul>
  </section>
</template>

<script>
import Education from '../molecules/education'

export default {
  name: 'educations-list',
  props: {
    educations: {type: Array, default: function(){return []}}
  },
  components: {
    Education
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';
.civi-educations-list {
  h3.section-title {
    @include wrapper;
    @include font('subtitle');
    color: $c-primary;
    padding-bottom: 17px;
  }

}
</style>