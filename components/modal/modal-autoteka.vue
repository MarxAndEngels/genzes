<template>
	<transition name="fade">
		<div v-if="modalAutoteka"
		     class="modal__wrapper">
			<div class="modal__overlay"
			     @click="closeAutoteka"></div>
			<div class="modal__content">
				<div class="modal__close"
				     @click="closeAutoteka">
					×
				</div>
				<autoteka-info v-if="modalOffer"
				               :offer='modalOffer' />
			</div>
		</div>
	</transition>
</template>

<script>
import {mapGetters} from "vuex";
import modals from "@/mixins/modals";

export default {
	mixins: [modals],
	computed: {
		...mapGetters({
			modalAutoteka: 'modal/modalAutoteka',
			modalOffer: 'modal/modalOffer'
		})
	}
}
</script>