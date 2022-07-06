// pages/myMatchPage/myMatchPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      matchInfo: [
      {
          matchName:"班赛",
          matchDate:"2022-6-17 13:00~15:00",
          matchAddress:"嘉定校区体育馆乒乓球房",
          currentNum:24,
          totalNum:30
      },
      {
          matchName:"决战西北三",
          matchDate:"2022-6-21 08:00~10:00",
          matchAddress:"四平校区体育馆乒乓球房",
          currentNum:16,
          totalNum:20
      },
      {
          matchName:"软件学院师生友谊赛",
          matchDate:"2022-6-23 17:00~19:00",
          matchAddress:"嘉定校区体育馆乒乓球房",
          currentNum:30,
          totalNum:30
      },
      {
          matchName:"嘉定校区师生友谊赛",
          matchDate:"2022-6-27 17:00~19:00",
          matchAddress:"嘉定校区体育馆乒乓球房",
          currentNum:10,
          totalNum:10
      }
    ]
  },
  

  /*返回比赛界面*/
  goBackToMainPage(){
    wx.navigateTo({
      url: '/pages/mainPage/mainPage',
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