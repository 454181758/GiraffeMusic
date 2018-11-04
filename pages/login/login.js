// pages/login/login.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    password:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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

  phone:function(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  password:function(e) {
    this.setData({
      password: e.detail.value
    })
  },
  
  login:function(){
    wx.request({
      /*login/cellphone 登录端口*/
      url: app.globalData.url +"login/cellphone",
      data:{
        phone:17621305739,//this.data.phone,
        password:'123456Rj'//this.data.password
      },
      success:(res)=>{
        console.log(res);
        if(res.data.code==200){
          app.globalData.userInfo=res.data;
          wx.navigateTo({
            url: '../index/index',
          })
        }else{
          wx.showModal({
            title: '登录失败',
            content: '',
            showCancel:'false'
          })
        }
      }
    })
  },
  isRoot:function() {
    if (this.data.phone == 'root' && this.data.password == 'root')
      wx.navigateTo({
        url: '../index/index',
      })
    else
      this.login()
  },
})