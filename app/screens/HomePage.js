import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, TouchableHighlight, TextInput, Text } from 'react-native';
import colors from '../config/colors';

function HomePage(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image resizeMode='cover' style={styles.logo} source={require('../assets/logo.png')} />
            </View>
            <View style={styles.searchWrapper}>
                <TextInput value='Search Movies' style={styles.input} />
                <TouchableHighlight style={styles.searchBtn}>
                    <Text style={styles.searchBtnTxt}>Search</Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>        
    );
}

const styles = StyleSheet.create({
    container: {    
      backgroundColor: colors.blueColor,    
      flex: 1,
      alignItems: 'center',  
      justifyContent: 'flex-start',
      padding: '5%',
    },
    logo: {
        width: 200,
        height: 50,
        resizeMode: 'cover',
    },
    searchWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ffffff42',
    },
    input: {
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        flexBasis: '50%',
        backgroundColor: '#ffffff0f',
        paddingVertical: 10,
        paddingHorizontal: 8,    
        color: '#fff',
    },
    searchBtn: {
        paddingRight: 15,
        paddingVertical: 10,
        paddingLeft: 13,
        backgroundColor: '#f96',
        color: '#fff',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    searchBtnTxt: {
        color: '#fff',
        fontWeight: 'bold',
    }
});

export default HomePage;