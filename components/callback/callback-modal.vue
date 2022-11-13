<template>
	<div class="callback"
	     :class="{'callback--active':open}">
		<svg-icon class="callback__figure"
		          @click="open = !open"
		          name="callback-figure" />
		<svg-icon class="callback__phone"
		          :name="open ? 'close' : 'phone' "  />
		<forms-callback/>
	</div>
</template>
<script>
export default {
	data() {
		return {
			open: false
		}
	}
}
</script>