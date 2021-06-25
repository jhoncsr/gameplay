import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';
import IllustrationImg from '../../assets/SignIn/illustration.png';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon'

import { useNavigation } from '@react-navigation/native';




export function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Home');
    }

    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <Image
                source={IllustrationImg}
                style={styles.image}
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {`\n`}
                    e organize suas {`\n`}
                    Jogatinas
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar com seus games {`\n`}
                    favoritos com seus amigos

                </Text>
                <ButtonIcon
                    title="Entrar com Discord"
                    activeOpacity={0.7} 
                    onPress={handleSignIn}/>
            </View>
        </View>

    )
}
