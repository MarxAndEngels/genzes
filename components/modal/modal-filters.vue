<template>
	<transition name="fade" >
		<div  v-if="modalFilter" class="modal__wrapper">
			<div class="modal__overlay" @click="setModalFilter(false)"></div>
			<div class="modal__content_filter">
				<!-- <div class="modal__title">
					{{ modalTitle }}
				</div>
				<div class="modal__title modal__title--sub"
				     v-if="modalSubTitle !== ''">
					{{ modalSubTitle }}
				</div> -->
				<div class="modal__close_filter"
				     @click="setModalFilter(false)">
					×
				</div>
				<component modal
				           :is="component" />
						<buttons-form text="Применить" @click="setModalFilter(false)"/>
			</div>
		</div>
	</transition>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
	computed: {
		...mapGetters({
			modalFilter: 'modal/modalFilter'
		}),
		component() {
			return `catalog-filters`
		}
	},
	 methods: {
        ...mapMutations({
            setModalFilter: 'modal/SET_MODAL_FILTER',
        }),
	 }
}
</script>