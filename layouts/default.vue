<template>
	<div class="wrapper"
	     :class="{'wrapper--fixed': fixed}"
	     tabindex="0"
	     @keyup.esc="closeModal">
		<Header :fixed="fixed" />
		<div class="container">
			<crumbs />
			<transition name="page">
				<Nuxt />
			</transition>
			<div v-if="isBanks">
				<h2 class="h2__title">Банки партнеры</h2>
				<banks />
			</div>
			<div v-if="isContacts">
				<h2 class="h2__title">Контакты</h2>
				<application-contacts />
			</div>
		</div>
		<modal-main />
		<modal-autoteka />
		<Footer />
		<cookie />
		<!--<callback-modal/>-->
	</div>
</template>
<script>
import {mapActions} from 'vuex'
import ApplicationContacts from "@/components/application/application-contacts";
import metrika from "@/mixins/metrika";

export default {
	mixins: [metrika],
	data() {
		return {
			fixed: true
		}
	},
	computed: {
		isBanks() {
			return this.$route.name !== 'banks'
		},
		isContacts() {
			return this.$route.name !== 'contacts' && this.$route.name !== 'cars-mark-folder-id'
		}
	},
	mounted() {
		// window.addEventListener('scroll', this.handleScroll);
		this.getUrlParams()
		this.clearLocalStorage()
	},
	methods: {
		...mapActions({
			closeModal: 'modal/closeModal'
		}),
		// handleScroll() {
		// 	this.fixed = window.scrollY >= 24;
		// },
		getUrlParams() {
			if (this.$route.query) {
				for (let param in this.$route.query) {
					if (
							param === 'utm_source'
							|| param === 'utm_medium'
							|| param === 'utm_term'
							|| param === 'utm_content'
							|| param === 'utm_campaign') {
						localStorage.setItem(param, this.$route.query[param])
					}
				}
			}
		},
		clearLocalStorage() {
			localStorage.removeItem('modificationTop');
			localStorage.removeItem('firstCome');
			localStorage.removeItem('modificationLeft');
		},
	}
}
</script>
