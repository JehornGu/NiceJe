<template>
  <section class="home-video">
  	<div class="video-mask"></div>
  	<video class="videos" autoplay="autoplay" loop="loop" muted :poster="loadImgUri" v-if="isSupportMp4 && !isMinWin">
	  <source :src="videoUri" type="video/mp4" />
  	  您的浏览器不支持 video 标签。
  	</video>
  	<img :src="loadImgUri" v-if="!isSupportMp4 || isMinWin" />
  </section>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'home-video',
  data () {
    return {
      videoUri: 'static/videos/haku_jilejingtu.mp4',
      loadImgUri: 'static/img/33246-106.jpg',
      isSupportMp4: false,
      isMinWin: false
    }
  },
  methods: {
    // Full screen
    InitFullScreen () {
      let win = $(window)
      let homeVideo = $('section.home-video')

      this.isWindowWidthMin(win)
      homeVideo.innerHeight(win.innerHeight())
      win.resize(() => {
        this.isWindowWidthMin(win)
        homeVideo.innerHeight(win.innerHeight())
      })

      // browser is support for mp4 video
      const myVid = document.createElement('video')
      const vidType = 'video/mp4'
      const codType = 'avc1.42E01E, mp4a.40.2'
      let isSupp = myVid.canPlayType(vidType + ';codecs="' + codType + '"')
      if (isSupp === 'probably') {
        this.isSupportMp4 = true
      } else {
        this.isSupportMp4 = false
      }
    },
    isWindowWidthMin (win) {
      if (win.innerWidth() > 992) {
        this.isMinWin = false
      } else {
        this.isMinWin = true
      }
    }
  },
  mounted () {
    this.InitFullScreen()
  }
}
</script>

<style lang="less" scoped>
  @import '../../styles/index.less';
  
  section.home-video {
	overflow: hidden;
	position: relative;
	> .video-mask {
	  width: 100%;
	  height: 100%;
	  position: absolute;
	  top: 0;
	  left: 0;
	  background-color: fadeout(@theme-black, 30%);
	  z-index: @video-mask-index;
	}
	> video {
	  width: 100%;
	  height: 100%;
	  object-fit: fill;
	}
	> img {
	  width: 100%;
	  height: 100%;
	  object-fit: fill;	
	}
  }
</style>