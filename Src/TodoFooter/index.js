import BottomNavigation, {
  FullTab
} from "react-native-material-bottom-navigation";
import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  Button,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback
} from "react-native";
import styles from "./style";

// import Ionicons from 'react-native-vector-icons/Ionicons';
//import { Icon } from 'react-native-elements'

export default class TodoFooter extends Component {
  tabs = [
    {
      key: "games",
      icon: "gamepad-variant",
      label: "all",
      barColor: "#388E3C",
      pressColor: "rgba(255, 255, 255, 0.16)",
      uri: require("./assets/list.png")
    },
    {
      key: "movies-tv",
      icon: "movie",
      label: "active",
      barColor: "#B71C1C",
      pressColor: "rgba(255, 255, 255, 0.16)",
      uri: require("./assets/open_lock.png")
    },
    {
      key: "music",
      icon: "music-note",
      label: "completed",
      barColor: "#E64A19",
      pressColor: "rgba(255, 255, 255, 0.16)",
      uri: require("./assets/check_circle.png")
    }
  ];
  onStateUpdate = label => {
    console.log("label", label);
    this.props.onStateUpdate(label);
  };

  renderIcon = (uri, label) => ({ isActive }) => (
    // <Icon size={24} color="white" name={icon} />
    // <Image source={{ uri: uri }}
    //     style={{ width: 400, height: 400 }} />
    <TouchableWithoutFeedback
      onPress={() => {
        this.onStateUpdate(label);
      }}
      hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
    >
      <Image source={uri} style={{ width: 32, height: 32 }} />
    </TouchableWithoutFeedback>
  );

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.uri, tab.label)}
    />
  );

  render() {
    return (
      <BottomNavigation
        onTabPress={newTab => this.setState({ activeTab: newTab.key })}
        renderTab={this.renderTab}
        tabs={this.tabs}
      />
    );
  }
}
