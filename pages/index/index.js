const app = getApp()

Page({

  data: {
    url: []
  },

  nav: function(e) {
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../web-view/index?link=' + e.currentTarget.id,
    })
  },

  more: function() {
    wx.navigateTo({
      url: '../swpier/index',
    })
  },

  toDor: function(e) {
    console.log(e)
    wx.navigateTo({
      url: '../jinshuju/dormitory/index',
    })
  },

  onLoad: function() {
    var that = this
    wx.request({
      url: 'https://xxxy.xietan.xin/tp51/public/xcx_xswz/Api/getUrlConfig',
      success: function(e) {
        that.setData({
          url: e.data
        })
      }
    })
  },

  onPullDownRefresh: function() {
    var that = this
    wx.request({
      url: 'https://xxxy.xietan.xin/tp51/public/xcx_xswz/Api/getUrlConfig',
      success: function(e) {
        wx.hideNavigationBarLoading()
        wx.stopPullDownRefresh()
        that.setData({
          url: e.data
        })

      },
      complete: function() {
        wx.stopPullDownRefresh()
        wx.hideNavigationBarLoading();
      }
    })

  },

  onShareAppMessage: function() {
    return {
      title: '西安财经学院 信息学院 新生微站', // 转发标题（默认：当前小程序名称）
      path: '/pages/index/index', // 转发路径（当前页面 path ），必须是以 / 开头的完整路径
      success(e) {
        // shareAppMessage: ok,
        // shareTickets 数组，每一项是一个 shareTicket ，对应一个转发对象
        // 需要在页面onLoad()事件中实现接口
        wx.showShareMenu({
          // 要求小程序返回分享目标信息
          withShareTicket: true
        });
      },
      fail(e) {
        // shareAppMessage:fail cancel
        // shareAppMessage:fail(detail message) 
      },
      complete() {}
    }
  }

})