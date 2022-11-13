<template>
	<div class="benefits__item">
		<div class="benefits__item-line">
			<svg-icon class="benefits__item-icon" :name="benefit.icon"/>
			<div>
				<div class="benefits__item-text">
					{{ benefit.text }}
				</div>
				<div class="benefits__item-bold">
					{{ benefit.text_strong }}
				</div>
			</div>
			
			
		</div>
	</div>
</template>

<script>
export default {
	props: {
		benefit: Object
	}
}
</script>