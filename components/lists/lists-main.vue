<template>
	<div class="catalog__list">
		<lists-marks ref="marks" class="list__marks" />
		<lists-folders ref="folders"
		               v-if="$route.params.mark"
		               class="grid__block grid__block--margin-top" />
		<lists-generations ref="generations"
		                   v-if="$route.params.folder"
		                   class="grid__block grid__block--margin-top" />
	</div>
</template>

<script>
import {mapGetters} from "vuex";
import requests from "@/mixins/requests";

export default {
	mixins: [requests],
	computed: {
		...mapGetters({
			folders: 'folders/folders',
			generations: 'generations/generations'
		}),
	},
	watch:{
		'$route'(){
			this.scrollToElem()
		}
	},
	methods: {
		scrollToElem() {
			let headerHeight = this.$device.isMobile ? 64 : 130
			let currentRef = 'marks'
			 if (this.$route.name === 'cars-mark') {
				currentRef = 'folders'
			}
			else if (this.$route.name === 'cars-mark-folder') {
				currentRef = 'generations'
			}
			else if (this.$route.name === 'used-mark-folder-generation' || this.$route.query.generation) {
				currentRef = 'generations'
			}
			setTimeout(() => {
				window.scrollTo(0, this.$refs[currentRef].$el.offsetTop - headerHeight)
			}, 1)
		}
	},
	mounted() {
		this.scrollToElem()
		if (this.$route.params.mark && (!this.$route.params.folder || !this.folders.length)) {
			this.getFolders(this.$route.params.mark, true)
		}
		if (this.$route.params.folder && (!this.$route.params.generation || !this.generations.length)) {
			this.getGenerations(this.$route.params.mark, this.$route.params.folder)
		}
	}
}
</script>