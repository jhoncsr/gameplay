import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { Avatar } from '../avatar'

export function Profile() {

    return (
        <View style={styles.container}>
            <Avatar urlImage="https://github.com/jhoncsr.png"/>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Ola,
                    </Text>

                    <Text style={styles.username}>
                        Jhonata
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitória.
                </Text>
            </View>

        </View>


    )

}
