const app = getApp()

Page({

  data: {
    swiper: [{
      url: "",
      imgUrl: ""
    }, {
      url: "",
      imgUrl: ""
    }, {
      url: "",
      imgUrl: ""
    }]
  },

  nav: function(e) {
    console.log(e)
    wx.navigateTo({
      url: '../web-view/index',
    })
  },

  onLoad: function() {

  },

  onPullDownRefresh: function() {
    // wx.showNavigationBarLoading();
  }


})