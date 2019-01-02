<template>
  <div class="picture">
    <img :src="src" alt="" />
  </div>
</template>

<script>

export default {
  name: 'avatar',
  props: ['src']
}

</script>

<style lang="scss">
.picture {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>