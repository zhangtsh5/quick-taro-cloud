import Taro, { Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { Component } from 'react'

import "./index.scss";

interface templateProps {}

interface templateStateType {}

export default class Template extends Component<
  templateProps,
  templateStateType
> {
  constructor(props: templateProps) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "模版"
  };

  render() {
    return <View className="index">模版</View>;
  }
}
