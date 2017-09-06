<template lang="html">
  <section class="section home-third-section">
    <div class="bg-square-left-a"></div>
    <div class="bg-square-left-b"></div>
    <div class="wrapper-container">
      <div class="row">
        <div class="col-lg-6 left-text">
          <div class="text-box">
            <h4>HTML 5</h4>
            <h5>Markup language used for <br />structuring</h5>
            <p>HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and current version of the HTML standard.</p>
          </div>
        </div>
        <div class="col-lg-6 right-img">
          <div class="img-box">
            <img src="../../assets/img/14570828119302_illu-cours_html5-css3.png" alt="html5">
          </div>
        </div>
        <div class="col-lg-12 clearfix control-btn">
          <span class="pull-left prev" @click="prev"><i class="fa fa-angle-left"></i> PREV</span>
          <span class="pull-left next" @click="next">NEXT <i class="fa fa-angle-right"></i></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'home-third-section',
  data () {
    return {
      carousel: [
        { id: '001', title: 'html 5', img: '../../assets/img/carousel_third/html_5.png', subTitle: 'Markup language used for <br />structuring', description: 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and current version of the HTML standard.' }
      ]
    }
  },
  methods: {
    prev () {
      window.alert('prev... 别点了, 还没做完呢')
    },
    next () {
      window.alert('next... 别点了, 还没做完呢')
    }
  },
  mounted () {}
}
</script>

<style lang="less" scoped>
  @import '../../styles/index.less';

  @bg-square-left-a-size: 2000px;
  @bg-square-left-a-bg: #ddd;
  @bg-square-left-b-size: 600px;
  @bg-square-left-b-bg: @theme-blue-dark;
  @control-btn-size: 74px;
  .home-third-section {
    position: absolute;
    font-size: @text-size;
    .bg-square-left-a {
      width: @bg-square-left-a-size;
      height: @bg-square-left-a-size;
      background-color: @bg-square-left-a-bg;
      position: absolute;
      top: -50%;
      right: -90%;
      transform: rotate3d(0, 0, .5, 45deg);
      z-index: -2;
    }
    .bg-square-left-b {
      width: @bg-square-left-b-size;
      height: @bg-square-left-b-size;
      background-color: @bg-square-left-b-bg;
      position: absolute;
      top: @section-height - sqrt(@bg-square-left-b-size * @bg-square-left-b-size / 2) + (sqrt(@bg-square-left-b-size * @bg-square-left-b-size * 2) - @bg-square-left-b-size) / 2;
      right: -20%;
      transform: rotate3d(0, 0, .5, 45deg);
      z-index: -1;
    }
    > .wrapper-container > .row {
      > .left-text {
        > .text-box {
          margin-top: 55%;
          transform: translateY(-50%);
          > h4 {
            font-size: 4.2em;
            padding-bottom: @padding-default;
            text-transform: uppercase;
          }
          > h5 {
            font-size: 2.8em;
            padding-bottom: @padding-default;
          }
          > p {
            font-size: 2.2em;
            line-height: 2em;
          }
        }
      }
      > .right-img {
        > .img-box {
          height: @section-height / 2;
          margin-top: (@section-height - (@section-height / 2)) / 2;
          > img {
            height: 100%;
          }
        }
      }
      > .control-btn {
        margin-top: -@control-btn-size;
        > span {
          font-family: Letter Gothic Std;
          font-size: 2.14em;
          letter-spacing: .4em;
          color: #ababab;
          border: 1px solid #ddd;
          padding-left: @padding-default * 10;
          padding-right: @padding-default * 10;
          cursor: pointer;
          text-transform: uppercase;
          height: @control-btn-size;
          line-height: @control-btn-size;
        }
        > .prev {

        }
        > .next {

        }
      }
    }
  }
</style>
