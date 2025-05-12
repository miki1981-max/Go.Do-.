import { useEffect, useRef } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

const size = Dimensions.get('window');
const sizeWidth = size.width;

export default function SplashScreen() {
    const scrollRef = useRef<any>(null)
    useEffect(() => {
        setTimeout(() => {
            scrollRef.current.scrollTo({
                x : sizeWidth,
                animated : true
            })
        }, 1000)
        setTimeout(() => {
            scrollRef.current.scrollTo({
                x : sizeWidth * 2,
                animated : true
            })
        }, 2000)
        setTimeout(() => {
            scrollRef.current.scrollTo({
                x : sizeWidth * 3,
                animated : true
            })
        }, 3000)
        setTimeout(() => {
            scrollRef.current.scrollTo({
                x : sizeWidth * 4,
                animated : true
            })
        }, 4000)
        setTimeout(() => {
            scrollRef.current.scrollTo({
                x : sizeWidth * 5,
                animated : true
            })
        }, 5000)
    },[])

    return (
        <View style={styles.global}>
            <Text style={styles.textGo}>Go.</Text>
            <ScrollView ref={scrollRef} style={styles.scrollC} scrollEnabled={false} horizontal={true} contentContainerStyle={styles.scrollCont}>
            <Text style={styles.textPlay}>Play</Text>
            <Text style={styles.textSee}>See</Text>
            <Text style={styles.textHear}>Hear</Text>
            <Text style={styles.textLive}>Live</Text>
            <Text style={styles.textDo}>Do.</Text>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    global: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'yellow',
        width: '100%',
        height: '100%',
        justifyContent: "flex-start",
        alignItems: "center",

        zIndex: 99
    },
    textGo: {
        fontSize: 150,
        fontWeight:700,
        marginTop : '30%',
    },
    scrollC :{
        marginTop : '25%',
       display : 'flex',
       
       width : '100%',
       height : 180,
       maxHeight : 180
    },
    scrollCont : {
        display: 'flex',
        flexDirection : 'row',
        alignItems : 'flex-start'
    },
    textPlay:{
        fontSize: 150,
        fontWeight:700,
        color:"green",
        width :sizeWidth,
        textAlign  :'center',
    },
    textSee:{
        fontSize: 150,
        fontWeight:700,
        color:"red",
        width :sizeWidth,
        textAlign  :'center',
    },
    textHear:{
        fontSize: 150,
        fontWeight:700,
        color:"purple",
        width :sizeWidth,
        textAlign  :'center',
    },

    textLive:{
        fontSize: 150,
        fontWeight:700,
        color:"blue",
        width :sizeWidth,
        textAlign  :'center',
    },
    textDo:{
        fontSize: 150,
        fontWeight:700,
        color:"black",
        width :sizeWidth,
        textAlign  :'center',
        
    },

});
