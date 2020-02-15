// pages/home/home.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'Elaine',
    age:18,
    students: [
      { id:'001', name:'young', age:200 },
      { id: '002', name: 'young', age: 200 },
      { id: '003', name: 'young', age: 200 },
      { id: '004', name: 'young', age: 200 }
    ],
    counter:0
  },

/**
 * 监听页面+按钮
 */
handleBtnClick(){
  //1错误做法，页面不会自动更新，但数值实际会改变
  //this.data.counter +=1
  //console.log(this.data.counter)
  
  //2.正确做法
  this.setData({
    counter: this.date.counter+1
    })
  
},

  /**
   * 监听页面-按钮
   */
  handleBtnClick() {
    //1错误做法，页面不会自动更新，但数值实际会改变
    //this.data.counter +=1
    //console.log(this.data.counter)

    //2.正确做法
    this.setData({
      counter: this.date.counter - 1
    })

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

  }
})