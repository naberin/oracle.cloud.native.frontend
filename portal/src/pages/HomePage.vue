<template>
  <section class="page flex flex-col">
    <Hero style="flex-grow: 9">
      <section id="games-count-banner" class="banner banner-lg">
        <div class="container allow-overflow">

          <Scorecard :defender="defender" :challenger="challenger">

          </Scorecard>
        </div>
      </section>
    </Hero>
  </section>
</template>

<script>
import Hero from "@/components/Hero";
import Scorecard from "@/components/Scorecard";

export default {
  name: "HomePage",
  components: {Scorecard, Hero},
  data: function(){
    return{
      defender: {"name": "USA", gameScore: "24", streakScore: "02"},
      challenger: {"name": "Japan", gameScore: "28", streakScore: "03"},
    }
  }
}
</script>

<style>
  .banner.banner-lg {
    display: block;
    background: linear-gradient(to bottom right, #efcd19, #d5b30e);
    min-height: 270px;
    width: 100%;
  }

</style>