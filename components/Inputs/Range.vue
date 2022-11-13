<template>
  <div class="range_component">
    <div class="range_title" v-if="title">
    {{ title }} <span>{{dimension[val]}}</span>
    </div>
    <div class="progressed_line" :style="{width: progress + '%'}"></div>
    <input @input="$emit('rangeInput')" type="range" v-model="val" :min="min" :max="max" :step="step">
    <div class="range_dimension">
      <div class="range_dimension_item" v-for="item in dimension">
        <span>{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      val: this.value
    }
  },

  computed: {
    progress(){
      return Number(this.val)*100 / this.max
    }
  },
  props: {
    value: {
      type: Number,
      default: 1
    },
    title: {
      type: String,
      default: ''
    },
    max:{
      type: Number,
      default: 1
    },
    step:{
      type: Number,
      default: 1
    },
    dimension:{
      type: Array,
      default:()=> []
    },
    min:{
      type: Number,
      default: 1
    }
  }
}
</script>