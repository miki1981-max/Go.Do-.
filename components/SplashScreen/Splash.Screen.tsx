import { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

const size = Dimensions.get('window');
const sizeWidth = size.width;
const initialTop = size.height * 0.15;
const goWidth = 220;
const initialLeft = (sizeWidth - goWidth) / 2;

export default function SplashScreen() {
    const scrollRef = useRef<any>(null);
    const [isOpen, setIsOpen] = useState(false);

    // animation Do.
    const opacity = useRef(new Animated.Value(1)).current;
    // animation Bg
    const background = useRef(new Animated.Value(0)).current;

    const interpolatedBackroud = background.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgba(255,255,0,1)', 'rgba(255,255,0,0)']
    })
    // animation Go
    const top = useRef(new Animated.Value(initialTop)).current;
    const left = useRef(new Animated.Value(initialLeft)).current;
    const fontSizeGo = useRef(new Animated.Value(150)).current;







    useEffect(() => {
        setTimeout(() => {
            scrollRef.current?.scrollTo({
                x: sizeWidth,
                animated: true
            })
        }, 1000)
        setTimeout(() => {
            scrollRef.current?.scrollTo({
                x: sizeWidth * 2,
                animated: true
            })
        }, 2000)
        setTimeout(() => {
            scrollRef.current?.scrollTo({
                x: sizeWidth * 3,
                animated: true
            })
        }, 3000)
        setTimeout(() => {
            scrollRef.current?.scrollTo({
                x: sizeWidth * 4,
                animated: true
            })
        }, 4000)
        setTimeout(() => {
            scrollRef.current?.scrollTo({
                x: sizeWidth * 5,
                animated: true
            })
        }, 5000)
        setTimeout(() => {
            // setIsOpen(true)
            // Animated.sequence([]).start()
            // Animated.sequence([]).start()
            //  Animated.sequence([]).start()
            Animated.parallel([
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true
                }),
                Animated.timing(background, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: false
                }),
                Animated.timing(top, {
                    toValue: 18,
                    duration: 300,
                    useNativeDriver: false
                }),
                Animated.timing(fontSizeGo, {
                    toValue: 36,
                    duration: 300,
                    useNativeDriver: false
                }),
                Animated.timing(left, {
                    toValue: 16,
                    duration: 300,
                    useNativeDriver: false
                }),
            ]).start()
        }, 5200)
        setTimeout(() => {
            setIsOpen(true)
        },5500)
    }, [])

    // if (isOpen) return null;
    return (<>
        <Animated.Text style={[styles.textGo, { top, fontSize: fontSizeGo, left }]}>Go.</Animated.Text>
        <Animated.View style={[styles.global, { backgroundColor: interpolatedBackroud, display : isOpen ? 'none' : 'flex' }]}>
            <Text style={styles.textGo2}>Go.</Text>
            <ScrollView ref={scrollRef} style={styles.scrollC} scrollEnabled={false} horizontal={true} contentContainerStyle={styles.scrollCont}>
                <Text style={styles.textPlay}>Play</Text>
                <Text style={styles.textSee}>See</Text>
                <Text style={styles.textHear}>Hear</Text>
                <Text style={styles.textLive}>Live</Text>
                <Animated.Text style={[styles.textDo, { opacity }]}>Do.</Animated.Text>
            </ScrollView>
        </Animated.View>
    </>
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
        // fontSize: 150,
        fontWeight: 700,
        position: 'absolute',
        zIndex: 999

        // top : '15%',
    },
    textGo2: {
        fontSize: 150,
        fontWeight: 700,
        marginTop: '30%',
        color: 'rgba(0,0,0,0)'
    },
    scrollC: {
        marginTop: '25%',
        display: 'flex',

        width: '100%',
        height: 180,
        maxHeight: 180
    },
    scrollCont: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    textPlay: {
        fontSize: 150,
        fontWeight: 700,
        color: "green",
        width: sizeWidth,
        textAlign: 'center',
    },
    textSee: {
        fontSize: 150,
        fontWeight: 700,
        color: "red",
        width: sizeWidth,
        textAlign: 'center',
    },
    textHear: {
        fontSize: 150,
        fontWeight: 700,
        color: "purple",
        width: sizeWidth,
        textAlign: 'center',
    },

    textLive: {
        fontSize: 150,
        fontWeight: 700,
        color: "blue",
        width: sizeWidth,
        textAlign: 'center',
    },
    textDo: {
        fontSize: 150,
        fontWeight: 700,
        color: "black",
        width: sizeWidth,
        textAlign: 'center',
        // position: 'absolute'

    },

});
