<template>
	<div class="application__line">
		<div class="application__line-block">
			<texts-about/>
		</div>
		<div class="application__line-block">
			<sliders-about/>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			settings: "settings/settings"
		})
	}
}
</script>
