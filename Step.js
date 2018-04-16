import React, {Component} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';


export default class Step extends Component {
	constructor(props){
		super(props);
	}
	
	render() {
		return (
			<View style={styles.container}>
				<View style={[styles.row]}>
					{this.stepRender()}
				</View>
				<View style={[styles.row]}>
					{this.textRender()}
				</View>
			</View>
		);
	}
	
	
	textRender(){
		const {items, currentStep} = this.props;
		return items.map((item, key)=>{
			return (
				<Text style={[styles.flex, styles.textContainer, key == currentStep ? styles.textCurrent : styles.text]}>{item}</Text>
			)
		})
	}
	
	stepRender(){
		const {items, currentStep} = this.props;
		let steps = [];
		for (let i = 0; i < items.length; i++){
			let step = [];

			// start Line render and empty line render when index 0;
			if(i === 0)
				step.push(this.stepItemEmptyElement(i));
			else
				step.push(this.stepItemLineElement(i <= currentStep));
			
			// circle render
			if(i < currentStep)
				step.push(this.stepItemCircleElement('done'));
			if(i == currentStep)
				step.push(this.stepItemCircleElement('current'));
			if(i > currentStep)
				step.push(this.stepItemCircleElement());
			
			// empty line render on last element end Line render
			if(i === items.length -1)
				step.push(this.stepItemEmptyElement(i));
			else
				step.push(this.stepItemLineElement(i < currentStep));

			// push elements as one step
			
			console.log(step)
			steps.push(this.stepContainer(step));
		}
		return steps;
	}
	
	
	stepContainer(component){
		return (
			<View style={[styles.flex, styles.stepContainer]}>
				{component}
			</View>
		)
	}
	
	stepItemEmptyElement(key){
		return <View style={styles.flex} key={key}></View>
	}
	
	stepItemCircleElement(status){
		let statusStyle;
		switch(status){
			case 'done':
				statusStyle = styles.circleDone;
				break;
			case 'current':
				statusStyle = styles.circleCurrent;
				break;
			default:
				statusStyle = styles.circleUndone;
		}
		return <View style={statusStyle}></View>
	}
	
	stepItemLineElement(isDone){
		let lineStyle = isDone ? styles.lineDone : styles.lineUndone;
		return <View style={[styles.flex, lineStyle]}></View>
	}
	
}

const styles = StyleSheet.create({
	container: {
		height: 70,
		backgroundColor: '#caffd6',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	},
	
	flex: {
		flex: 1
	},
	row: {
		flexDirection: 'row',
	},
	stepContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	circleUndone: {
		width: 16,
		height: 16,
		backgroundColor: '#CCCCCC',
		borderRadius: 10
	},
	circleCurrent: {
		width: 16,
		height: 16,
		borderColor: '#49A0D5',
		backgroundColor: '#FFF',
		borderWidth: 4,
		borderRadius: 10
	},
	circleDone: {
		width: 16,
		height: 16,
		backgroundColor: '#49A0D5',
		borderRadius: 8
	},
	lineUndone:{
		backgroundColor: '#CCCCCC',
		height: 1.5,
		justifyContent: 'center'
	},
	lineDone:{
		backgroundColor: '#49A0D5',
		height: 1.5,
		justifyContent: 'center'
	},
	text: {
		color: '#454553',
		opacity: 0.32,
		fontSize: 14,
		fontWeight: '600',
		textAlign: 'center'
	},
	textCurrent: {
		color: '#454553',
		fontSize: 14,
		fontWeight: '600',
		textAlign: 'center'
	},
	textContainer: {
		marginTop: 5,
	}
});
