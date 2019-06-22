<template>
  <section class="container">
    <div>
      <h1 class="title">ウォッチャを学ぶ</h1>
      <h2 class="subtitle">ウォッチャでデータを監視して処理を自動化する</h2>
      <div class="study">
        <h3 class="study_title">フォームを監視してAPIからデータを取得しよう</h3>
        <div class="sample">
          <select v-model="current">
            <option v-for="topic in topics" v-bind:value="topic.value">
              {{ topic.name }}
            </option>
          </select>
          <div v-for="item in list">{{item.full_name}}</div>
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
const axios = require('axios');

export default {
  data() {
    return{
      list: [],
      edited: false,
      sample: 100,
      current: '',
      topics: [
        { value: 'vue', name: 'Vue.js' },
        { value: 'jQuery', name: 'jQuery' },
      ]
    }
  },
  watch: {
    current: function(val){
      //githubのapiからトピックのリポジトリを検索
      axios.get('https://api.github.com/search/repositories',{
        params: {q: 'topic:' + val}
      }).then(function(response){
        this.list = response.data.items
      }.bind(this))
    }
  }
}
</script>
