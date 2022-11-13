<template>
	<div @click="click" class="button button--info">
		Trade-in
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
				type: 'tradein',
				title: `Заявка на Trade-in`,
				offer: this.offer
			})
		},
	}
}
</script>