import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from './styles';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect'
import { Profile } from '../../components/profile'
import { ListHeader } from '../../components/ListHeader'
import { Appointment } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';

export function Home() {
    const [category, setCategory] = useState('');
    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendarios',
                icon: null,
                owner: true,
            },
            category: '1',
            date: '22/06 as 20:40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '2',
                name: 'Lendarios',
                icon: null,
                owner: true,
            },
            category: '1',
            date: '22/06 as 20:40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }
    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />

            </View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect} 
                    />
                <View style={styles.content}>
                    <ListHeader
                        title="Partidas Agendadas"
                        subtitle="Total 6"
                    />
                    <FlatList
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Appointment data={item} />

                        )}
                        ItemSeparatorComponent={() => <ListDivider/>}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                    />

            </View>
        </Background>
    )

}