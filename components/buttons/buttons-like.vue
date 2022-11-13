<template>
	<div class="button button--like"
	     @click="liked(id)">
		<svg-icon class="button--like-icon" :name="isActive ? 'favorites-active' :  'favorites'" />
	</div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
	props: {
		id: Number
	},
	methods:{
		...mapActions({
			liked: 'favorite/liked',
		})
	},
	computed:{
		...mapGetters({
			likesArray: 'favorite/likesArray',
		}),
		isActive(){
			 return this.likesArray.some(id => id === String(this.id))
		}
	}
}
</script>