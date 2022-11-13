<template>
	<div class="prizes">
		<h2 class="h2__title">Подарки при покупке в кредит</h2>
		<div class="prizes__line">
			<prizes-item v-for="prize in prizes"
			             :prize="prize"
			             :key="prize.slug" />
		</div>
	</div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			prizes: 'prizes/prizes'
		})
	}
}
</script>