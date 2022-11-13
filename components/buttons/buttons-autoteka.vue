<template>
	<div class="button button--autoteka"
	     @click="click"
	     v-tippy="{
							content:`<div class='tippy__text'>Посмотреть отчет по Автотеке</div>`,
							animation:'scale',
							arrow: true,
					}">
		<svg-icon class="button--autoteka-icon"
		          name="autoteka" />
		<span class="button--autoteka-text"
		      v-if="showText">Проверить по Автотеке
		</span>
	</div>
</template>
<script>
import modals from "@/mixins/modals";

export default {
	mixins: [modals],
	props: {
		offer: Object,
		showText: Boolean
	},
	methods:{
		click(){
			this.openAutoteka(this.offer)
		}
	}
}
</script>