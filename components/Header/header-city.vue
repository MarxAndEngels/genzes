<template>
	<div class="header__city">
		<div class="header__city-city">
			г. {{ settings.city }}
		</div>
		<div class="header__city-address">
			{{ settings.address }}
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			settings: 'settings/settings'
		})
	}
}
</script>