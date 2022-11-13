<template>
  <div class="container">
	  <h1 class="h1__title h1__title--hidden">{{pageTitle}}</h1>
    <div class="credit">
       <div class="credit_line">
         <div class="left">
           <forms-main-installments/>
         </div>
         <div class="right">
           <h3 class="h3_title">
             Как мы работаем?
           </h3>
           <steps-credit :steps="steps" class="steps"/>
            <div class="credit_info">
              <div class="text">
                В автосалоне {{ $config.mark_title }} вы сможете взять рассрочку на автомобиль без переплат и процентов. Главное требование для расстрочки - первоначальный взнос не меньше 20% от цены автомобиля.
                <br/>
                <br/>
                Рассрочка - это удобный способ приобрести автомобиль с пробегом и идеальное решение в случае, если возможно погашения за срок до 2 лет. Если же выплата всей суммы автомобиля за 2 года не возможна, лучшее решение -
                <Nuxt-link to="/credit">автокредит</Nuxt-link>
                {{$config.credit_percent}} со скидкой до 100 000 ₽.
              </div>
            </div>
         </div>
       </div>
     </div>
    <sliders-banks class="banks"/>
  </div>
</template>
<script>
import seoTags from "@/mixins/seoTags";

export default {
	mixins: [seoTags]
}
</script>
