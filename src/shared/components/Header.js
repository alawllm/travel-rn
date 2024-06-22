import { Text } from "react-native";
import { globalStyles } from "../styles";
import { useTheme } from "../providers";

export const Header = ({ text }) => {
  const { themeStyles } = useTheme();
  return (
    <Text style={[globalStyles.mediumTextBigger, themeStyles.text]}>
      {text}
    </Text>
  );
};
