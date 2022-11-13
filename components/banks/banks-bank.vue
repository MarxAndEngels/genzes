<template>
	<div class="bank__card">
		<nuxt-link :to="`/credit/${bank.slug}`" class="bank__card-logo-wrapper">
			<img class="bank__card-logo lazyload" :data-src="bank.image"/>
		</nuxt-link>
		<a class="bank__card-license" target="_blank" :href="bank.license_file">
			{{bank.license_title}}
		</a>
	</div>
</template>

<script>
import requests from "@/mixins/requests";
import {mapGetters} from "vuex";

export default {
	props: {
		bank: Object
	}
}
</script>