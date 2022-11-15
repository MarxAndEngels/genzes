<template>
	<div class="application__line_about">
		<div class="application__line-block_about">
			<texts-about/>
		</div>
		<div class="application__line-block_about">
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
