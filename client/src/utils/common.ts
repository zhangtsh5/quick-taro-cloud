import Taro from '@tarojs/taro';

export const getUserInfo = () => {
    Taro.getUserInfo({
      success: (res) => {
        Taro.setStorageSync('userInfo', res.userInfo);
        Taro.setStorageSync('loginId', Date.now.toString().split('').reverse().join(''))
      },
    });
  }

export const isObj = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Object]';
  }
