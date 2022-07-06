// pages/askForGamesPage/askForGames.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      /*房间信息*/
      roomInfo: [
          {
              roomName:"软工人房间",
              gameDate:"2022-6-15 13:00~15:00",
              gameAddress:"嘉定校区体育馆乒乓球房",
              currentNum:1,
              totalNum:4
          },
          {
              roomName:"新手求带",
              gameDate:"2022-6-15 17:00~19:00",
              gameAddress:"嘉定校区体育馆乒乓球房",
              currentNum:1,
              totalNum:2
          },
          {
              roomName:"无敌暴龙战神",
              gameDate:"2022-6-21 17:00~19:00",
              gameAddress:"嘉定校区体育馆乒乓球房",
              currentNum:1,
              totalNum:8
          }
      ],

      selectData:[
          "选择校区",
          "选择日期",
          "选择地点"
      ],

      /*校区信息*/
      campusInfo:[
          "嘉定校区",
          "四平校区",
          "沪西校区",
          "沪北校区"
      ],

      /*地点信息*/
      addressInfo:[
          "嘉定校区乒乓球房",
          "四平校区乒乓球房",
          "沪西校区乒乓球房",
          "沪北校区乒乓球房"
      ]

      
  },

  bindPickerChange(e){
      this.setData({
          index: e.detail.value
      })
  },

  /*返回主界面*/
  goBackToLastPage(){
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