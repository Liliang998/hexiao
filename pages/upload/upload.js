// upload.js
Page({
  data: {
    images: [],
    file: null,
    text: '',
    description: '',
    imageUrl: '',
    filePath: ''
  },

  onInputDescription(e) {
    this.setData({
      description: e.detail.value
    });
  },

  chooseImage() {
    wx.chooseImage({
      success: res => {
        this.setData({
          imageUrl: res.tempFilePaths[0]
        });
      }
    });
  },

  chooseFile() {
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success: (res) => {
        this.setData({ file: res.tempFiles[0] });
      }
    });
  },

  onTextInput(e) {
    this.setData({ text: e.detail.value });
  },

  uploadFile() {
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success: res => {
        this.setData({
          filePath: res.tempFiles[0].path
        });
      }
    });
  },

  upload() {
    wx.uploadFile({
      url: 'your_api_url',  // 上传接口
      filePath: this.data.images[0],  // 或 file
      name: 'file',
      formData: {
        text: this.data.text
      },
      success(res) {
        wx.showToast({ title: '上传成功', icon: 'success' });
      }
    });
    wx.navigateTo({
      url: '/pages/main/main'
    });
  }
});
