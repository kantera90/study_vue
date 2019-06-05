<template>
  <section class="container">
    <div>
      <h1 class="title">Computedを学ぶ</h1>
      <h2 class="subtitle">算出プロパティで処理を含むデータを作成する</h2>
      <div class="study">
        <h3 class="study_title">ゲッターとセッター</h3>
        <div><input v-model.number="width"> {{width}}</div>
        <div><input v-model.number="halfWidth"> {{halfWidth}}</div>
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

export default {
  components: {
  },
  data() {
    return {
      width: 800,
      height: 400
    }
  },
  computed: {
    halfWidth: {
      get: function() {
        return this.width /2;
      },
      set: function(val) {
        this.width = val * 2;
      }
    }
  }
}
</script>
