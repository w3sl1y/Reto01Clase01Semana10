import React from 'react';
import { View, StatusBar, StyleSheet, FlatList, Image, Text} from 'react-native';
import faker from 'faker';

faker.seed(50);

const DATA = [...Array(2).keys()].map((_, i) => {
    return {
        key: faker.datatype.uuid(),
        image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
            'men',
        ])}/${faker.datatype.number(90)}.jpg`,
        name: faker.name.findName(),
        jobTitle: faker.name.jobTitle(),
    };
});

const EmployeeList3 = () => {
    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <FlatList
            data={DATA}
            keyExtractor={item => item.key}
            contentContainerStyle={styles.flatList}
            renderItem={({item, index}) => {
                return(
                    <View style={styles.containerEmployeeList}>
                        <Image source={{uri: item.image}} style={styles.imageEmployee} />
                        <View>
                            <Text style= {styles.name}>News Design - for 2018</Text>
                            <Text style= {styles.jobTitle}>{item.jobTitle}</Text>
                        </View>
                    </View>
                )
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 0.33,
        backgroundColor: '#fff'
    },
    containerEmployeeList:{
        backgroundColor: 'rgba(255,255,255, 0.8)',
        flexDirection: 'row',
        padding: 15,
        marginBottom: 20,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset:{
            width: 2,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 20,
        backgroundColor: '#fec5bb'
    },
    flatList:{
        padding: 20,
        paddingTop: StatusBar.currentHeight || 42,
    },
    imageEmployee:{
        width: 60,
        height: 60,
        borderRadius: 20,
        marginRight: 20,
    },
    name:{
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
    },
    jobTitle:{
        fontSize: 16,
        opacity: 0.7,
        color: '#212529',
    },
})

export default EmployeeList3;