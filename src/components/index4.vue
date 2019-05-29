<template>
  <section class="container">
    <div>
      <h1 class="title">Computedを学ぶ</h1>
      <h2 class="subtitle">算出プロパティで処理を含むデータを作成する</h2>
      <div class="study">
        <h3 class="study_title">算出プロパティのキャッシュ機能</h3>
        <ol>
          <li>{{ computedData }}</li>
          <li>{{ computedData }}</li>
        </ol>
        <ol>
          <li>{{ methodsData() }}</li>
          <li>{{ methodsData() }}</li>
        </ol>
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
  components: {
  },
  computed: {
    computedData: function() { return Math.random()}
  },
  methods: {
    methodsData: function() { return Math.random() }
  }
}
</script>
