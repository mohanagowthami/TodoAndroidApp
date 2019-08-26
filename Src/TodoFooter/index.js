import BottomNavigation, {
    FullTab
} from 'react-native-material-bottom-navigation'
import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
export default class TodoFooter extends Component {
    tabs = [
        {
            key: 'all',
            icon: 'list',
            label: 'All',
            barColor: '#388E3C',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'active',
            icon: 'lock_open',
            label: 'Active',
            barColor: '#B71C1C',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'completed',
            icon: 'check_circle',
            label: 'completed',
            barColor: '#E64A19',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        }
    ]

    renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color="white" name={icon} />
    )

    renderTab = ({ tab, isActive }) => (
        <FullTab
            isActive={isActive}
            key={tab.key}
            label={tab.label}
            renderIcon={this.renderIcon(tab.icon)}
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