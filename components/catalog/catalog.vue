<template>
	<div class="catalog">
		<lists-main v-if="hasLists" />
		<catalog-filters v-if="hasFilters" />
		<catalog-items :sort="sort" :limit="limit" />
		<client-only>
			<paginate
					v-if="offersInfo.last_page > 1 && hasPagination"
					:page-count="offersInfo.last_page"
					:click-handler="paginateClick"
					:prev-text="'Назад'"
					:next-text="'Вперед'"
					:container-class="'pagination'">
			</paginate>
		</client-only>
	</div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
	props: {
		limit: Number,
		hasPagination: {
			type: Boolean,
			default: true
		},
		hasLists: {
			type: Boolean,
			default: true
		},
		hasFilters: {
			type: Boolean,
			default: true
		},
		sort: String,
		isIndex: Boolean
	},
	methods: {
		...mapMutations({
			setView: 'view/SET_VIEW'
		}),
		paginateClick(page) {
			this.$router.push({path: this.$route.fullPath, query: {page: page}});
		}
	},
	mounted() {
		if (this.isIndex) {
			this.setView('short')
		}
	},
	computed: {
		...mapGetters({
			offersInfo: 'offers/offersInfo'
		})
	},
	
}
</script>