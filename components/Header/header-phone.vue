<template>
	<div class="header__phone-wrapper">
		<a :href="`tel:${settings.phone}`"
		   class="header__phone">
			<span class="header__phone-desktop">
				{{ settings.phone }}
			</span>
			<span class="header__phone-mobile">
				<svg-icon name="phone" />
			</span>
		</a>
		<a class="header__email"
		   :href="`mailto:${settings.email}`">{{ settings.email }}
		</a>
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