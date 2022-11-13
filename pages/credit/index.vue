<template>
	<div>
		<h1 class="h1__title">{{pageTitle}}</h1>
		<application-credit />
	</div>
</template>
<script>
import seoTags from "@/mixins/seoTags";
import {mapMutations} from "vuex";

export default {
	mixins: [seoTags],
	methods: {
		...mapMutations({
			setBank: 'banks/SET_BANK'
		})
	},
	mounted() {
		this.setBank(null)
	}
}
</script>
