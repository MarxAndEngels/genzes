<template>
	<div class="offer__page-controls">
		<div class="offer__page-controls-top">
			<offer-price page :offer="offer"/>
			<offer-controls page :offer="offer"/>
		</div>
		<offer-buttons v-if="offer.is_active" page :offer="offer" />
		
		<div class="offer__page-buttons-dealer" v-if="!offer.is_active">
			Нет в наличии
		</div>
	</div>
</template>

<script>
import filters from "@/mixins/filters";
import modals from "@/mixins/modals";

export default {
	mixins: [filters,modals],
	props: {
		offer: Object
	},
	methods:{
		async credit(){
			await this.openModal({
				type: 'credit',
				title: `Заявка на автокредит`,
				offer: this.offer
			})
		},
		async exchange(){
			await this.openModal({
				type: 'tradein',
				title:'Заявка на Trade-in',
				subTitle:'Обменяйте свой автомобиль на выгодных условиях',
				offer: this.offer
			})
		},
		async testDrive(){
			await this.openModal({
				type: 'testdrive',
				title:'Заявка на тест-драйв',
				subTitle:'Наш менеджер перезвонит вам',
			})
		},
		async callback(){
			await this.openModal({
				type: 'callback',
				title:'Заявка на обратный звонок',
				subTitle:'Наш менеджер перезвонит вам',
			})
		},
		
	},
}
</script>