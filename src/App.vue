<template>
  <Header 
    :title="firstname +' '+ lastname"
    avatar-url="/assets/avatar.png" />
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  data: function() {
    return {
      firstname: '',
      lastname: ''
    }
  },
  mounted: function() {
    this.firstname = 'Andrea'
    this.lastname = 'Mannarà'
  },
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import './styles/reset.scss';

body {
  max-width: 1024px;
  border: 1px solid #333;
  margin: 0 auto;
}
</style>
