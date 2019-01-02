<template>
  <div class="civi-progress">
    {{text}}
    <div 
      class="civi-progress-value"
      v-bind:class="[color]"
      v-bind:style="{
        width: `${value * 100}%`
      }">
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    text: String,
    color: {type: String, default: 'default'}
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.civi-progress, .civi-progress-value {
  background-color: lighten($c-dark, 90%);
  width: 100%;
  display: inline-block;
  position: relative;
  padding: 6px 10px;
  overflow: hidden;
  @include font('normal');
  font-weight: 700;
}
.civi-progress-value {
  position: absolute;
  top: -1px;
  left: -1px;
  width: 0%;
  max-width: 100%;
  &.default {
    border: 1px solid $c-primary;
    background-color: $c-primary;
    color: $c-light;
  }
  &.secondary {
    border: 1px solid $c-primary-light;
    background-color: $c-primary-light;
    color: lighten($c-dark, 30%);
  }
  &.tertiary {
    border: 1px solid $c-primary-light;
    background-color: $c-primary-light;
    color: lighten($c-dark, 30%);
  }
  transition: width .3s ease-in;
}
</style>