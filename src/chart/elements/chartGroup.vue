<template>
  <div class="js-vuechartcss-grouped">
    <slot></slot>
  </div><!-- /.js-vuechartcss-grouped -->
</template>

<script>
import { is_true, has, in_array } from '../methods.js'

export default {
  name: 'chart-group',

  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
    }
  },
  methods: {
    is_true,
    has,
    in_array,
    groupify: function() {
      let groups = document.querySelectorAll('.js-vuechartcss-grouped') // get all groups
      let ic = 0

      // get specific group
      for (let group of groups) {
        // get all charts in specific group
        let charts = group.children
        var n
        // make group
        for (let i = group.children.length - 1; i >= 0; i--) {
          if(!i==0) n = i-1 // get the anterior chart except first
          charts[n].innerHTML = charts[i].outerHTML // add the right chart in left chart
        }

        // get all charts in specific group again
        charts = group.children
        // delete the rest
        for (let i = group.children.length - 1; i >= 0; i--) {
          // delete all rest except group maked
          if (!i==0) charts[i].remove()
        }
        groups[ic].parentElement.classList.add('charts--grouped') // add class in chart container
        ic++
      }

    }
  },
  attached: function() {
    this.groupify()
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

