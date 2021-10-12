<template>
  <div class="alert">
    <div :class="[kind]">
      {{alertMessage}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    kind: String,
    alertMessage: String
  }
}
</script>

<style scoped>

</style>