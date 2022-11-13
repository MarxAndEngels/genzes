<template>
	<nuxt-link to="/favorites" class="header__favorite">
		<div class="header__favorite-count" v-if="likesArray.length">
		{{likesArray.length}}
		</div>
		<svg-icon name="favorites"/>
	</nuxt-link>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	computed:{
		...mapGetters({
			likesArray: 'favorite/likesArray',
		})
	}
}
</script>