<template>
  <div class="main-body">
	<home-video></home-video>
  </div>
</template>

<script>
import HomeVideo from './components/pages/home-video.vue'

export default {
  name: 'app-index',
  data () {
    return {}
  },
  components: {
    HomeVideo: HomeVideo
  }
}
</script>

<style lang="less">
  @import './styles/index.less';

</style>
