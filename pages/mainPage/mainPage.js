// pages/mainPage/mainPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userType:"学生",
      levelType:"菜鸟"

      

      

  },

  /*跳转到约球界面*/
  goToGamePage(){
      wx.navigateTo({
        url: '/pages/gamePage/gamePage',
      })
  },

  /*跳转到比赛界面*/
  goToMatchPage(){
      wx.navigateTo({
          url: '/pages/matchPage/matchPage',
      })
  },

  /*跳转到社区界面*/
  goToCommunityPage(){
    wx.navigateTo({
        url: '/pages/Community/Community',
    })
    },
  /*跳转到排行界面*/
    goToRankPage(){
        wx.navigateTo({
            url: '/pages/rank/rank',
        })
    },

  /*跳转到个人信息界面*/
  goToProfile(){
    wx.navigateTo({
        url: '/pages/myInfo/myInfo',
    })
    },
    goToMessage(){
        wx.navigateTo({
            url: '/pages/Message/Message',
        })
    },
    
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})