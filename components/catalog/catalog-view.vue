<template>
	<div class="catalog__filters-view">
		<div class="button button--view"
		     @click="setView('short')"
		     :class="{'active':view === 'short'}">
			<svg-icon name="view-short" />
		</div>
		<div class="button button--view"
		     @click="setView('long')"
		     :class="{'active':view === 'long'}">
			<svg-icon name="view-long" />
		</div>
	</div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
	computed: {
		...mapGetters({
			view: 'view/view'
		})
	},
	methods: {
		...mapMutations({
			setView: 'view/SET_VIEW'
		})
	}
}
</script>