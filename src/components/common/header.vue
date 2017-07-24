<template>
  <header class="clearfix main-header">
  	<div class="wrapper-container">
  		<div class="pull-left logo">
	    	<div class="img">
	    		<img src="../../assets/logo_white.png" alt="NiceJe" />
	    	</div>
	    </div> <!-- /.logo -->
	    <div class="pull-right clearfix nav">
	    	<div class="pull-left custom-menu">
	    		<ul class="clearfix">
	    			<li v-for="item in nav" class="pull-left"><a :href="item.uri">{{ item.name }}</a></li>
	    		</ul>
	    	</div> <!-- /.custom-menu -->
	    	<div class="pull-right menu-toggle">
	    		<span class="line"></span>
	    		<span class="line"></span>
	    		<span class="line"></span>
	    	</div>
	    </div> <!-- /.nav -->
  	</div> <!-- /.wrapper-container -->
  </header> <!-- /.main-header -->
</template>

<script>
export default {
  name: 'main-header',
  data () {
    return {
      nav: [
        { name: 'Home', uri: '' },
        { name: 'About', uri: '' },
        { name: 'Blogs', uri: '' },
        { name: 'Contact', uri: '' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../styles/index.less';

  .main-header {
  	background-color: @theme-black;
  }
  .menu-toggle {
  	text-align: right;
  	.line {
  	  margin-bottom: @toggle-btn-space;
  	  display: block;
  	  background-color: black;
  	  height: @toggle-btn-height;
  	  width: @toggle-btn-width;
  	}
  	.line:nth-child(2) {
  	  width: @toggle-btn-width / 3 * 2;
  	  margin-left: @toggle-btn-width / 3 * 1;
  	}
  	.line:last-child {
  	  margin-bottom: 0;
  	  width: @toggle-btn-width / 3 * 1;
  	  margin-left: @toggle-btn-width / 3 * 2;
  	}
  }
</style>
