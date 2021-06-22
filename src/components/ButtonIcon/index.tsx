import React from 'react'
import {
    Text,
    Image,
    TouchableOpacity,
    TouchableOpacityProps,
    View
} from 'react-native'

import DiscordImg from '../../assets/SignIn/discord.png';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
    title: string;
}

export function ButtonIcon({ title, ...rest }) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>

    )
}