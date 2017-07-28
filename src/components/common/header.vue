<template>
    <header class="main-header">
	  	<div class="wrapper-container">
        <div class="row">
          <div class="col col-lg-4 col-md-2 col-xs-5 logo">
            <a href="/" class="img">
              <img src="../../assets/logo_white.png" alt="NiceJe" />
            </a>
          </div> <!-- /.logo -->
          <div class="col col-lg-8 col-md-10 col-xs-7 clearfix nav">
            <div class="hidden-sm hidden-xs pull-left custom-menu" @mouseleave="mouseLeave" v-show="!isMenuOpen">
              <ul class="clearfix">
                <li v-for="(item, index) in nav" class="pull-left" @mouseenter="mouseEnter" >
                  <a :href="item.uri">
                    {{ item.name }}
                  </a>
                </li>
                <span class="active-border"></span>
              </ul>
            </div> <!-- /.custom-menu -->
            <toggle-btn @isOpenMenu="toggleBtnStatus"></toggle-btn>
          </div> <!-- /.nav -->
        </div>
	  	</div> <!-- /.wrapper-container -->
      <transition name="slide" @after-enter="afterMenuBoxEnter" @before-leave="beforeMenuBoxLeave">
        <section class="menu-box" v-show="isMenuOpen">
          <transition name="bounce" @after-enter="menuNavActiveInit">
            <div class="menu-content" v-if="isMenuContentShow">
              <div class="menu-item navigations">
                <ul @mouseleave="menuMouseLeave">
                  <li v-for="(item, index) in nav" @mouseenter="menuMouseEnter"><a :href="item.uri">{{ item.name }}</a></li>
                </ul>
                <span class="active-line"></span>
              </div> <!-- /.navigations -->
              <div class="menu-item divide">
                <span class="square"></span>
              </div> <!-- /.divide -->
              <div class="menu-item follow-social">
                <ul class="box">
                  <li v-for="(item, index) in followSocial" v-if="item.type == 'link'">
                    <a :href="item.uri"><i class="fa" :class="item.icon"></i></a>
                  </li>
                  <li v-for="(item, index) in followSocial" v-if="item.type == 'tip'" :title="item.text">
                    <a><i class="fa" :class="item.icon"></i></a>
                  </li>
                </ul>
              </div> <!-- /.follow-social -->
              <div class="menu-item copyright">
                &copy;{{ year }} NiceJe
              </div> <!-- /.copyright -->
            </div> <!-- /.menu-content -->
          </transition>
        </section> <!-- /.menu-box -->
      </transition>
    </header> <!-- /.main-header -->
</template>

<script>
import $ from 'jquery'
import ToggleBtn from '../plugins/toggle-btn.vue'

export default {
  name: 'main-header',
  data () {
    return {
      // Have to set one true
      nav: [
				{ name: 'Home', uri: '', active: true },
				{ name: 'About', uri: '', active: false },
				{ name: 'Blogs', uri: '', active: false },
				{ name: 'Contact', uri: '', active: false }
      ],
      isMenuOpen: false,
      isMenuContentShow: false,
      followSocial: [
        { name: 'facebook', type: 'link', uri: 'http://weibo.com/Jehorn/home', icon: 'fa-facebook' },
        { name: 'twitter', type: 'link', uri: 'http://weibo.com/Jehorn/home', icon: 'fa-twitter' },
        { name: 'qq', type: 'tip', text: 'QQGroup: 137767078', icon: 'fa-qq' },
        { name: 'weibo', type: 'link', uri: 'http://weibo.com/Jehorn/home', icon: 'fa-weibo' }
      ]
    }
  },
  components: {
    ToggleBtn: ToggleBtn
  },
  computed: {
    year () {
      let year = new Date().getFullYear()
      return year
    }
  },
  methods: {
    mouseEnter (e) {
      let active, navWidth
      let li = $('.main-header .nav>.custom-menu>ul>li')
      let line = $('.main-header .nav>.custom-menu>ul>.active-border')
      for (let i = 0; i < li.length; i++) {
        if (e.target === li[i]) {
          active = i
          navWidth = $(li[i]).find('a').width()
          line.stop().animate({ width: navWidth }, 300)
        }
      }
      this.mathActiveLinePosition(active)
    },
    mouseLeave () {
      this.navActiveInit()
    },
    // Init line width & position
    navActiveInit () {
      let li = $('.main-header .nav>.custom-menu>ul>li')
      let line = $('.main-header .nav>.custom-menu>ul>.active-border')
      let active
      this.nav.forEach((ele, index) => {
        if (ele.active === 'true' || ele.active === true) {
          let navWidth = li.eq(index).find('a').innerWidth()
          active = index
          line.stop().animate({ width: navWidth }, 300)
        }
      })

      this.mathActiveLinePosition(active)
    },
    // Computed position of active line
    mathActiveLinePosition (active) {
      let li = $('.main-header .nav>.custom-menu>ul>li')
      let liPadding = $('.main-header .nav>.custom-menu>ul>li').css('padding-left')
      liPadding = liPadding.substring(0, liPadding.indexOf('p'))
      liPadding = parseFloat(liPadding)
      let line = $('.main-header .nav>.custom-menu>ul>.active-border')
      let leftWidth = 0
      active--
      while (active >= 0) {
        leftWidth += li.eq(active).innerWidth()
        active--
      }
      leftWidth += liPadding
      line.css({ display: 'inline-block', left: leftWidth })
    },
    // Is the menu open
    toggleBtnStatus (isOpen) {
      this.isMenuOpen = isOpen
    },
    // In the menu hover navs
    menuMouseEnter (e) {
      let active = 0
      let li = $('.main-header .menu-box>.menu-content>.menu-item.navigations>ul>li')
      for (let i = 0; i < li.length; i++) {
        if (e.target === li[i]) {
          active = i
        }
      }
      li.eq(active).find('a').addClass('active')
      li.eq(active).siblings().find('a').removeClass('active')
      this.menuNavActivePosition(active)
    },
    // In the menu hover navs
    menuMouseLeave () {
      this.menuNavActiveInit()
    },
    // Init navigations of menu active
    menuNavActiveInit () {
      let active = 0
      let li = $('.main-header .menu-box>.menu-content>.menu-item.navigations>ul>li')
      this.nav.forEach((ele, index) => {
        if (ele.active === 'true' || ele.active === true) {
          li.eq(index).find('a').addClass('active')
          li.eq(index).siblings().find('a').removeClass('active')
          active = index
        }
      })

      this.menuNavActivePosition(active)
    },
    // Active line position
    menuNavActivePosition (active) {
      let topHeight = 0
      let li = $('.main-header .menu-box>.menu-content>.menu-item.navigations>ul>li')
      let liHeight = li.innerHeight()
      let line = $('.main-header .menu-box>.menu-content>.menu-item.navigations>.active-line')
      topHeight += liHeight * active + liHeight / 2 - 5
      line.css({ top: topHeight })
    },
    // Menu box show finished
    afterMenuBoxEnter () {
      this.isMenuContentShow = true
    },
    // Menu box hide finished
    beforeMenuBoxLeave () {
      this.isMenuContentShow = false
    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        this.navActiveInit()
      }, 0)
    })
  }
}
</script>

