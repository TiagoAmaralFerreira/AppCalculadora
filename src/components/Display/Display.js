import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './Styles'



export default props => {
    return (
        <View style={styles.display}>
            <Text style={styles.displayValue} numberOfLines={1}>{props.value}</Text>
        </View>
    )
}