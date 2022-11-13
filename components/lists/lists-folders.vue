<template>
	<div class="folders"
	     ref="folders">
		<h2 class="h2__title">
			Модели:
		</h2>
		<div class="folders__list">
			<loader v-if="!folders.length"
			        class="loader--folders-list">
			</loader>
			<nuxt-link class="folders__list-item"
			           v-for="model in folders"
			           :key='model.id'
			           :to="'/'+ catalogRoute +'/'+ $route.params.mark +'/' + model.slug">
				<div class="folders__list-item-title">{{ model.title }}</div>
				<div class="folders__list-item-number">{{ model.offers_count }}</div>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			catalogRoute: 'settings/catalogRoute',
			folders: 'folders/folders'
		})
	}
}
</script>