import React, { useState } from 'react';
import { StyleSheet, View, Image, SafeAreaView, TouchableHighlight, TextInput, Text, ScrollView } from 'react-native';
import colors from '../config/colors';

function HomePage(props) {

    const [Search, setSearch] = useState('');

    return (
        <SafeAreaView style={styles.PageContainer}>
            <ScrollView>
                <View style={styles.LogoWrapper}>
                    <Image resizeMode='cover' style={styles.logo} source={require('../assets/logo.png')} />
                </View>
                <View style={styles.searchWrapper}>
                    <TextInput value={Search} onChangeText={setSearch} style={styles.input} />
                    <TouchableHighlight style={styles.searchBtn}>
                        <Image style={styles.SearchImg} source={require('../assets/search.png')} />
                    </TouchableHighlight>                
                </View>
                <Image style={styles.BannerImg} source={require('../assets/homeBanner.png')} />            
                <View style={styles.Container}>
                    <Text style={styles.TrendingHeading}>Trending</Text>
                    <View style={styles.Card}>
                        <Image style={styles.CardImg} source={require('../assets/moviePoster.png')} />
                        <View style={styles.CardText}>
                            <View style={styles.CardTitle}>
                                <Text style={styles.MovieTitle}>Fight Club</Text>
                                <View style={styles.Review}>
                                    <Image style={styles.StarImg} source={require('../assets/homeStar.png')} />
                                    <Text style={styles.RatingText}>4.6 / 5</Text>
                                </View>
                            </View>
                            <View style={styles.CardPlay}>
                                <Image style={styles.PlayImg} source={require('../assets/homePlay.png')} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.Card}>
                        <Image style={styles.CardImg} source={require('../assets/moviePoster.png')} />
                        <View style={styles.CardText}>
                            <View style={styles.CardTitle}>
                                <Text style={styles.MovieTitle}>Fight Club</Text>
                                <View style={styles.Review}>
                                    <Image style={styles.StarImg} source={require('../assets/homeStar.png')} />
                                    <Text style={styles.RatingText}>4.6 / 5</Text>
                                </View>
                            </View>
                            <View style={styles.CardPlay}>
                                <Image style={styles.PlayImg} source={require('../assets/homePlay.png')} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.Card}>
                        <Image style={styles.CardImg} source={require('../assets/moviePoster.png')} />
                        <View style={styles.CardText}>
                            <View style={styles.CardTitle}>
                                <Text style={styles.MovieTitle}>Fight Club</Text>
                                <View style={styles.Review}>
                                    <Image style={styles.StarImg} source={require('../assets/homeStar.png')} />
                                    <Text style={styles.RatingText}>4.6 / 5</Text>
                                </View>
                            </View>
                            <View style={styles.CardPlay}>
                                <Image style={styles.PlayImg} source={require('../assets/homePlay.png')} />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>        
    );
}

const styles = StyleSheet.create({
    PageContainer: {    
      backgroundColor: colors.BlueOne,    
      display: 'flex',
      paddingTop: 20,
    },
    LogoWrapper: {
        alignItems: 'center',
    },  
    logo: {
        width: 200,
        height: 50,
        resizeMode: 'cover',
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: colors.WhiteThree,
        margin: 12,
    },
    input: {
        flexGrow: 1,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        backgroundColor: colors.BlueTwo,
        paddingVertical: 6,
        paddingHorizontal: 8,    
        color: '#fff',
    },
    searchBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: '#f96',
        color: '#fff',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    BannerImg: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    TrendingHeading: {
        fontSize: 18,
        fontWeight: '500',
        color: colors.WhiteOne,
        lineHeight: 27,
        paddingTop: 32,
        paddingBottom: 24,
    },
    Container: {
        paddingHorizontal: 12,
        backgroundColor: '#0C111B',
    },
    Card: {
        marginBottom: 28,
    },  
    CardImg: {
        width: '100%',        
    },
    CardText: {
        backgroundColor: colors.BlueThree,
        paddingVertical: 12,
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    MovieTitle: {
        fontWeight: '500',
        fontSize: 16,
        color: colors.WhiteOne,
        paddingBottom: 3,
    },
    Review: {
        flexDirection: 'row',
        alignItems: 'center',
    },  
    StarImg: {
        width: 15,
        height: 15,
        resizeMode: 'cover',
        marginRight: 4,
    },
    RatingText: {
        fontWeight: '400',
        fontSize: 14,
        color: colors.WhiteFour,
    },
    PlayImg: {
        width: 32,
        height: 32,
    }
});

export default HomePage;