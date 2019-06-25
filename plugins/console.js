import Vue from 'vue';
Vue.directive('console', {
  bind: function(el, binding){
    console.log('v-console bind')
  },
  inserted: function(el, binding) {
    console.log('v-console inserted')
  },
  update: function(el, binding) {
    console.log('v-console update')
  },
  componentUpdated: function(el, binding) {
    console.log('v-console componentUpdated')
  },
  unbind: function(el, binding) {
    console.log('v-console unbind')
  }
})
