<template>
  <section class="hero flex-grow-9">
    <div class="flex flex-col" style="height: 100%">
      <div class="banner">
        <div class="container" style="height: 100%">

        </div>
      </div>


      <div class="paper flex-grow-5">
        <div class="container">

        </div>
      </div>
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
    background-color: #dddfdf;
  }

  section.hero .container {
    padding: 0 9px;
  }
</style>