export default {
  pages: [
    "pages/home/home",
    "pages/classify/classify",
    "pages/vip/vip",
    "pages/study/study",
    "pages/me/me",
    "pages/search/search",
    "pages/detail/detail",
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '小程序名称',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#9e9e9e",
    selectedColor: "#fa8919",
    borderStyle: "white",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "pages/home/home",
        iconPath: "./assets/icons/home.png",
        selectedIconPath: "./assets/icons/home-active.png",
        text: "首页"
      },
      {
        pagePath: "pages/classify/classify",
        iconPath: "./assets/icons/classify.png",
        selectedIconPath: "./assets/icons/classify-active.png",
        text: "分类"
      },
      {
        pagePath: "pages/vip/vip",
        iconPath: "./assets/icons/vip.png",
        selectedIconPath: "./assets/icons/vip-active.png",
        text: "会员"
      },
      {
        pagePath: "pages/study/study",
        iconPath: "./assets/icons/study.png",
        selectedIconPath: "./assets/icons/study-active.png",
        text: "学习"
      },
      {
        pagePath: "pages/me/me",
        iconPath: "./assets/icons/me.png",
        selectedIconPath: "./assets/icons/me-active.png",
        text: "我的"
      }
    ]
  },
  cloud: true
}
