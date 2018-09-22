// pages/jinshuju/dormitory/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //https://xxxy.xietan.xin/tp51/public/xcx_xswz/Jinshuju/queryDor?name=%E9%A9%AC%E6%96%87%E9%9F%AC

    result: {
      time: 0,
      msg: '没有查询到结果，请确认所填信息正确',
      data: []
    },

    hidden: 0,
    name: ''

  },

  input: function(e) {
    name = e.detail.value
  },

  search: function() {
    let that = this

    if (typeof(name) == 'undefined' || name == '') {

      wx.showToast({
        title: '请填写姓名！',
        icon: 'none'
      })

      return
    }

    wx.showLoading({
      title: '正在查询...',
    })

    wx.request({
      url: 'https://xxxy.xietan.xin/tp51/public/xcx_xswz/Jinshuju/queryDor',
      method: 'GET',
      data: {
        name: name
      },
      success: function(res) {

        console.log(res.data)
        that.setData({
          result: res.data,
          hidden: 1
        })


      },
      complete: function() {
        wx.hideLoading()
      }

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})