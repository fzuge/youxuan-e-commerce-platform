<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
  <!-- <HomePanel tittle="新鲜好物" subtittle="好吃好喝"> 我是一个插槽 </HomePanel>
  <HomePanel tittle="热门商品" subtittle="汉化哈吉斯"> 我是一个插槽 </HomePanel> -->
</template>
