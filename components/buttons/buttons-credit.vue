<template>
	<div @click="click"
	     class="button button--credit">
		Купить в кредит
	</div>
</template>
<script>
import modals from "@/mixins/modals";

export default {
	mixins: [modals],
	props: {
		offer: Object
	},
	methods: {
		async click() {
			await this.openModal({
				type: 'credit',
				title: `Заявка на автокредит`,
				offer: this.offer
			})
		},
	}
}
</script>