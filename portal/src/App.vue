<template>
  <main id="app">
    <Header/>
  </main>
</template>

<script>

import Header from "@/components/Header";
export default {
  name: 'App',
  components: {Header}
}
</script>

<style>

html, body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

div {
  box-sizing: border-box;
}

.flex {
  display: flex;
}
.flex.flex-row {
  flex-direction: row;
}
.flex.flex-col {
  flex-direction: column;
}
.flex.justify-center {
  justify-content: center;
}
.flex.justify-between {
  justify-content: space-between;
}

@media only screen and (max-width: 499px) {
  .container {
    max-width: 99%;
  }
}

@media only screen and (min-width: 500px) {
  .container {
    max-width: 94%;
  }
}

@media only screen and (min-width: 700px) {
  .container {
    max-width: 82%;
  }
}

@media only screen and (min-width: 1100px) {
  .container {
    max-width: 79%;
  }
}

@media only screen and (min-width: 1500px) {
  .container {
    max-width: 77%;
  }
}

@media only screen and (min-width: 1900px) {
  .container {
    max-width: 75%;
  }
}

.container {
  margin: 0 auto;
}

</style>
