<template>
	<div class="slider">
		<client-only>
			<carousel :dots="false" :nav="true" :items="1" loop>
				<div class="slide" v-for="slide in 10" :key="slide">
					<img :src="require('~/assets/img/about/about-'+ slide +'.jpg')" alt="bank">
				</div>
			</carousel>
		</client-only>
	</div>
</template>