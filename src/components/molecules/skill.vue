<template>
  <article class="civi-skill" v-on:click="onclick">
    <main>
      <progress-bar :text="skill.name" :value="skill.experience" :color="skill.color || color || 'default'" />
    </main>
    <div v-if="skill.subskills && skill.subskills.length > 0"
      class="civi-skill-sub-list"
      v-bind:class="{open: open}">
      <skill
        color="secondary"
        :key="key"
        v-for="(subskill, key) in skill.subskills"
        :skill="subskill"
      />
    </div>
  </article>
</template>

<script>
import ProgressBar from '../atoms/progress-bar';

export default {
  name: 'skill',
  props: {
    skill: {
      type: Object,
      default: function() {
        return {
          name: '',
          experience: 0,
          color: 'default',
          subskills: []
        }
      }
    },
    color: {type: String, default: ''},
    open: {type: Boolean, default: false}
  },
  components: {
    ProgressBar
  },
  methods: {
    onclick: function() {
      if(this.$props.skill.subskills.length > 0) {
        this.open = !this.open;
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.civi-skill {
  width: 100%;
  position: relative;
  padding: 5px 0;
  &-sub-list {
    position: relative;
    top:0;
    height: auto;
    max-height:1px;
    z-index: 1;
    overflow: hidden;
    transition: max-height .5s ease;
    padding-left:10px;
    &.open {
      max-height: 500px;
    }
    .civi-skill-sub-list {
      padding-left: 20px;
    }
  }
}
</style>