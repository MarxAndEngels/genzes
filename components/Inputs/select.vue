<template>
	<div class="select"
	     tabindex="1"
	     @focusout="open = false"
	     :class="{'select--open':open, 'select--disabled':disabled}">
		<div class="select__data"
		     @click="open = !open">
			<div class="select__data-title"
			     v-if="multiselect">
				{{ currentMultiTitles }}
			</div>
			<div class="select__data-title"
			     v-else>
				{{ currentTitle }}
			</div>
			<div class="select__rec"></div>
		</div>
		<!--TODO возможность выбора нескольких элементов-->
		<div v-if="multiselect"
		     class="select_options_wrapper">
			<div v-if="options"
			     class="select_options">
				<div class="select_option select_option--multi"
				     v-for="(option, index) in options"
				     :key="index">
					<inputs-checkbox :default="false"
					                 @change="multiSelect($event, option)"
					                 :title="''+optionName(option)" />
				</div>
			</div>
			<div v-else
			     class="select_nodata">
				НЕТ ДАННЫХ
			</div>
		</div>
		<div v-else
		     class="select_options_wrapper">
			<div v-if="options"
			     class="select_options">
				<div class="select_option"
				     v-for="(option, index) in options"
				     :key="index"
				     @click="onSelect(option)">
					<span class="select_option_name">{{ optionName(option) }}</span>
				</div>
			</div>
			<div v-else
			     class="select_nodata">
				НЕТ ДАННЫХ
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			open: false,
			multiSelects: []
		}
	},
	props: {
		title: String,
		items: Array,
		currentData: [Object, Number],
		range: Boolean,
		disabled: Boolean,
		multiselect: Boolean,
	},
	computed: {
		options() {
			if (this.range) {
				return this._.range(this.items[0], this.items[1])
			} else {
				return this.items ? this.items : []
			}
			
		},
		currentMultiTitles() {
			if (this.multiSelects.length) {
				return this.multiSelects.map(item => item.title).sort().join(', ')
			} else {
				return this.title
			}
		},
		currentTitle() {
			if (this.currentData) {
				return this.currentData.title || this.currentData.value || this.currentData
			} else {
				return this.title
			}
		}
	},
	methods: {
		multiSelect(event, option) {
			if (event) {
				this.multiSelects.push(option)
			} else {
				this.multiSelects = this.multiSelects.filter(item => item.slug !== option.slug)
			}
			this.$emit('selected', this.multiSelects)
		},
		onSelect(item) {
			this.open = false
			this.$emit('selected', item)
		},
		optionName(item) {
			return item.title || item.name || item
		}
	},
	// mounted() {
	// 	console.log(this.multiselect)
	// }
}
</script>