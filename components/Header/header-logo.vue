<template>
	<nuxt-link class="header__logo"
	           @click.native="$emit('click')"
	           :to="'/'">
		<img src="~/assets/img/logo-white-mirror.svg"
		     alt="logo">
		<!-- <img v-else src="~/assets/img/logo-white.svg"
		     alt="logo"> -->
	</nuxt-link>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			isMirror: 'settings/isMirror'
		})
	}
}
</script>