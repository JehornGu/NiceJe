<template lang="html">
  <section class="section home-second-section">
    <div class="title-divide">
      <div class="wrapper-container">
        <h2 class="title">ABOUT FRONT END</h2>
      </div>
      <p class="border"></p>
    </div>
    <div class="wrapper-container">
      <div class="row">
        <div class="col-lg-6 img-box">
          <div class="img-bg"></div>
          <img src="../../assets/img/web_development.png" alt="Front - end" />
        </div>
        <div class="col-lg-6 description">
          <h3>
            <strong><i>Front</i> - end</strong> <i>web</i> <br /> <i>development</i>
          </h3>
          <p class="desc">The objective of designing a site is to ensure that when the users open up the site they see the information in a format that is easy to read and relevant.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'home-second-section'
}
</script>

<style lang="less" scoped>
  @import '../../styles/index.less';

  .home-second-section {
    font-size: @text-size;
    font-family: Consolas;
    > .title-divide {
      background-color: @theme-pink;
      padding: 94px 0;
      .title {
        font-family: Letter Gothic Std;
        font-size: 2.14em;
        color: #fff;
        line-height: auto;
      }
      .border {
        border-bottom: 1px solid #fff;
        margin-left: @document-padding + 5.7;
        margin-top: 5px;
      }
    }
    > .wrapper-container > .row {
      > .img-box {
        position: relative;
        > .img-bg {
          background-color: @theme-black;
          width: @section-height / 2.2;
          height: @section-height / 2.2;
          margin-top: 40%;
          transform: translateY(-50%);
          margin-left: 35%;
        }
        > img {
          width: 80%;
          position: absolute;
          top: 60%;
          transform: translateY(-50%);
        }
      }
      > .description {
        h3 {
          font-size: 5.71em;
          letter-spacing: .25em;
          margin-left: -62%;
          margin-top: 30%;
          transform: translateY(-50%);
          i {
            font-style: normal;
          }
          > strong {
            font-size: 1.3em;
            > i:first-child {
              color: #fff;
            }
          }
          > i:last-child {
            margin-left: @section-height / 2.2;
          }
        }
        > .desc {
          font-size: 2em;
          margin-top: -7%;
          margin-left: -8%;
          line-height: 2em;
        }
      }
    }
  }
</style>
