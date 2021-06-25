import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

import {ButtonAdd} from '../../components/ButtonAdd';
import {CategorySelect} from '../../components/CategorySelect'
import {Profile} from '../../components/profile' 


export function Home() {
    return (
        <View>
            <View style={styles.header}>
            <Profile/>
            <ButtonAdd/>

            </View>
        <View>
            <CategorySelect categorySelected={'1'}/>
        </View>
        </View>
    )

}