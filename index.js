import React from "react";
// StyleSheet important
import { Text } from "react-native";

import {
  FontAwesome,
  AntDesign,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  Fontisto,
  Feather,
  Foundation,
  Entypo,
  EvilIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";

const FONTAWESOME = "FontAwesome";
const MaterialCommunityIcons = "MaterialCommunityIcons";
const FontAwesome5 = "FontAwesome5";

const ico = [
  {
    FontAwesome: "FontAwesome",
  },
];
export default function IconCustom({
  iconName,
  iconType,
  size = 25,
  color = "black",
  ...rest
}) {
  if (iconType == FONTAWESOME) {
    return <FontAwesome name={iconName} size={size} color={color} {...rest} />;
  } else if (iconType == "Ionicons") {
    return <Ionicons name={iconName} size={size} color={color} {...rest} />;
  } else if (iconType == "AntDesign") {
    return <AntDesign name={iconName} size={size} color={color} {...rest} />;
  } else if (iconType == "MaterialIcons") {
    return (
      <MaterialIcons name={iconName} size={size} color={color} {...rest} />
    );
  } else if (iconType == MaterialCommunityIcons) {
    return (
      <MaterialCommunityIcons
        name={iconName}
        size={size}
        color={color}
        {...rest}
      />
    );
  } else if (iconType == FontAwesome5) {
    return <FontAwesome5 name={iconName} size={size} color={color} {...rest} />;
  } else if (iconType == "Entypo") {
    return <Entypo name={iconName} size={size} color={color} {...rest} />;
  } else if (iconType == "Feather") {
    return <Feather name={iconName} size={size} color={color} {...rest} />;
  } else if (iconType == "Fontisto") {
    return <Fontisto name={iconName} size={size} color={color} {...rest} />;
  } else if (iconType == "Foundation") {
    return <Foundation name={iconName} size={size} color={color} {...rest} />;
  } else if (iconType == "EvilIcons") {
    return <EvilIcons name={iconName} size={size} color={color} {...rest} />;
  } else if (iconType == "Octicons") {
    return <Octicons name={iconName} size={size} color={color} {...rest} />;
  } else if (iconType == "SimpleLineIcons") {
    return (
      <SimpleLineIcons name={iconName} size={size} color={color} {...rest} />
    );
  } else if (iconType == "Zocial") {
    return <Zocial name={iconName} size={size} color={color} {...rest} />;
  } else {
    return <Text>?</Text>;
  }
}
