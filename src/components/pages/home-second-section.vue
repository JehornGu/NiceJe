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
          <img src="../../assets/img/web_development.png" alt="Front - end" />
        </div>
        <div class="col-lg-6 description">
          <h3>
            <strong>Front - end</strong> web <br /> development
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

<style lang="less">
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
        > img {
          width: 100%;
        }
      }
      > .description {

      }
    }
  }
</style>
