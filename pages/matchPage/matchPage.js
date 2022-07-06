// pages/matchPage/matchPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /*返回主界面*/
  goBackToMainPage(){
    wx.navigateTo({
        url: '/pages/mainPage/mainPage'
    })  
  },

  /*前往“比赛大厅”界面*/
  goToMatchHallPage(){
    wx.navigateTo({
        url: '/pages/matchHallPage/matchHallPage'
    })  
  },

  /*前往“我的比赛”界面*/
  goToMyMatchPage(){
    wx.navigateTo({
        url: '/pages/myMatchPage/myMatchPage'
    })  
  },

  /*前往“发布比赛”界面*/
  goToCreateMatch(){
    wx.navigateTo({
        url: '/pages/createMatch/createMatch'
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