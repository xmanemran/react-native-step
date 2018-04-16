import React, {Component} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';

import Step from './Step'

export default class App extends Component {
	render() {
		return (
			<View style={styles.root}>
				<Step items={['Order', 'Delivered', 'Paid', 'Order']} currentStep={2}/>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	root: {
		margin: 20
	}
});