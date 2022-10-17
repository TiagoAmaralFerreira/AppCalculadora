import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './Styles'



export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.operation) stylesButton.push(styles.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label) }>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}