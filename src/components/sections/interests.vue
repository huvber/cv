<template>
  <section class="civi-interests">
    <h3>Interests and Hobbies</h3>
    <ul class="list">
      <li :key="key" v-for="(interest, key) in interests">
        <h4>{{interest.area}}</h4>
        <p>{{interest.description}}</p>
      </li>
    </ul>
  </section>
</template>

<script>

export default {
  name: 'interests',
  props: {interests: {type: Array, default: function() {
    return []
  }}}
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.civi-interests {
  h3 {
    @include font('subtitle');
    color: $c-secondary;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  h4 {
    color: $c-primary;
    line-height: 2;
    .mother {
      color: $c-primary;
      font-weight: 700;
    }
  }
  .p {
    @include font('tag');
  }
}
</style>
