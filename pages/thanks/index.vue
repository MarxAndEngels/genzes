<template>
	<div class="thanks">
		<h1 class="h1__title h1__title--hidden">{{ pageTitle }}</h1>
		<div class="inner">
			<div class="title_line">
				<svg-icon name="check" />
				<h2 class="h2_title">Заявка успешно отправлена.</h2>
			</div>
			
			<div class="text">Спасибо! В ближайшее время наши специалисты свяжутся с вами.</div>
			<nuxt-link to="/"
			           class="back--link">На главную
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import seoTags from "@/mixins/seoTags";
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
	mixins: [seoTags],
	computed: {
		...mapGetters({
			settings: 'settings/settings',
			orderOffer: 'order/orderOffer',
			orderId: 'order/orderId'
		})
	},
	methods: {
		...mapMutations({
			setOrderId:'order/SET_ORDER_ID',
			setOrderOffer:'order/SET_ORDER_OFFER',
		}),
		clear(){
			this.setOrderId(null)
			this.setOrderOffer(null)
		},
		sendYandexCommercial() {
			if (process.client) {
				dataLayer.push({
					"ecommerce": {
						"purchase": {
							"actionField": {
								"id": this.orderId,
								"goal_id": this.settings.goal_id,
							},
							"products": [
								{
									"id": this.orderOffer.external_id,
									"name": `${this.orderOffer.mark.title} ${this.orderOffer.folder.title}, ${this.orderOffer.year} года, ${this.orderOffer.gearbox.title} ${this.orderOffer.price} руб. - ${this.orderOffer.external_id}`,
									"price": this.orderOffer.price,
									"brand": this.orderOffer.mark.title,
									"category": `'С пробегом/${this.orderOffer.mark.title}/${this.orderOffer.folder.title}/${this.orderOffer.name}`,
									"quantity": 1
								}
							]
						}
					}
				})
			}
		}
	},
	async mounted() {
		if (!this.orderId) {
			await this.$router.push('/')
		}
		if (this.orderOffer) {
			await this.sendYandexCommercial()
		}
	},
	destroyed() {
		this.clear();
	},
}
</script>
