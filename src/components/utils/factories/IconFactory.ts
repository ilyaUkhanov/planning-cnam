import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome5Pro from "react-native-vector-icons/FontAwesome5Pro";
import Fontisto from "react-native-vector-icons/Fontisto";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Zocial from "react-native-vector-icons/Zocial";
import { ICON_FAMILIES } from "./factoryTypes";

class IconFactory {
    create = (familyType: ICON_FAMILIES | string) => {
        switch (familyType) {
            case ICON_FAMILIES.ANT_DESIGN:
                return AntDesign;
            case ICON_FAMILIES.ENTYPO:
                return Entypo;
            case ICON_FAMILIES.EVIL_ICONS:
                return EvilIcons;
            case ICON_FAMILIES.FEATHER:
                return Feather;
            case ICON_FAMILIES.FONT_AWESOME:
                return FontAwesome;
            case ICON_FAMILIES.FONT_AWESOME_5:
                return FontAwesome5;
            case ICON_FAMILIES.FONT_AWESOME_5_PRO:
                return FontAwesome5Pro;
            case ICON_FAMILIES.FONTISTO:
                return Fontisto;
            case ICON_FAMILIES.FOUNDATION:
                return Foundation;
            case ICON_FAMILIES.IONICONS:
                return Ionicons;
            case ICON_FAMILIES.MATERIAL_COMMUNITY_ICONS:
                return MaterialCommunityIcons;
            case ICON_FAMILIES.MATERIAL_ICONS:
                return MaterialIcons;
            case ICON_FAMILIES.OCTICONS:
                return Octicons;
            case ICON_FAMILIES.SIMPLE_LINE_ICONS:
                return SimpleLineIcons;
            case ICON_FAMILIES.ZOCIAL:
                return Zocial;
            default:
                return MaterialCommunityIcons;
        }
    };
}

export default IconFactory;
