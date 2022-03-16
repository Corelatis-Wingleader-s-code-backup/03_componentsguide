import React from 'react';
import './App.css';
//使用枚举的方式来表示组件所处的状态
const ExampleA = Symbol('Example 1')
const ExampleB = Symbol('Example 2')
/**
 * 类式组件 
 * 使用ES6 class语法声明和定义的一种组件
 * 1）需要继承 React.Component
 * 2）有构造函数
 * 3) 有状态管理机制
 * => 如果一个组件 不仅要做内容的展示，还需要对用户的交互进行处理（状态管理）
 * 适合定义成类式组件
 */
class App extends React.Component {
  constructor(props) {
    //class的constructor中，super一定要最先被调用 
    super(props);
    //组件的状态 其实是一个名为state的对象 
    //React使用state对象中保存的数据来表示组件的状态
    this.state = { page: ExampleA }
  }
  // 1) 组件第一次被页面加载的时候 框架会调用render函数
  // 2) 组件的状态发生了改变（state对象中的内容发生了改变）
  // 的时候，框架会调用render函数
  // 3) 永远不要在render()函数中修改组件的状态
 render() { 
    console.log('App::render()');
    console.log(this.state.page);
    if (this.state.page === ExampleA) {
      return (
        <div className='App'>
          <h1>Example 1</h1>
          <button id='buttonA' onClick={this.onButtonAClicked}>show Example 2</button>
        </div>
      )
    } else {
      return (
        <div className='App'>
          <h1>Example 2</h1>
          <button id='buttonB'onClick={this.onButtonBClicked.bind(this)}>show Example 1</button>
        </div>
      )
    }
  }

  // ★ 官方推荐使用箭头函数的形式
  //当button A被点击，修改组件的状态
  onButtonAClicked = () => {
    //使用React框架提供的API修改状态
    this.setState({ page: ExampleB });
    //使用React框架做开发的时候，永远都不要写出这种代码
    //this.state.page = ExampleA (X)
  }

  onButtonBClicked() {
    this.setState({ page: ExampleA });
  }
}

export default App;
/**
 * 1)可以通过对组件状态的控制，来控制组件的渲染逻辑
 */

/**
 * react项目可以使用
 * npm run build 命令 进行编译
 * 编译生成的压缩之后的js、css等文件 
 * 显著的缩小产生的文件的体积 并提高项目启动的速度
 * 
 * npm i serve -g （全局安装 serve）★推荐全局安装
 * 或 使用 --save-dev （仅安装在当前项目下）
 * 
 * 使用serve启动编译好的网站： serve -s build 
 * 按ctrl+c停止服务器
 */