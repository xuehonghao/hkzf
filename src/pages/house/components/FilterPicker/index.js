import React, { Component } from "react";

import { PickerView } from "antd-mobile";

import FilterFooter from "../../../../components/FilterFooter";

export default class FilterPicker extends Component {
  state = {
    value: "",
  };
  render() {
    const { onCancel, onOk, data, col } = this.props;

    return (
      <>
        {/* 选择器组件： */}
        <PickerView
          data={data}
          value={this.state.value}
          cols={col}
          onChange={(val) => {
            this.setState({
              value: val,
            });
          }}
        />

        {/* 底部按钮 */}
        <FilterFooter
          onCancel={onCancel}
          onOk={() => {
            onOk(this.state.value);
          }}
        />
      </>
    );
  }
}
