<template>
	<client-only v-if="isReady">
		<carousel class="slider__main" :dots="true" :autoplay='true' :nav="true" :items="1" loop>
			<template slot="prev"><span class="prev main slider_nav_arrow"></span></template>
			<template slot="next"><span class="next main slider_nav_arrow"></span></template>
			<div class="slider__main-slide" v-for="(slide, index) in slides" :key="index">
				<picture>
					<source class="slide__image" type="image/webp" media="(min-width: 768px)" :data-srcset="require(`~/assets/img/sliders/main/slider-index-${slide.image}.webp`)" :srcset="require(`~/assets/img/sliders/main/slider-index-${slide.image}.webp`)">
					 <source class="slide__image" media="(min-width: 768px)" :data-srcset="require(`~/assets/img/sliders/main/slider-index-${slide.image}.webp`)" :srcset="require(`~/assets/img/sliders/main/slider-index-${slide.image}.webp`)">
					  <source class="slide__image" type="image/webp" :data-srcset="require(`~/assets/img/sliders/main/slider-index-${slide.image}-mobile.webp`)" :srcset="require(`~/assets/img/sliders/main/slider-index-${slide.image}-mobile.webp`)">
					   <img class="slide__image" :data-src="require(`~/assets/img/sliders/main/slider-index-${slide.image}-mobile.webp`)" :src="require(`~/assets/img/sliders/main/slider-index-${slide.image}-mobile.webp`)">
					   </picture>
				<!-- <img class="slide__image" :src="require(`~/assets/img/sliders/main/slider-index-${slide.image}.webp`)" alt="image"> -->
			<nuxt-link :to="'/' + slide.button.link" >
				<div class="slide__content">
					<!-- <div class="slide__content-title">
						{{slide.title}}
					</div>
					<div class="slide__content-text" v-html="slide.text"></div>
					<nuxt-link :to="'/' + slide.button.link" class="button button--slider">
						{{slide.button.text}}
					</nuxt-link> -->
				</div>
				</nuxt-link>
			</div>
		</carousel>
	</client-only>
	<img v-else class="slide__image" :src="require(`~/assets/img/sliders/main/slider-index-1.webp`)" alt="image">

</template>

<script>
export default {
  data(){
    return{
      isReady:false,
      slides:[
	      {
		      title:'При покупке авто в кредит подарок на выбор',
		      text:'Зимняя резина, 300 литров бензина или КАСКО',
		      image:'1',
		      button:{
			      text:'Выбрать автомобиль',
			      link:'cars'
		      }
	      },
	      {
		      title:'Обменяйте свой автомобиль',
		      text:'С выгодой от 40 000 до 350 000 руб.',
		      image:'5',
		      button:{
			      text:'Выбрать автомобиль',
			      link:'cars'
		      }
	      },
	      {
		      title:'Выкупим ваш автомобиль',
		      text:'На выгодных условиях',
		      image:'3',
		      button:{
			      text:'Оставить заявку',
			      link:'cars'
		      }
	      },
	      {
		      title:'Выкупим ваш автомобиль',
		      text:'На выгодных условиях',
		      image:'4',
		      button:{
			      text:'Оставить заявку',
			      link:'cars'
		      }
	      },
	      {
		      title:'Выкупим ваш автомобиль',
		      text:'На выгодных условиях',
		      image:'2',
		      button:{
			      text:'Оставить заявку',
			      link:'cars'
		      }
	      },
      ]
    }
  },
  mounted() {
    this.isReady = true
  }
}
</script>