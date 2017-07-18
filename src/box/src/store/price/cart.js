import * as axios from 'axios'
import api_config from '~api/api_config'


// 该模块的初始状态
const state = {
  iPhone6S: {
    name: 'Apple/苹果 iPhone 6S',
    desc: '3D Touch、1200万像素照片、4k视频，强大功能于一身。',
    price: '5288 - 6888',
    isSelected: true,
    style: {
      '银色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
      '深空灰色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png',
      '金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png',
      '玫瑰金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png'
    },
    activeStyleUrl: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
    storage: {
      '16GB': 5288,
      '64GB': 6088,
      '128GB': 6888
    }
  },
  cart: []
}

// 相关的 mutations
const mutations = {
  ['CHANGE_STYLE'] (state, payload) {
    state.iPhone6S.activeStyle = payload.styleName
    state.iPhone6S.activeStyleUrl = payload.styleUrl
  },
  ['CHANGE_PRICE'] (state, payload) {
    state.iPhone6S.activeStorage = payload.storage
    state.iPhone6S.price = payload.price
    state.iPhone6S.isSelected = false
  },
  ['ADD_ITEM'] (state) {
    const activeStyle = state.iPhone6S.activeStyle === undefined ? '银色' : state.iPhone6S.activeStyle
    const type = activeStyle + '，' +  state.iPhone6S.activeStorage
    const cartInfo = {
      type: type,
      count: 1,
      price: state.iPhone6S.price
    }
    state.cart.push(cartInfo)
  },
  ['REMOVE_ITEM'] (state, index) {
    state.cart.splice(index,1)
  }
}

export default {
  state,
  mutations
}