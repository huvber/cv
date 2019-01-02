<template>
  <section class="civi-languages">
    <h3>Languages</h3>
    <h4>Mother toungue: <span class="mother">{{languages.mother}}</span></h4>
    <ul class="list">
      <li :key="key" v-for="(language, key) in languages.others">
        <h4>{{language.lang}}</h4>
        <div class="levels">
          <progress-bar 
            :key="lkey" 
            v-for="(level, lkey) in language.levels"
            :value="level.value"
            color="tertiary"
            :text="level.label" />
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import ProgressBar from '../atoms/progress-bar'

export default {
  name: 'languages',
  props: {languages: {type: Object, default: function() {
    return {};
  }}},
  components: {
    ProgressBar
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.civi-languages {
  h3 {
    @include font('subtitle');
    color: $c-secondary;
    padding-bottom: 17px;
  }
  h4 {
    padding-bottom: 5px;
    .mother {
      color: $c-primary;
      font-weight: 700;
    }
  }
  .levels {
    margin-left: 5px;
  }
}
</style>
