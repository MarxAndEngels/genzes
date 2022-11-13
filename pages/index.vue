<template>
	<div class="main__page">
		<h1 class="h1__title h1__title--hidden">{{ pageTitle }}</h1>
		<sliders-main/>
		<collections />
		<lists-marks />
		<h2 class="h2__title">Последние поступления</h2>
		<catalog
				is-index
				:has-filters="false"
				:has-lists="false"
				:has-pagination="false"
				:sort="'created_at|desc'"
				:limit="8" />
		<nuxt-link class="button button--more"
		           :to="`/${catalogRoute}`">
			Все автомобили
		</nuxt-link>
	</div>
</template>
<script>
import {mapGetters} from "vuex";
import seoTags from "@/mixins/seoTags";

export default {
	mixins: [seoTags],
	computed: {
		...mapGetters({
			catalogRoute: 'settings/catalogRoute'
		})
	}
}
</script>