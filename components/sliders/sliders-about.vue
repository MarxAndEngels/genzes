<template>
	<div class="slider">
		<client-only>
			<carousel :dots="false" :nav="true" :items="1" loop :responsive="{0:{items:1},748:{items:2}}"
				:margin="16">
				<div class="slide" v-for="slide in 22" :key="slide">
					<img data-fancybox="gallery" :src="require('~/assets/img/about/slider-dealer-'+ slide +'.webp')" alt="bank">
				</div>
			</carousel>
		</client-only>
	</div>
</template>