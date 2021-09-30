<template>
  <header class="app-header">
    <div class="container flex flex-row justify-between">
      <div class="page-identifier flex-grow-5">
        <h3><span class="title">The Scoreboard</span></h3>
      </div>
      <div class="buttons flex-grow-2 flex flex-row justify-end">
<!--        <button class="app-button dark">Sign In</button>-->
        <button class="app-button shade">Subscribe</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {}
}
</script>

<style scoped>
  .app-header {
    max-height: 60px;
    width: 100%;
    background: #292929;
  }

  .app-header .page-identifier {
    padding-top: 4px;
    padding-left: 9px;
    padding-right: 9px;
    color: #ddd;
    width: 200px;
  }

  .app-header .page-identifier .title {
    transition: .5s color;

  }
  .app-header .page-identifier .title:hover {
    cursor: pointer;
    color: #fff;
  }

  .app-header .buttons {
    margin: 9px 9px;
  }
  .app-header .buttons button:not(:last-child) {
    margin: 0 9px;
  }

</style>