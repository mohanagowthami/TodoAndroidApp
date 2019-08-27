import BottomNavigation, {
    FullTab
} from 'react-native-material-bottom-navigation'
import React, { Component } from 'react';
import { Text, TextInput, View, Button, Image, TouchableHighlight } from 'react-native';

// import Ionicons from 'react-native-vector-icons/Ionicons';
//import { Icon } from 'react-native-elements'

export default class TodoFooter extends Component {
    tabs = [
        {
            key: 'games',
            icon: 'gamepad-variant',
            label: 'All',
            barColor: '#388E3C',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            uri: require('./assets/list.png')

        },
        {
            key: 'movies-tv',
            icon: 'movie',
            label: 'Active',
            barColor: '#B71C1C',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            uri: require('./assets/open_lock.png')
        },
        {
            key: 'music',
            icon: 'music-note',
            label: 'Completed',
            barColor: '#E64A19',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            uri: require('./assets/check_circle.png')
        }
    ]
    onStateUpdate = (label) => {
        console.log("label", label);
        this.props.onStateUpdate(label)

    }

    renderIcon = (uri, label) => ({ isActive }) => (
        // <Icon size={24} color="white" name={icon} />
        // <Image source={{ uri: uri }}
        //     style={{ width: 400, height: 400 }} />
        <TouchableHighlight onPress={this.onStateUpdate(label)}>
            <Image source={uri} style={{ width: 20, height: 20 }} />
        </TouchableHighlight>
    )

    renderTab = ({ tab, isActive }) => (
        <FullTab
            isActive={isActive}
            key={tab.key}
            label={tab.label}
            renderIcon={this.renderIcon(tab.uri, tab.label)}
        />
    )

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {/* Your screen contents depending on current tab. */}
                </View>
                <BottomNavigation
                    onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                    renderTab={this.renderTab}
                    tabs={this.tabs}
                />
            </View>
        )
    }
}
