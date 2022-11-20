<template>
	<div class="catalog">
		<lists-main v-if="hasLists" />
		<catalog-filters v-if="hasFilters && !$device.isMobile"/>
		<lists-folders ref="folders"
		               v-if="$route.params.mark"
		               class="grid__block grid__block--margin-top" />
		<lists-generations ref="generations"
		                   v-if="$route.params.folder"
		                   class="grid__block grid__block--margin-top" />
		<catalog-items :sort="sort" :limit="limit" />

		<client-only>
			<paginate
					v-if="offersInfo.last_page > 1 && hasPagination"
					:page-count="offersInfo.last_page"
					:click-handler="paginateClick"
					:next-text="'Вперед'"
					:container-class="'pagination'">
			</paginate>
		</client-only>
	</div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import requests from "@/mixins/requests";

export default {
	mixins: [requests],
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
		watch:{
		'$route'(){
			this.scrollToElem()
		}
	},
	methods: {
		...mapMutations({
			setView: 'view/SET_VIEW'
		}),
		paginateClick(page) {
			this.$router.push({path: this.$route.fullPath, query: {page: page}});
		},
		scrollToElem() {
			let headerHeight = this.$device.isMobile ? 74 : 500
			 if (this.$route.name === 'category-mark') {
				setTimeout(() => {
				headerHeight = this.$device.isMobile ? 74 : 400
				window.scrollTo(0, this.$refs.folders.$el.offsetTop - headerHeight)
			}, 1)
			}
			else if (this.$route.name === 'category-mark-folder') {
					setTimeout(() => {
				window.scrollTo(0, this.$refs.generations.$el.offsetTop - headerHeight)
			}, 1)
			}
			else if (this.$route.name === 'category-mark-folder-generation' || this.$route.query.generation) {
				setTimeout(() => {
				window.scrollTo(0, this.$refs.generations.$el.offsetTop - headerHeight)
			}, 1)
			}
		}
	},
	mounted() {
		if (this.isIndex) {
			this.setView('short')
		}
			this.scrollToElem()
		if (this.$route.params.mark && (!this.$route.params.folder || !this.folders.length)) {
			this.getFolders(this.$route.params.mark, true)
		}
		if (this.$route.params.folder && (!this.$route.params.generation || !this.generations.length)) {
			this.getGenerations(this.$route.params.mark, this.$route.params.folder)
		}
	},
	computed: {
		...mapGetters({
			offersInfo: 'offers/offersInfo',
			folders: 'folders/folders',
			generations: 'generations/generations'
		})
	},
	
}
</script>
<style>
.pagination li:first-child {
display: none;
}
</style>