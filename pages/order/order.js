// order.js
Page({
  data: {
    orders: [
      { id: 1, title: '订单1', redeemed: true },
      { id: 2, title: '订单2', redeemed: false },
      { id: 3, title: '订单3', redeemed: false },
      { id: 4, title: '订单4', redeemed: true }
      // 更多订单...
    ],
    
    showRedeemedOrders: true,
    showNotRedeemedOrders: true
  },

  onLoad: function () {
    this.splitOrders();
  },

onRedeemOrder(e) {
    const orderId = e.currentTarget.dataset.id; // 获取订单 ID
    // 在这里添加核销逻辑，比如调用后端 API 更新订单状态
    console.log(`核销订单 ID: ${orderId}`);
    // 更新本地数据状态，例如从 notRedeemedOrders 数组中移除该订单
    // 或者更新订单的状态为已核销
  },

  splitOrders: function () {
    const redeemedOrders = this.data.orders.filter(order => order.redeemed);
    const notRedeemedOrders = this.data.orders.filter(order => !order.redeemed);
    this.setData({
      redeemedOrders,
      notRedeemedOrders
    });
  },

  showRedeemed: function () {
    this.setData({
      showRedeemedOrders: true,
      showNotRedeemedOrders: false
    });
  },

  showNotRedeemed: function () {
    this.setData({
      showRedeemedOrders: false,
      showNotRedeemedOrders: true
    });
  }
});