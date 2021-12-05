import Taro from "@tarojs/taro";
import { Component } from 'react'
import { View, Text } from "@tarojs/components";
import Login from '../../components/login/index.weapp'

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



  getTestData = () => {
    Taro.cloud
      .callFunction({
        name: "getTestData",
        data: {}
      })
      .then(res => {
        console.log('res----', res.result)
        this.setState({
          testData: res.result?.data
        })
      })
  }


  render() {
    const { testData } = this.state;
    return (
      <View className="home">
        <Text>首页</Text>
        <Login />
        <Text onClick={() => this.getTestData()}>点击获取云数据库数据</Text>
        <View>{JSON.stringify(testData)}</View>
      </View>
    );
  }
}


export default Home