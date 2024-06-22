import { View, Text, StyleSheet } from "react-native";

export const TextWithIcon = ({ circleColor, children, text, textStyle }) => {
  return (
    <View style={styles.textWithIcon}>
      <View style={[styles.circleIcon, { backgroundColor: `${ circleColor }` }]}>
        {children}
      </View>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textWithIcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 15,
    marginBottom: 15,
    width: "50%",
  },
  circleIcon: {
    height: 48,
    width: 48,
    borderRadius: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
