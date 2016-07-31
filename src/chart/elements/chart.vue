<template>
  <div class="charts {{ is_true(vertical, 'charts--vertical') }}">
    <slot></slot>
  </div> <!-- /.charts -->
</template>

<script>
import { is_true } from '../methods.js'

export default {
  name: 'chart',

  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
    }
  },
  props: ['vertical'],
  methods: {
    // verify if has a property (if === "true") and return a callback
    is_true,
  },
  attached: function(){
    this.$broadcast('chart', {vertical: this._props.vertical.raw})
  }
}
</script>

<style>
@import '../chart.css';
</style>
