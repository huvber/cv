<template>
  <ul class="civi-contacts">
    <li :key="key" v-for="(item, key) in contacts">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'contacts',
  props: {
    contacts: {
      type: Object,
      default: function() {return {}}
    }
  }
}
</script>

<style lang="scss">
  @import '@/styles/variables.scss';
  .civi-contacts {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    li {
      display: inline-block;
      min-width: 180px;
      width: 25%;
      padding: 3px 0px;
      @media (min-width: $bp-tablet) {
        padding: 10px 0px;
      }
    }
  }
</style>