<style lang="less" scoped>
  @import '../../styles/index.less';
  
  .header-nav-width(0);
  .main-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  	background-color: fadeout(@theme-black, 100%);
    padding-top: (@header-height-default - @header-logo-height) / 2;
    padding-bottom: (@header-height-default - @header-logo-height) / 2;
    z-index: @header-index;
  	.row {
  	  justify-content: space-between;
  	  .col {
  	  	&.logo {
          height: @header-logo-height;
          flex-grow: 2;
  	  	  .img {
            display: inline-block;
            height: @header-logo-height;
            img {
              height: 100%;
            }
          }
  	  	}
  	  	&.nav {
          height: @header-logo-height;
          line-height: @header-logo-height;
          flex-grow: 1;
          position: relative;
  	  	  .custom-menu {
            height: 100%;
            ul {
              height: 100%;
              position: relative;
              white-space: nowrap;
              .active-border {
                display: none;
                position: absolute;
                height: 1px;
                top: @header-logo-height;
                background-color: @nav-color;
                transition: left .3s ease;
              }
            }
            ul li {
              padding: 0px @nav-li-padding;
              &.active a {
                border-bottom: 1px solid @nav-color;
              }
              a {
                font-family: Letter Gothic Std;
                text-align: center;
                color: @nav-color;
                letter-spacing: @letter-spacing-default;
                text-indent: @letter-spacing-default;
                font-size: @text-size + 16;
                font-weight: 100;
                display: inline-block;
                height: @header-logo-height;
                text-transform: capitalize;
              }
            }
          }
          .menu-toggle {
            position: absolute;
            z-index: @menu-toggle-btn;
            right: 0;
          }
  	  	}
  	  }
  	}
    .menu-box {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: @theme-black;
      z-index: @menu-box;
      text-align: center;
      padding-top: @header-height-default;
      > .menu-content {
        >.menu-item {
          margin-bottom: @margin-default;
        }
        > .navigations {
          position: relative;
          > ul {
            display: inline-block;
            background-color: @theme-black;
            padding-left: @padding-default;
            padding-right: @padding-default;
          }
          > ul > li {
            padding-top: (@text-size + 16) / 2 / 2;
            padding-bottom: (@text-size + 16) / 2 / 2;
            > a {
              display: block;
              color: @nav-color;
              font-size: @text-size + 16;
              letter-spacing: @letter-spacing-default;
              text-indent: @letter-spacing-default;
              font-family: Letter Gothic Std;
              font-weight: 100;
              text-transform: uppercase;
              transition: all .3s ease-out;
              &:hover, &.active {
                color: @theme-pink;
                transition: all .3s ease-in;
                letter-spacing: 6px;
              }
            }
          }
          > .active-line {
            display: inline-block;
            width: @menu-active-line-width;
            height: 1px;
            position: absolute;
            background-color: @nav-color;
            top: (@text-size + 16) / 2;
            left: 50%;
            transform: translateX(-50%);
            z-index: -1;
            transition: top .3s ease;
          }
        }
        > .divide {
          width: @menu-divide-width;
          height: 1px;
          margin-left: 50%;
          transform: translateX(-50%);
          background-color: darken(@nav-color, 20%);
          position: relative;
          text-align: center;
          > .square {
            display: inline-block;
            position: absolute;
            height: @text-size;
            width: @text-size;
            top: -(@text-size / 2);
            left: @menu-divide-width / 2 - (sqrt((@text-size * @text-size) + (@text-size * @text-size)) / 2) + @letter-spacing-default;
            background-color: darken(@nav-color, 20%);
            transform: rotate(45deg);
          }
        }
        > .follow-social {
          > ul {
            justify-content: center;
            > li {
              padding: 4px 10px;
              > a {
                cursor: pointer;
                color: @theme-pink;
                transition: all .3s ease-out;
                font-size: @text-size + 6;
                &:hover {
                  color: darken(@theme-pink, 5%);
                  transition: all .3s ease-in;
                }
              }
            } 
          }
        }
        > .copyright {
          font-family: Letter Gothic Std;
          color: darken(@nav-color, 50%);
          font-size: @text-size - 2;
        }
      } 
    }
  }

</style>
