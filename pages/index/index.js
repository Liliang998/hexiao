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
    
    // 输入验证
    if (!this.validatePhone(phone)) {
      wx.showToast({ title: '手机号格式不正确', icon: 'none' });
      return;
    }
    if (!this.validatePassword(password)) {
      wx.showToast({ title: '密码格式不正确', icon: 'none' });
      return;
    }
    
    // 预设值（实际应用中应从服务器获取）
    const presetPhone = '17878027201'; 
    const presetPassword = 'lilili';
    
    if (phone === presetPhone && password === presetPassword) {
      wx.showToast({ title: '登录成功', icon: 'success' });
      console.log('登录成功，尝试跳转到主页面');
      wx.navigateTo({
        url: '/pages/main/main',
        success: function(res) {
          console.log('跳转成功', res);
        },
        fail: function(err) {
          console.error('跳转失败', err);
          // 如果跳转失败，尝试使用redirectTo
          wx.redirectTo({
            url: '/pages/order/order',
            success: function(res) {
              console.log('重定向成功', res);
            },
            fail: function(err) {
              console.error('重定向失败', err);
            }
          });
        }
      });
    } else {
      wx.showToast({ title: '手机号或密码错误', icon: 'none' });
    }
  },
  
  validatePhone(phone) {
    // 简单的手机号验证
    const phoneRegex = /^1[3-9]\d{9}$/;
    return phoneRegex.test(phone);
  },
  
  validatePassword(password) {
    // 简单的密码验证，至少6位
    return password.length >= 6;
  }
});