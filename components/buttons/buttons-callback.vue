<template>
	<div @click="click" class="button button--info button--callback">
		Обратный звонок
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
				type: 'callback',
				title: `Обратный звонок`,
				offer: this.offer
			})
		},
	}
}
</script>