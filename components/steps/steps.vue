<template>
	<div class="steps"
	     v-if="steps.length">
		<div class="steps__item"
		     v-for="item in steps">
			<div class="steps__item-text">{{ item }}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		steps: Array
	}
}
</script>