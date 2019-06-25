<template>
  <section class="container">
    <div>
      <h1 class="title">カスタムディレクティブを学ぶ</h1>
      <h2 class="subtitle">カスタムディレクティブでデータを監視しながらDOMを操作する</h2>
      <div class="study">
        <h3 class="study_title">使用可能なフック</h3>
        <input v-console v-model="price">
        <ul>
          <li>bind
            <p>ディレクティブがはじめて要素と紐づいたとき </p>
          </li>
          <li>inserted
            <p>紐づいた要素が親Nodeに紐づいたとき</p>
          </li>
          <li>update
            <p>紐づいた要素を包括しているコンポーネントのVNodeが更新されたとき</p>
          </li>
          <li>componentUpdated
            <p>包括しているコンポーネントと子コンポーネントのVNodeが更新されたとき</p>
          </li>
          <li>unbind
            <p>紐づいていた要素からディレクティブが削除されるとき</p>
          </li>
        </ul>
        <b>フックの引数</b>
        <ul>
          <li>el
            <p>ディレクティブが付与されている要素</p>
          </li>
          <li>binding
            <p>バインドされた値、引数、修飾子のオブジェクト</p>
          </li>
          <li>vnode
            <p>要素に対するVNode</p>
          </li>
          <li>oldVnode
            <p>更新前のVNode(update及びcomponentoUpdatedのみ使用可)</p>
          </li>
        </ul>
        <b>フックの関数による省略記法</b>
        <div>
          <input v-sample type="text" v-model="description">
        </div>
      </div>
      <div class="data">{{$data}}</div>
    </div>
  </section>
</template>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background: #fcfcfc;
}

.container > div{
  width: 90%;
  margin: 0 auto;
  padding: 30px 0;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 30px;
  color: #35495e;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.subtitle {
  font-weight: 300;
  font-size: 24px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 0;
  margin-bottom: 20px;
}

.study_title{
  margin: 0;
  margin-bottom: 10px;
}

.study_title:not(:first-child){
  margin-top: 20px;
}

.study_title-sub{
  margin: 0;
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 0.8em;
}
.links {
  padding-top: 15px;
}

.study {
  background: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  padding: 20px;
}

.study p{
  margin: 0;
}
.data{
  margin-top: 20px;
  padding: 20px;
  background: #000;
  color: #fff;
  font-size: 0.8rem;
  line-height: 1.8rem;
}
</style>

<script>
import _ from 'lodash';
import { console } from '../../plugins/console.js'
import { sample } from '../../plugins/sample.js'

export default {
  data() {
    return{
      description: 'http://www.obenkyo.site',
      price: 29800,
      message:{
        text:'もじもじ',
        kakaku: 1000000
      }
    }
  }
}
</script>
