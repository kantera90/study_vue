<template>
  <section class="container">
    <div>
      <h1 class="title">Computedを学ぶ</h1>
      <h2 class="subtitle">算出プロパティで処理を含むデータを作成する</h2>
      <div class="study">
        <h3 class="study_title">リストの絞り込みに利用しよう</h3>
        <input v-model.number="budget">円以下に絞り込む
        <input v-model.number="limit">件を表示
        <p>{{ matched.length }}件中{{ filteredList.length }}件を表示中</p>
        <ul>
          <li v-for="item in filteredList" v-bind:key="item.id">
            {{ item.name }} {{ item.price }}円
          </li>
        </ul>
      </div>
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
  font-size: 15px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  margin-bottom: 20px;
}

.study_title{
  margin: 0;
  margin-bottom: 10px;
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
</style>

<script>

export default {
  data() {
    return{
      budget: 300,
      limit: 2,
      list: [
        { id: 1, name: 'りんご', price: 100 },
        { id: 2, name: 'ばなな', price: 200 },
        { id: 3, name: 'いちご', price: 400 },
        { id: 4, name: 'おれんじ', price: 300 },
        { id: 5, name: 'めろん', price: 500 },
      ]
    }
  },
  computed: {
    matched: function() {
      return this.list.filter(function(el){
        return el.price <= this.budget
      }, this)
    },
    limited: function() {
      return this.matched.slice(0, this.limit)
    },
    filteredList: function(){
      return this.limited
    }
  }
}
</script>
