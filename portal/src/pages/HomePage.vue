<template>
  <section class="page flex flex-col">
    <Hero style="flex-grow: 9">
      <section id="games-count-banner" class="banner banner-lg">
        <div class="container allow-overflow">

        </div>
      </section>
    </Hero>
  </section>
</template>

<script>
import Hero from "@/components/Hero";

export default {
  name: "HomePage",
  components: {Hero},
  data: function(){
    return{
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