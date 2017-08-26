<template>
  <div class="main-body">
    <input type="hidden" name="theme-pink" />
	  <home-video></home-video>
    <home-second-section></home-second-section>
  </div>
</template>

<script>
import $ from 'jquery'
import HomeVideo from './components/pages/home-video.vue'
import HomeSecondSect from './components/pages/home-second-section.vue'

export default {
  name: 'app-index',
  data () {
    return {}
  },
  components: {
    HomeVideo: HomeVideo,
    HomeSecondSection: HomeSecondSect
  },
  methods: {
    // Init scroll bar
    initScrollBar () {
      let csColor = $('input[name="theme-pink"]').css('color')
      $('html').niceScroll({
        cursorcolor: csColor, // 改变滚动条颜色
        cursoropacitymin: 0.01, // 滚动条隐藏时最小透明度(0-1, default: 0)
        cursoropacitymax: 0.9, // 滚动条显示时最大透明度(0-1, default: 1)
        cursorwidth: '6px', // 滚动条宽度 (default: "5px")
        cursorborder: '1px solid ' + csColor, // 滚动条边框(default: "1px solid #fff")
        cursorborderradius: '10px', // 边框圆角半径(default: "5px")
        zindex: 'auto', // 更改滚动条的z-index([number] | default: "auto")
        scrollspeed: 120, // 平滑滚动速度(default: 60), 越大越平滑
        mousescrollstep: 40, // 滚动速度与鼠标滚轮(像素 | default: 40), 滚轮滚动大小，越大滚得越远
        emulatetouch: false, // 启用光标拖动像台式电脑中的触摸设备
        boxzoom: true, // 启用内容缩放
        dblclickzoom: true, // （仅当boxzoom = true时）zoom activated when double click on box
        gesturezoom: true, // (仅当boxzoom = true 且在触摸设备时) zoom activated when pinch out/in on box
        grabcursorenabled: true // (only when touchbehavior=true) display "grab" icon
        // 更多选项详见[https://github.com/inuyaksa/jquery.nicescroll]
      })
    }
  },
  mounted () {
    // Init scroll bar
    this.$nextTick(() => {
      this.initScrollBar()
    })
  }
}
</script>

<style lang="less">
  @import './styles/index.less';

  input[name="theme-pink"] {
    color: @theme-pink;
  }
</style>
