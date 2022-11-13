<template>
	<div class="benefits">
		<benefits-item v-for="benefit in benefitsCredit"
		               :key="benefit.slug"
		               :benefit="benefit" />
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			benefitsCredit: 'benefits/benefitsCredit'
		})
	}
}
</script>