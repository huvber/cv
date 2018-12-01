<template>
  <header>
    <section class="avatar">
      <Avatar :src="avatarUrl" />
    </section>
    <section>
      <h1>{{title}}</h1>
    </section>
  </header>
</template>


<script>
//import SkillList from './SkillList';
import Avatar from './Avatar';

export default {
  name: 'Header',
  props: ['title', 'avatarUrl'],
  components: {
    Avatar
  }
}
</script>

<style lang="scss">
.avatar {
  width: 200px;
  height: 200px;
}
</style>