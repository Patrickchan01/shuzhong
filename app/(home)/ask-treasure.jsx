import {ImageBackground} from "react-native";
import homeIcons from "../../constants/homeIcons";


const AskTreasure = () => {

    return(
        <ImageBackground
            source={homeIcons.bg}
            className="w-full h-full"
        >

        </ImageBackground>
    )
}

export  default AskTreasure;
