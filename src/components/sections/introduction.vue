<template>
  <div class="civi-introduction">
    <avatar class="civi-avatar" :src="data.avatar" />
    <div class="civi-informations">
      <h1>
        {{data.firstname}} {{data.lastname}}
      </h1>
      <h2>
        {{data.mainRole}}
      </h2>
      <contacts :contacts="data.infos" />
    </div>
  </div>
</template>

<script>
import Avatar from '../organisms/avatar';
import Contacts from '../organisms/contacts';

export default {
  name: 'introduction',
  data: function() {
    return {
      contacts: {}
    }
  },
  props: {
    data: {
      type: Object,
      default: function() {
        return { avatar: ''}
      }
    }
  },
  components: {
    Avatar,
    Contacts
  }
}
</script>

<style lang="scss">
  @import '../../styles/variables.scss';

  .civi-introduction {
    border: 1px solid $c-primary;
    @include wrapper;
    padding: 18px;
    width: 100%;
    @media (min-width: $bp-tablet) {
      display: flex;
    }
  }
  .civi-avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 36px;
  }
  .civi-informations {
    h1 {
      @include font('title');
      color: $c-secondary-dark;
    }
    h2 {
      @include font('subtitle');
      color: #767677;
    }
  }
</style>