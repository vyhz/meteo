import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Home} from "./Home/Home";
import {ImageBackground} from "react-native";
import backgroundImg from "./assets/background.png"
import {s} from "./App.style"


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


