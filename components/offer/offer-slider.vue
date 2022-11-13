<template>
	<div class="offer__slider" v-if="photos.length">
		<div class="offer__slider-mobile">
			<img class="offer__slider-mobile-slide lazyload"
			     v-for="img in photos"
			     :key="img.small_webp"
			     :data-src="img.small_webp"
			     @click="$emit('click')"
			     alt="image" />
		</div>
		<div class="offer__slider-desktop">
			<img :data-src="coverSrc"
			     @load="onImgLoad"
			     @click="$emit('click')"
			     :class="class_name"
			     class="lazyload"
			     alt="" />
			<div class="brazzers__button-container"
			     @mouseleave="mouseLeave">
				<div
						class="brazzers__button"
						@click="$emit('click')"
						v-if="photos && photos.length > 0 && index <= limit"
						v-for="(photo, index) in photos"
						:key="photo.small_webp"
						@mouseover="mouseOver(photo.small_webp)"
				></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		images: {
			type: Array,
			default: () => []
		},
	},
	data() {
		return {
			class_name: 'load',
			isLoaded: false,
			limit: 10,
			photos: this.images,
			forceCoverPhoto: null,
			placeholderUrl: this.images[0].small_webp
		}
	},
	computed: {
		coverSrc() {
			return this.forceCoverPhoto
					? this.forceCoverPhoto
					: this.photos.length > 0
							? this.photos[0].small_webp
							: this.placeholderUrl;
		},
	},
	methods: {
		onImgLoad() {
			this.class_name = 'loaded';
		},
		mouseOver(photo) {
			if (this.forceCoverPhoto !== null) {
				this.class_name = 'load';
			}
			this.forceCoverPhoto = photo;
		},
		mouseLeave() {
			this.forceCoverPhoto = null;
			this.class_name = 'loaded';
		}
	}
}
</script>
