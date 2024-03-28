import {Text, View} from "react-native";
import {s} from "./Home.style";
import {MeteoApi} from "../api/MeteoAPI";
import {useEffect, useState} from "react";
import {getCurrentPositionAsync, requestForegroundPermissionsAsync} from "expo-location";

export function Home({}){
    const [weather , setWeather] = useState()

    const [coords, setCoords] = useState();
    useEffect(() => {
        getUserCoords();
    }, []);
    async function getUserCoords(){
        let {status} = await requestForegroundPermissionsAsync();
        if(status == "granted") {
            const location = await getCurrentPositionAsync();
            setCoords({
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            });
        }else {
            setCoords({lat: "50,58", lng: "3,06"});
        }
    }
    console.log(coords)

    async function fetchWeather(coodinates){
        const weatherResponse = await MeteoApi.fetchWeatherfromCoords(
            coodinates
        );
        setWeather(weatherResponse);
    }

    useEffect(() => {
        if(coords){
            fetchWeather(coords)
        }
    }, [coords]);


    return(
        <>
            <View style={s.meteo_basic}>
                <Text style={{ fontSize: 60, color: "white"}}>
                    La météo basique
                </Text>
            </View>
            <View style={s.searchbar_container}>
                <Text style={{ fontSize: 60, color: "white"}}>
                    Barre de recherche
                </Text>
            </View>
            <View style={s.meteo_advanced}>
                <Text style={{ fontSize: 60, color: "white"}}>
                    La météo avancée
                </Text>
            </View>
        </>
    );
}