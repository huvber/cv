<template>
  <header class="civi-header">
    <section class="civi-avatar-container">
      <avatar :src="avatarUrl" />
    </section>
    <section class="civi-name-skils">
      <h1>{{title}}</h1>
      <skill-list :skills="skills" />
    </section>
  </header>
</template>


<script>
//import SkillList from './SkillList';
import Avatar from './avatar';
import SkillList from './skill-list';

export default {
  name: 'civi-header',
  props: {
    title: {type: String, default: ''},
    avatarUrl: {type: String, default: ''},
    skills: {type: Array, default: function() {return []}}
  },
  components: {
    Avatar,
    SkillList
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

header.civi-header {

  @include wrapper;

  display: block;

  @media (min-width: $bp-tablet) {
    display: flex;
  }

  .civi-avatar-container {
    width: 200px;
    height: 200px;
  }

  .civi-name-skils {
    flex-grow: 1;
    h1 {
      @include font('title');
    }
  }
}
</style>