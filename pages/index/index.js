// pages/index/index.js
var app = new getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    firstImg:'../../img/first-white.png',
    secondImg:'../../img/second-gray.png',
    nowTab:1,
    playlist:{},
    banners:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo
    })
    //console.log(this.data.userInfo)
    wx.request({
      /*user/playlist 用户播放列表*/
      url: app.globalData.url +"user/playlist",
      data:{
        uid:app.globalData.userInfo.account.id
      },
      success:(res)=>{
        console.log(res)
        if(res.data.code==200){
          this.setData({
            playlist:res.data.playlist
          })
        }else{
          wx.showModal({
            title: '获取歌单失败',
            showCancel:false
          })
        }
      }
    })
    wx.request({
      url: app.globalData.url +"banner",
      success:(res)=>{
        if(res.data.code==200){
          console.log(res)
          this.setData({
            banners:res.data.banners
          })
        }else{
          wx.showModal({
            title: '获取轮播图失败',
            showCancel: false
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  toMy:function(){
    this.setData({
      firstImg: '../../img/first-white.png',
      secondImg: '../../img/second-gray.png',
      nowTab:1
    })
  },
  toDaliy:function(){
    this.setData({
      firstImg: '../../img/first-gray.png',
      secondImg: '../../img/second-white.png',
      nowTab:2
    })
  },
  toPlayList(e) {
    wx.setStorage({
      key: 'listid',
      data: e.currentTarget.dataset.id,
      success: res => {
        console.log(res)
        wx.navigateTo({
          url: '../playList/playList'
        })
      }
    })
  },
})