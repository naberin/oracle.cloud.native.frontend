<template>
  <section class="hero">
    <div class="flex flex-col" style="height: 100%">
        <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: {

  }
}
</script>

<style scoped>
  section.hero {
    width: 100%;
    height: 100%;
    background-color: #dddfdf;
  }

  section.hero .container {
    padding: 0 9px;
  }
</style>