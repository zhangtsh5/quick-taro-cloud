import Taro from "@tarojs/taro";
import { Component } from 'react'
import { View, Text } from "@tarojs/components";
import Login from '../../components/login/index.weapp'
import { request } from '../../utils/request'
import "./home.scss";

interface HomePropsType {}
interface HomeStateType {
  testData: any;
}

class Home extends Component<HomePropsType, HomeStateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      testData: []
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  testRequest = async () => {
    const res = await request('getTestData', {})
    if (res) {
      this.setState({
        testData: res.data
      })
    }
  }


  render() {
    const { testData } = this.state;
    return (
      <View className="home">
        <Text>首页</Text>
        <Login />
        <View>{JSON.stringify(testData)}</View>
        <View onClick={this.testRequest}>测试封装请求</View>
      </View>
    );
  }
}


export default Home