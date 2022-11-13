<template>
	<svg-icon name="loading" class="loader" :class="currentClass"/>
</template>
<script>
export default {
	props: {
		small: Boolean,
		medium: Boolean,
		large: Boolean,
	},
	computed: {
		currentClass() {
			return this.small ? 'loader--small' :
					   this.medium ? 'loader--medium' :
					   this.large ? 'loader--large' : ''
		}
	}
}
</script>