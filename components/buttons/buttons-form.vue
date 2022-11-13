<template>
	<div @click="$emit('click')"
	     :class="{'button--disabled': disabled}"
	     class="button button--form">
		{{ text }}
	</div>
</template>
<script>

export default {
	props: {
		text: String,
		disabled: Boolean,
	},
}
</script>