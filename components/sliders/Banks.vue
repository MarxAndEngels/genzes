<template>
  <div class="slider">
    <client-only>
      <carousel :dots="false" :nav="false" :responsive="{0:{items:2}, 768:{items:4}}" loop>
        <template slot="prev"><span class="prev slider_nav_arrow"></span></template>
        <template slot="next"><span class="next slider_nav_arrow"></span></template>
        <div class="slide" v-for="(slide, index) in slides" :key="index">
          <img class="bank_logo" :src="'img/banks/'+ slide +'-bank.svg'" alt="bank">
        </div>
      </carousel>
    </client-only>
  </div>
</template>

<script>
export default {
  data(){
    return{
      slides:[
       "tinkoff",
       "alfa",
       "sber",
       "avangard",
       "center-invest",
       "east",
       "expert",
       "expo",
       "gazprom",
       "hamkor",
       "home-credit",
       "kapital",
       "mkb",
       "open",
       "otb",
       "plus",
       "pochta",
       "promsvaz",
       "reiffeisen",
       "renessans",
       "ros",
      ]
    }
  }
}
</script>
