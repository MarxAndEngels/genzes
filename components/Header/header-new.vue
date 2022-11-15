<template>
    <div class="header">
      <div class="header_top">
        <div class="container">
          <div class="header_top_inner">
            <div class="top_title">Автомобили с пробегом {{settings.inaddress}}</div>
            <div class="top_info">
              <div class="top_info_address">
                {{settings.address}}
                <!-- {{$config.address}} -->
              </div>
              <div class="top_info_phone">
                  <a :href="'tel:' + settings.phone">
                   {{settings.phone}}
                    <!-- {{$config.phone}} -->
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header_middle">
        <div class="container">
          <div class="header_middle_inner">
            <div class="burger" @click="isOpen = !isOpen" :class="{isOpen:isOpen}">
              <div class="burger_line"></div>
              <div class="burger_line"></div>
            </div>
            <nuxt-link @click.native="isOpen = false" class="logo_link" :to="'/'">
              <img src="~/assets/img/logo-main.svg" class="main-logo_icon" alt="logo">
              <!-- <svg-icon class="main-logo_icon" name="logo" /> -->
            </nuxt-link>
            <div class="nav" :class="{isOpen:isOpen}">
              <nuxt-link @click.native="isOpen = false" :to="'/cars'" class="nav_link">Каталог</nuxt-link>
              <nuxt-link @click.native="isOpen = false" :to="'/credit'" class="nav_link">Автокредит</nuxt-link>
  <!--            <nuxt-link @click.native="isOpen = false" :to="'/installments'" class="nav_link">Рассрочка</nuxt-link>-->
              <nuxt-link @click.native="isOpen = false" :to="'/buyout'" class="nav_link">Выкуп</nuxt-link>
              <nuxt-link @click.native="isOpen = false" :to="'/exchange'" class="nav_link">Трейд-ин</nuxt-link>
              <nuxt-link @click.native="isOpen = false" :to="'/banks'" class="nav_link">Банки</nuxt-link>
                     <nuxt-link @click.native="isOpen = false" :to="'/contacts'" class="nav_link">Контакты</nuxt-link>
              <nuxt-link @click.native="isOpen = false" :to="'/reviews'" class="nav_link">Отзывы</nuxt-link>
              <nuxt-link @click.native="isOpen = false" :to="'/about'" class="nav_link">Об автосалоне</nuxt-link>
            </div>
            <div class="mobile_address">
              {{settings.address}}
            </div>
            <div class="wrapper__options_header">
                <a :href="'tel:' + settings.phone" class="options_header_icon">
                    <svg-icon name="favorites" style="stroke: #fff" />
            </a>
            <a :href="'tel:' + settings.phone" class="options_header_icon">
                <svg-icon name="phone" />
            </a>
            </div>
            <!-- <a href=""></a> -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import {mapGetters} from 'vuex'
  export default {
    computed: {
        ...mapGetters({
			settings: 'settings/settings',
		})
  },
    data(){
      return{
        isOpen:false
      }
    },
  }
  </script>
  
  <style scoped lang="scss">
   
  </style>