// pages/myRoomPage/myRoomPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      /*房间信息*/
      roomInfo: [
        {
          roomName:"日常练习",
          gameDate:"2022-6-17 13:00~15:00",
          gameAddress:"嘉定校区体育馆乒乓球房",
          currentNum:2,
          totalNum:4
        },
        {
          roomName:"乒乓球社活动",
          gameDate:"2022-6-21 08:00~10:00",
          gameAddress:"四平校区体育馆乒乓球房",
          currentNum:3,
          totalNum:5
        },
        {
          roomName:"华山论剑",
          gameDate:"2022-6-23 17:00~19:00",
          gameAddress:"嘉定校区体育馆乒乓球房",
          currentNum:3,
          totalNum:3
        },
        {
          roomName:"决战紫禁之巅",
          gameDate:"2022-6-27 17:00~19:00",
          gameAddress:"嘉定校区体育馆乒乓球房",
          currentNum:4,
          totalNum:4
        }
      ]
  },
  /*返回主界面*/
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