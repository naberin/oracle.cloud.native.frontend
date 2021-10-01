<template>
  <main id="app" class="flex flex-col">
    <Header v-if="headerShouldBeDisplayed" class="flex-grow-1" :selected-sport="selectedSport"/>
    <router-view class="flex-grow-9"></router-view>
  </main>
</template>

<script>

import Header from "@/components/Header";
export default {
  name: 'App',
  components: {Header},
  data: function() {
    return {
      selectedSport: null
    }
  },
  computed: {
    headerShouldBeDisplayed: function () {
      let headerExcludeList = ["login"]
      return !(headerExcludeList.includes(this.$route.name));

    }
  }
}
</script>

<style>

html, body, main {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
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
.flex.justify-end {
  justify-content: flex-end;
}

.flex .flex-grow-9 {
  flex-grow: 9;
}

.flex .flex-grow-5 {
  flex-grow: 5;
}
.flex .flex-grow-2 {
  flex-grow: 2;
}
.flex .flex-grow-1, .flex > * {
  flex-grow: 1;
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
  width: 100%;
}

div.centered,
.container {
  margin: 0 auto;
}

.allow-overflow {
  box-sizing: content-box;
}

section.page {
  height: 100%;
}

.app-button {
  transition: .5s color;
  font-weight: bold;
  padding: 0 19px;
  white-space: nowrap;
}

.app-button.dark {
  background-color: #292929;
  color: #dddfdf;
  border: 1px solid #555;
}
.app-button.dark:hover {
  background-color: #555;
  cursor: pointer;
}

.app-button.shade {
  background-color: #292929;
  color: #ddd;
  border: 1px solid #652efd;
}
.app-button.shade:hover {
  background: linear-gradient(to bottom right, #652efd, #8156ff);
  color: #fff;
  cursor: pointer;
}

.right-aligned {
  text-align: right;
}

.top-pad-m {
  padding-top: 45px;
}

.shadowed {
  -moz-box-shadow: 0 0 10px #292929;
  -webkit-box-shadow: 0 0 10px #292929;
  box-shadow: 0 0 10px #1d1d1d;
}

</style>
