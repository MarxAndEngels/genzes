<template>
	<div class="burger"
	     @click="$emit('click')"
	     :class="{'burger--active':active}">
		<div class="burger__line"></div>
		<div class="burger__line"></div>
		<div class="burger__line"></div>
	</div>
</template>

<script>
export default {
	props: {
		active: Boolean
	}
}
</script>