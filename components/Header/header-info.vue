<template>
	<div class="header__info">
	
	</div>
</template>

<script>
import {mapGetters} from "vuex";
import modals from "@/mixins/modals";

export default {
	mixins: [modals],
	computed: {
		...mapGetters({
			settings: 'settings/settings',
		})
	},
	methods: {
		async callback() {
			await this.openModal({
				type: 'callback',
				title: 'Заявка на обратный звонок',
				subTitle: 'Наш менеджер перезвонит вам',
			})
		}
	},
}
</script>