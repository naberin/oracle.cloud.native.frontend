<template>
  <div class="scorecards justify-center">
      <div class="flex flex-row justify-center wrapper">
        <slot name="left-slots"></slot>
        <div class="card" v-for="(scorecard, index) in scorecards" :key="index">
          <div class="flex flex-col" >
            <span class="card-score">{{scorecard.gameScore}}</span>
            <span class="card-title">{{scorecard.name}}</span>
          </div>
        </div>
        <slot name="right-slots"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: "Scorecard",
  props: {
    defender: Object,
    challenger: Object
  },
  data: function () {
    return {
      scorecards: [this.defender, this.challenger]
    }
  }
}
</script>

<style scoped>
.scorecards {
  margin-left: 14px;
  margin-right: 14px;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 9px;
  min-height: 80px;
  margin-top: 54px;
}

.scorecards .wrapper {
  padding: 19px;
}

.card {
  padding: 64px 32px;
  margin: 0 9px;
  border-radius: 9px 0 9px 0;
  -moz-box-shadow: 0 0 10px #292929;
  -webkit-box-shadow: 0 0 10px #292929;
  box-shadow: 0 0 10px #292929;
  min-width: 180px;
  background: linear-gradient(to bottom right, #652efd, #8156ff);
}

.card:hover {
  cursor: pointer;
}

.card-score {
  font-family: Tahoma, sans-serif;
  font-weight: bolder;
  font-size: 5.1em;
}
.card-score,
.card-title {
  color: #fff;
  text-align: center;
}

.card-title {
  font-family: Tahoma, sans-serif;
  font-size: 1.8em;
}

</style>