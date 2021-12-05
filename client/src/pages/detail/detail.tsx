import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { Component } from 'react'
import "./detail.scss";

interface DetailPropsType {}
interface DetailStateType {
  current: number;
}

export default class Detail extends Component<
  DetailPropsType,
  DetailStateType
> {
  constructor(props: DetailPropsType) {
    super(props);
    this.state = {
      current: 0
    };
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="detail">
        <Text>详情</Text>
      </View>
    );
  }
}
