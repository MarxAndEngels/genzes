<template>
	<nuxt-link :to="to" class="button button--info">
		Подробнее
	</nuxt-link>
</template>
<script>
export default {
	props: {
		to: String
	}
}
</script>