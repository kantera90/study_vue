<template>
  <section class="container">
    <div>
      <h1 class="title">カスタムディレクティブを学ぶ</h1>
      <h2 class="subtitle">カスタムディレクティブでデータを監視しながらDOMを操作する</h2>
      <div class="study">
        <h3 class="study_title">前の状態と比較して処理を行う</h3>
        <p>メソッドの引数として古いVNodeと古いバインドデータを受け取れるため、比較をして自分がバインドしているデータに変化があったときのみ処理を行わせることができます。</p>
        <p>第二引数bindingは次のプロパティを含むオブジェクトになっています。</p>
        <ul>
          <li>arg:
            <p>引数</p>
          </li>
          <li>modifiers:
            <p>修飾子のオブジェクト</p>
          </li>
          <li>value:
            <p>新しい値</p>
          </li>
          <li>oldValue:
            <p>古い値（update及びcomponentUpdatedのみ使用可）</p>
          </li>
        </ul>

        <ul>
          <li>
            <button @click="video1=true">再生</button>
          </li>
          <li>
            <button @click="video1=false">停止</button>
          </li>
        </ul>
        <video src="/movie1.mp4" v-video="video1"></video>

        <ul>
          <li>
            <button @click="video2=true">再生</button>
          </li>
          <li>
            <button @click="video2=false">停止</button>
          </li>
        </ul>
        <video src="/movie2.mp4" v-video="video2"></video>

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
  directives: {
    video(el, binding){
      if(binding.value !== binding.oldValue){
        binding.value ? el.play() : el.pause()
      }
    }
  }
}
</script>
