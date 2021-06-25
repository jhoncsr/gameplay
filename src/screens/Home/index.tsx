import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

import {Profile} from '../../components/profile' 


export function Home() {
    return (
        <View>
            <View style={styles.header}>
            <Profile/>

            </View>
        </View>
    )

}