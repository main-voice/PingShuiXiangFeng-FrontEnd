// pages/matchHallPage/matchHallPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*比赛信息*/
    matchInfo: [
      {
          matchName:"软件学院师生友谊赛",
          matchDate:"2022-6-23 17:00~19:00",
          matchAddress:"嘉定校区体育馆乒乓球房",
          currentNum:30,
          totalNum:30
      },
      {
        matchName:"嘉定校区乒乓球秋季赛初赛",
        matchDate:"2022-6-28 08:00~10:00",
        matchAddress:"嘉定校区体育馆乒乓球房",
        currentNum:34,
        totalNum:100
      },
      {
        matchName:"19号楼年度冠军杯",
        matchDate:"2022-6-30 19:00~21:00",
        matchAddress:"嘉定校区体育馆乒乓球房",
        currentNum:20,
        totalNum:20
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