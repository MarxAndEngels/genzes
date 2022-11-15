<template>
	<div class="map">
		<!-- 55.716691, 37.765166 -->
		<client-only>
			<yandex-map
					v-if="ready"
					:coords="settings.coordinates.split(',')"
					zoom="15"
					style="width: 100%; height: 480px;"
					:controls="['trafficControl']"
			>
				<ymap-marker
						marker-id="1"
						marker-type="placemark"
						:coords="settings.coordinates.split(',')"
				></ymap-marker>
			</yandex-map>
			<div v-else class="map__loader">
				<loader large/>
			</div>
		</client-only>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	data() {
		return {
			ready: false
		}
	},
	computed: {
		...mapGetters({
			settings: 'settings/settings'
		})
	},
	mounted() {
		setTimeout(() => {
			this.ready = true
		}, 500)
	}
}
</script>