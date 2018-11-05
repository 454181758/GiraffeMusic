// pages/playList/playList.js
var app=new getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playList:{},
    privileges:{},
    songs:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'listid',
      success: (res)=>{
        console.log(res);
            wx.request({
              url: app.globalData.url + 'playlist/detail',
              data: {
                id: res.data
              },
              success: (res) => {
                console.log(res);
                this.setData({
                  playList: res.data.playlist,
                  privileges: res.data.privileges
                })

                this.getSongDetail();
              }        
        })
      },
    })
  },


  getSongDetail(){
    var ids1 = ''
    for (var i = 0; i < this.data.privileges.length; i++) {
      if (i == this.data.privileges.length-1){
        ids1 += this.data.privileges[i].id
      }else{
        ids1 += this.data.privileges[i].id + ","
      }
    }
    wx.request({
      url: app.globalData.url + 'song/detail',
      data: {
        ids: ids1
      },
      success: (res) => {
        console.log(res);
        this.setData({
          songs:res.data.songs
        })
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
  toAudio(e){
    wx.setStorage({
      key: 'songId',
      data: e.currentTarget.dataset.id,
      success:(res)=>{
        wx.navigateTo({
          url: '../audio/audio',
        })
      }
    })
  }

})