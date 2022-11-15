<template>
	<div @click="click" class="button button--info button--callback">
		Оставить заявку
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
				title: `Остались вопросы? Мы Вам перезвоним!`,
				offer: this.offer
			})
		},
	}
}
</script>