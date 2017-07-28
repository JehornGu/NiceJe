<template>
  <div class="menu-toggle close" :class="styles" @click="menuToggle">
  	<span class="line"></span>
  	<span class="line"></span>
  	<span class="line"></span>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'toggle-btn',
  props: {
    styles: {
      type: String,
      default: 'pull-right'
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    menuToggle () {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        $('.menu-toggle.close>.line').eq(0).addClass('close-first-line')
        $('.menu-toggle.close>.line').eq(1).addClass('close-second-line')
        $('.menu-toggle.close>.line').eq(2).addClass('close-third-line')
      } else {
        $('.menu-toggle.close>.line').eq(0).removeClass('close-first-line')
        $('.menu-toggle.close>.line').eq(1).removeClass('close-second-line')
        $('.menu-toggle.close>.line').eq(2).removeClass('close-third-line')
      }
      this.$emit('isOpenMenu', this.isOpen)
    },
    menuToggleHover () {
      $('.menu-toggle').hover(() => {
        $('.menu-toggle>.line').eq(0).addClass('open-first-line')
        $('.menu-toggle>.line').eq(1).addClass('open-second-line')
        $('.menu-toggle>.line').eq(2).addClass('open-third-line')
      }, () => {
        $('.menu-toggle>.line').eq(0).removeClass('open-first-line')
        $('.menu-toggle>.line').eq(1).removeClass('open-second-line')
        $('.menu-toggle>.line').eq(2).removeClass('open-third-line')
      })
    }
  },
  mounted () {
    this.menuToggleHover()
  }
}
</script>

<style lang="less" scoped>
  @import '../../styles/index.less';
  
  .menu-toggle {
    text-align: right;
    cursor: pointer;
    padding: 10px 15px;
    &.close {
      opacity: 1;
    }
    .line {
      transition: all .3s ease;
      margin-bottom: @toggle-btn-space;
      display: block;
      background-color: white;
      height: @toggle-btn-height;
      width: @toggle-btn-width;
    }
    .line:nth-child(2) {
      transition: all .3s ease;
      width: @toggle-btn-width / 3 * 2;
      margin-left: @toggle-btn-width / 3 * 1;
    }
    .line:last-child {
      transition: all .3s ease;
      margin-bottom: 0;
      width: @toggle-btn-width / 3 * 1;
      margin-left: @toggle-btn-width / 3 * 2;
    }
  }

  .close-first-line {
  	transition: all .3s ease;
  	margin-top: @toggle-btn-space;
  	transform: rotate(-45deg);
  	transform-origin:50% 50%; 
  }
  .close-second-line {
    transition: transform .3s ease;
    margin-top: -@toggle-btn-space!important;
    width: @toggle-btn-width!important;
    margin-left: 0!important;
    transform: rotate(45deg);
    transform-origin:50% 50%; 
  }
  .close-third-line {
    transition: all .3s ease;
    display: none!important;
  }

  .open-first-line {

  }
  .open-second-line {
    transition: all .3s ease;
    margin-left: @toggle-btn-width / 3 * 0!important;
  }
  .open-third-line {
    transition: all .4s ease;
    margin-left: @toggle-btn-width / 3 * 0!important;
  }

</style>