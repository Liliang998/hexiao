// utils.js - 这里可以存放一些公共函数

// 发送请求的函数
function request(url, method = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: method,
      data: data,
      success: (res) => resolve(res.data),
      fail: (err) => reject(err),
    });
  });
}

module.exports = {
  request
};
