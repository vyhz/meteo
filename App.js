import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Home} from "./Home/Home";
import {ImageBackground} from "react-native";
import backgroundImg from "./assets/background.png"
import {s} from "./App.style"
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from "expo-location";
import {useEffect, useState} from "react";

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

export default function App() {
  return (
      <ImageBackground
        source={backgroundImg}
        style={s.img_background}
        imageStyle={s.img}
      >
         <SafeAreaProvider>
             <SafeAreaView>
                 <Home/>
             </SafeAreaView>
         </SafeAreaProvider>
      </ImageBackground>
  );
}


