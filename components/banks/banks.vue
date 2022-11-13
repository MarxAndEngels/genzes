<template>
	<div class="banks__wrapper">
		<div class="banks"
		     v-if="banks.length">
			<banks-bank v-for="bank in banks_list"
			            :key="bank.id"
			            :bank="bank" />
		</div>
		<nuxt-link v-if="!isAll" @click.native class="button button--more" to="/banks">Все банки</nuxt-link>
	</div>
	
</template>

<script>
import requests from "@/mixins/requests";
import {mapGetters} from "vuex";

export default {
	props: {isAll: Boolean
	},
	mixins: [requests],
	computed: {
		...mapGetters({
			banks: 'banks/banks'
		}),
		banks_list(){
			if(this.isAll){
				return this.banks
			} else{
				return this.banks.slice(0, 8)
			}
		}
	},
	async fetch() {
		try {
			await this.getBanks()
		} catch (error) {
			console.log(error)
		}
	}
}
</script>