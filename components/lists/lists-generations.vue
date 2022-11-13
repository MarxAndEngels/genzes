<template>
	<div class="generations"
	     ref="generations">
		<h2 class="h2__title">
			Поколения:
		</h2>
		<div class="generations__list">
			<loader v-if="!generations.length"
			        class="loader--generations-list">
			</loader>
			<div class="generations__list-item"
			     @click="toGeneration(generation)"
			           v-for="generation in generations"
			           :key='generation.id'>
				<div class="generations__list-item-title">{{ generation.name }}</div>
				<div class="generations__list-item-number">{{ generation.offers_count }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			catalogRoute: 'settings/catalogRoute',
			generations: 'generations/generations'
		})
	},
	methods:{
		toGeneration(generation){
			this.$router.push({path: this.$route.fullPath, query:{generation:generation.slug}})
		}
	}
}
</script>
