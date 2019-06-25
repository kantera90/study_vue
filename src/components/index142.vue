<template>
  <section class="container">
    <div>
      <h1 class="title">nextTickを学ぶ</h1>
      <h2 class="subtitle">nextTickで更新後のDOMにアクセスする</h2>
      <div class="study">
        <h3 class="study_title">nextTickの使い方</h3>
        <p>DOMが更新された後に行いたい処理をグローバルメソッドVue.nextTickのコールバック関数として定義します。<br>
          同様の機能を持つインスタンスメソッドthis.$nextTickも使用できます。インスタンスメソッドは、コールバック関数内でもインスタンスのスコープを維持するため$thisを使用したい場合はこちらのほうが扱いやすいでしょう。
        </p>
        <pre>
          this.$nextTick(function() {<br>
            //DOM更新後に行いたい処理<br>
          })
        </pre>
        <h3 class="study_title">更新後のDOMの高さを取得しよう</h3>
        <p>例えば、可変のリストを囲む要素の高さを取得したい場合、リストの数が変化しても画面上の実際の位置や高さはリアルなDOMにアクセスしてみないと調べることができません。<br>
        そんな時はnextTickの出番です。</p>
        <button v-on:click="list.push(list.length+1)">追加</button>
        <ul ref="list">
          <li v-for="item in list">{{item}}</li>
        </ul>

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

export default {
  data() {
    return{
      list: [],
      video1: false,
      video2: false,
      description: 'http://www.obenkyo.site',
      price: 29800,
      message:{
        text:'もじもじ',
        kakaku: 1000000
      }
    }
  },
  watch:{
    list: function(){
      //更新後のul要素の高さを取得できない
      console.log('通常：', this.$refs.list.offsetHeight)
      //nextTckを使えばできる
      this.$nextTick(function(){
        console.log('nextTick:', this.$refs.list.offsetHeight)
      })
    }
  }
}
</script>
