import React, { Component } from "react";
import { observer } from "mobx-react";
import { Text, View } from "react-native";

@observer
class FetchStatus extends Component {
  renderDisplay = () => {
    if (this.props.status === 100) {
      console.log(" in fetch status");
      return <Text>loading</Text>;
    } else {
      console.log(" error in fetch status", this.props.error);
      return <Text>{this.props.error}</Text>;
    }
  };

  render() {
    return <View>{this.renderDisplay()}</View>;
  }
}
export default FetchStatus;
