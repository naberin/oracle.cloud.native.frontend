<template>
  <main id="app" class="flex flex-col">
    <Header style="flex-grow: 1"/>
    <router-view></router-view>
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
.flex > * {
  flex-basis: 0;
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
  background-color: #652efd;
  color: #fff;
  cursor: pointer;
}

</style>
