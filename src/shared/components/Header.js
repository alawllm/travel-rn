import { Text } from "react-native";
import { globalStyles } from "../styles";

export const Header = ({text}) => {
  return <Text style={globalStyles.mediumTextBigger}>{text}</Text>;
};
