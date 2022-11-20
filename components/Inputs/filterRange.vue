<template>
    <input :class="rangeClass" @change.prevent="$emit('input', $event.target.value)"/>
</template>
<script>
export default {
data() {
    return {
        slider: null
    }
},
props: {
    options: {
        type: Object,
        default: () => {
        }
    },
    rangeClass: {
        type: String,
        default: ''
    }
},
mounted() {
    this.slider = ionRangeSlider.ionRangeSlider('.' + this.rangeClass, this.options);
},
destroyed() {
    this.slider.destroy()
}
}
</script>