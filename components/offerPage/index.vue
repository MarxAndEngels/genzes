<template>
	<div class="offer__content" v-if="offer">
		<advantages />
		<offer-page-title :offer="offer"/>
		<offer-page-slider :images="offer.images" />
		<div class="offer__page-content">
			<!--<offer-page-tech :offer="offer"/>-->
			<tech-info offer-page long :offer="offer"/>
			<offer-page-controls :offer="offer"/>
			<offer-page-complectation :offer="offer"/>
			<offer-page-map/>
		</div>
	</div>
	<skeleton-offer-page v-else/>
</template>

<script>

export default {
	data() {
		return {
			loading: true
		}
	},
	methods:{
		sendYandexCommercial() {
			if (process.client) {
				dataLayer.push({
					"ecommerce": {
						"detail": {
							"products": [
								{
									"id": this.offer.external_id,
									"name": `${this.offer.mark.title} ${this.offer.folder.title}, ${this.offer.year} года, ${this.offer.gearbox.title} ${this.offer.price} руб. - ${this.offer.external_id}`,
									"price": this.offer.price,
									"brand": this.offer.mark.title,
									"category": `'С пробегом/${this.offer.mark.title}/${this.offer.folder.title}/${this.offer.name}`,
									"quantity": 1
								}
							]
						}
					}
				})
			}
		},
	},
	props: {
		offer: Object,
	},
	// destroyed() {
	// 	this.loading = true
	// },
	mounted() {
		setTimeout(()=>{
			this.loading = false
			this.sendYandexCommercial()
		},200)
		// if (this.offer) {
		// 	_tmr.push({
		// 		type: 'itemView',
		// 		productid: this.offer.external_id,
		// 		pagetype: 'product',
		// 		list: '1',
		// 		totalvalue: this.offer.price
		// 	})
		// }
	},
}
</script>
