import Vue from 'vue'
import filtes from '../filters/index.js'

// Third party plugins
import 'babel-polyfill'
import 'font-awesome/css/font-awesome.min.css'

// custom filter
Object.keys(filtes).forEach(function (key, index, arr) {
  Vue.filter(key, filtes[key])
})

Vue.config.productionTip = false
