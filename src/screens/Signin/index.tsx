import React, { useState } from 'react';
import { 
    Text,
    View,
    Image,
} from 'react-native';
import IllustrationImg from '../../assets/SignIn/illustration.png';
import {styles} from './styles';

export function SignIn() {
    const [text, setText] = useState('');
        return (
            <View style= {styles.container}>
                <Image 
                source={IllustrationImg}
                style = {styles.image}
                />
            <View style = {styles.content}>
                <Text style={styles.title}>
                    Organize {`\n`}
                    suas Jogatinas{`\n`}
                    Facilmente
                </Text>
            </View>
            </View>

        )
}
