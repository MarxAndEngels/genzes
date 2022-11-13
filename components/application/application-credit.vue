<template>
	<div class="application__line">
		<div class="application__line-block">
			<forms-credit/>
		</div>
		<div class="application__line-block">
			<!--<steps :steps="steps"/>-->
			<application-bank/>
			<texts-credit/>
			<advantages/>
		</div>
	</div>
</template>
<script>
	import TextsCredit from "@/components/texts/texts-credit";
	export default {
		components: {TextsCredit},
		data(){
			return{
				// steps:[
				// 		'Выберите автомобиль',
				// 		'Заполните заявку на кредит',
				// 		'С вами свяжется менеджер',
				// 		'Приезжайте на оформление',
				// ]
			}
		}
	}
</script>