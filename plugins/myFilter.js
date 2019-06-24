import Vue from 'vue';
Vue.filter('gfilter', function(val){
  return val.toLocaleString()
})
