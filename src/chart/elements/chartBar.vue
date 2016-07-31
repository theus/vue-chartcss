<template>
  <div class="
  charts__chart
  {{ (in_array(size, ['xs', 'sm', 'lg', 'xl'])) ? `chart--${size}` : '' }}
  {{ (in_array(color, ['default', 'blue', 'green', 'red', 'yellow', 'grey'])) ? `chart--${color}` : '' }}
  {{ has(percent, `chart--p${percent}`) }}
  " v-bind="{'data-percent': (showPercentage !== undefined) ? '' : false}">
    <span v-if="is_true(vertical)" class="charts__percent">{{percent}}</span>
  </div><!-- /.charts__chart -->
</template>

<script>
import { is_true, has, in_array } from '../methods.js'

export default {
  name: 'chart-bar',

  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
    }
  },
  props: ['size', 'color', 'percent', 'showPercentage'],
  methods: {
    is_true,
    has,
    in_array,
  },
  events: {
    chart: function (data) {
      this.$data = data
    }
  }
}
</script>

<style>
</style>
