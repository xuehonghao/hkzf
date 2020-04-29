import React, { Component } from "react";
import { Flex, WingBlank, WhiteSpace, NavBar, Toast } from "antd-mobile";

import { Link } from "react-router-dom";

import styles from "./index.module.css";

import { login } from "../../utils/api/user";

import { setToken } from "../../utils/currentCity";

// 验证规则：
// const REG_UNAME = /^[a-zA-Z_\d]{5,8}$/
// const REG_PWD = /^[a-zA-Z_\d]{5,12}$/

class Login extends Component {
  state = {
    username: "", // 用户名
    password: "", // 密码
  };
  // 登录
  handlerLogin = async (e) => {
    // 阻止默认表单事件--刷新页面
    e.preventDefault();
    const { username, password } = this.state;
    const res = await login(username, password);
    console.log(res);
    const { status, data, description } = res;
    if (status === 200) {
      // 把token存到本地
      setToken(data.token);
      Toast.success(description, 2);
    } else {
      Toast.fail(description);
    }
  };

  render() {
    return (
      <div className={styles.root}>
        {/* 顶部导航 */}
        <NavBar mode="light">账号登录</NavBar>
        <WhiteSpace size="xl" />

        {/* 登录表单 */}
        <WingBlank>
          <form>
            <div className={styles.formItem}>
              <input
                className={styles.input}
                name="username"
                placeholder="请输入账号"
                value={this.state.username}
                onChange={(e) => {
                  this.setState({ username: e.target.value });
                }}
              />
            </div>
            {/* 长度为5到8位，只能出现数字、字母、下划线 */}
            {/* <div className={styles.error}>账号为必填项</div> */}
            <div className={styles.formItem}>
              <input
                className={styles.input}
                name="password"
                type="password"
                placeholder="请输入密码"
                value={this.state.password}
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
              />
            </div>
            {/* 长度为5到12位，只能出现数字、字母、下划线 */}
            {/* <div className={styles.error}>账号为必填项</div> */}
            <div className={styles.formSubmit}>
              <button
                className={styles.submit}
                type="submit"
                onClick={this.handlerLogin}
              >
                登 录
              </button>
            </div>
          </form>
          <Flex className={styles.backHome}>
            <Flex.Item>
              <Link to="/registe">还没有账号，去注册~</Link>
            </Flex.Item>
          </Flex>
        </WingBlank>
      </div>
    );
  }
}

export default Login;
