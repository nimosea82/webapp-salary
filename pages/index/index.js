//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    strQuestion: '蒜苗成长记',
    strAnswer: '今天我种了蒜苗，这是我第一次种，觉的非常开心。过了几天，蒜苗一点点的长出了嫩芽，就像小朋友一样慢慢的成长。之后的每天，我给蒜苗浇水，蒜苗一天一个样子，慢慢的长大了许多，我用尺子量了量它的叶子，量完我大吃一惊，叶子已经有七厘米长了，我把这个惊天的消息告诉了妈妈，妈妈的嘴角扬了许多，微笑地说：“已经可以吃了。”我开心极了。我戴上手套，把它们一个个挖了出来，递给了妈妈，妈妈用它做出了很多的菜，非常丰盛。吃完了饭，我明白了一个道理，只要努力做事，一定会有回报.'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  bindSalaryInfo:function(){
    wx.navigateTo({
      url: '../flextest/flextest',
    })
  }


})
