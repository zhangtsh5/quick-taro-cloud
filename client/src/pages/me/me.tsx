import Taro, { Config } from "@tarojs/taro";
import { View} from "@tarojs/components";
import { Component } from 'react'
import "./me.scss";

interface StateType {
  userInfo: any;
  loginId: string;
  needApplyInfo: boolean;
}

interface PropsType {}

export default class Me extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      userInfo: {},
      loginId: "1234567",
      needApplyInfo: false
    };
  }

  componentWillMount() {}

  componentDidMount() {
    const userInfo = Taro.getStorageSync("userInfo");
    if (userInfo) {
      this.setState({
        userInfo: userInfo
      });
    } else {
      this.setState({ needApplyInfo: true });
    }
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}


  render() {
    return (
      <View className="me">
        我的
      </View>
    );
  }
}
