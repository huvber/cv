<template>
  <section class="civi-experiences-list">
    <h3 class="section-title">Experiences</h3>
    <ul>
      <experience 
        :key="key"
        v-for="(experience, key) in experiences"
        :experience="experience" />
    </ul>
  </section>
</template>

<script>
import Experience from '../molecules/experience'

export default {
  name: 'experiences-list',
  props: {
    experiences: {type: Array, default: function(){return []}}
  },
  components: {
    Experience
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';
.civi-experiences-list {
  h3.section-title {
    @include wrapper;
    @include font('subtitle');
    color: $c-secondary;
    padding-bottom: 17px;
  }

}
</style>