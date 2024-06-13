import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, FlatList } from "react-native";
import { globalStyles } from "../../shared/styles";
import { Input } from "../../shared/components";

const options = ["option 1", "option 2", "option 3"];

export const HomeScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleSearch = (text) => {
    setSearchValue(text);
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.regularTextSmall}>Hello, Margaret</Text>
      <Text style={globalStyles.mediumTextSmall}>Where do you want to go?</Text>
      <Input
        placeholder="Search"
        value={searchValue}
        onChangeText={handleSearch}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text style={globalStyles.mediumTextBigger}>Popular destinations</Text>
      <FlatList
        data={filteredOptions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={globalStyles.mediumText}>{item}</Text>
        )}
      />
      <Text style={globalStyles.mediumTextBigger}>Recommendation</Text>
    </SafeAreaView>
  );
};
