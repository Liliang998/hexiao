Page({
  navigateToOrders: function() {
    wx.navigateTo({
      url: '/pages/order/order', // 确保 order 页面存在
    });
  }
});