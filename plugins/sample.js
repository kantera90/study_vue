import Vue from 'vue';
Vue.directive('sample', function(el, binding, vnode, oldNode){
  console.log('第２引数として関数を渡すとbindとupdateにフックし、同じ処理を呼び出します。');
})
