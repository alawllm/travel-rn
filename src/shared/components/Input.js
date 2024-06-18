import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { SearchIcon } from "../../../assets/icons/SearchIcon";

export const Input = ({ ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputWrapper}>
        <SearchIcon size={26} style={styles.icon} />
        <TextInput style={styles.input} {...rest} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
  },
  inputWrapper: {
    position: "relative",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderColor: "#DFDFDF",
    color: "#080613",
    height: 48,
  },
  icon: {
    position: "absolute",
    left: 12
  },
});
