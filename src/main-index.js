// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './Index'
import Header from './components/common/header.vue'
import Footer from './components/common/footer.vue'

// common config
import './js/common.js'

/* eslint-disable no-new */
// body
new Vue({
  render: h => h(App)
}).$mount('#appBody')

/* eslint-disable no-new */
// header
new Vue({
  render: h => h(Header)
}).$mount('#appHeader')

/* eslint-disable no-new */
// footer
new Vue({
  render: h => h(Footer)
}).$mount('#appFooter')
