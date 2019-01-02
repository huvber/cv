<template>
  <section class="civi-skills-list">
    <h3>Skills</h3>
    <ul class="list">
      <li :key="key" v-for="(skill, key) in skills">
        <skill :skill="skill" :open="key === 0 && firstOpen"/>
      </li>
    </ul>
  </section>
</template>

<script>
import Skill from '../molecules/skill'

export default {
  name: 'skills-list',
  data: function() {
    return {firstOpen: true}
  },
  props: {
    skills: {type: Array, default: function(){return []}}
  },
  components: {
    Skill
  },
  mounted: function(){
    setTimeout(()=> {
      this.firstOpen = false;
    }, 500)
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';
.civi-skills-list {
  /*width: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: 15px;
  & > * {
    flex-basis: 80px;
    margin-left: 10px;
  }*/
  h3 {
    @include font('subtitle');
    color: $c-secondary;
    padding-bottom: 17px;
  }

}
</style>