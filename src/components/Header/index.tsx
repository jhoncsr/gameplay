import React, {ReactNode} from "react";
import { View } from "react-native";
import {LinearGradient}from 'expo-linear-gradient';
import { theme } from "../../global/styles/theme";
import {BorderlessButton} from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons';

type Props = {
    title: string;
    action?: ReactNode;
} 
{/* 25:04 comment*/}
export function Header({title, action}: Props){
    const { secondary100, secondary40, heading}= theme.colors
    return(

        <LinearGradient
        colors={[secondary100,secondary40]}>
            <BorderlessButton>
                <Feather
                name='arrow-left'
                size={24}
                color={heading} 
                />
            </BorderlessButton>

        </LinearGradient>
    )
}