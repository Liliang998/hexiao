// login.js
Page({
  data: {
    phone: '',
    password: ''
  },
  
  onPhoneInput(e) {
    this.setData({ phone: e.detail.value });
  },
  
  onPasswordInput(e) {
    this.setData({ password: e.detail.value });
  },


  

  onLogin() {
    const { phone, password } = this.data;
    if (!phone || !password) {
      wx.showToast({ title: '请填写完整信息', icon: 'none' });
      return;
    }

    // 验证手机号长度
    if (phone.length !== 11) {
      wx.showToast({
        title: '手机号必须为11位',
        icon: 'none'
      });
      return;
    }

     // 验证密码长度
     if (password.length < 6 || password.length > 18) {
      wx.showToast({
        title: '密码长度必须在6到18位之间',
        icon: 'none'
      });
      return;
    }
    
    // 如果验证通过，继续处理登录逻辑

    wx.request({
      url: '/pages/main/main',
      method: 'GET',
      data: { phone, password },
      success(res) {
        if (res.data.success) {
          wx.showToast({ title: '您已登录成功', icon: 'success' });
          wx.navigateTo({ url: '/pages/main/main' });
        } else {
          wx.showToast({ title: res.data.message || '登录失败', icon: 'none' });
        }
      },
      fail(err) {
        console.error('网络请求失败', err);
        wx.showToast({ title: '网络请求失败，请稍后再试', icon: 'none' });
      }
    });
  }
  
});
