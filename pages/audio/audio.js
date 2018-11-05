// pages/audio/audio.js
var app=new getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    song:{},
    statusImg: '../../img/play.png',
    songUrl:'',
    innerAudioContext:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'songId',
      success: (res)=>{
        console.log(res);
        wx.request({
          url: app.globalData.url +'song/detail',
          data:{
            ids:res.data
          },
          success:(res)=>{
            console.log(res);
            this.setData({
              song:res.data.songs[0]
            });
            wx.request({
              url: app.globalData.url +'song/url',
              data:{
                id:this.data.song.id
              },
              success:(res)=>{
                console.log(res);
                this.setData({
                  songUrl:res.data.data[0].url
                });
                this.createAudio()
              }
            })

          }
        })
      },
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
    this.stopAudio()
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
  createAudio(){
    this.data.innerAudioContext=wx.createInnerAudioContext();
    this.data.innerAudioContext.autoplay=true;
    this.data.innerAudioContext.src=this.data.songUrl;
    this.data.innerAudioContext.onPlay(()=>{
      console.log('开始播放')
    })
    this.data.innerAudioContext.onError((res)=>{
      console.log(res.errMsg)
      console.log(res.Code)
    })
  },
  stopAudio(){
    if (this.data.innerAudioContext) {
      this.data.innerAudioContext.stop()
    }
  }
})