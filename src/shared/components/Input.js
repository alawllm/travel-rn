import { View, Text, TextInput, StyleSheet } from "react-native";

export const Input = ({ label, ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.textLabel}>{label}</Text>
      <TextInput
        style={styles.input}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderColor: "#DFDFDF",
    color: "#080613",
    height: 48,
  },
  inputContainer: {
    width: "100%",
  },
  textLabel: {
    color: "#A1A1A1",
    fontSize: 14,
  },
});
