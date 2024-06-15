import React, { useState } from "react";
import { Text, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../shared/styles";
import { Input, Header } from "../../shared/components";
import { TileHorizontal, TileList } from "./components";
import { popularDestinations, recommendation } from "../../shared/data";

export const HomeScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(popularDestinations);

  const handleSearch = (text) => {
    setSearchValue(text);
    const filtered = popularDestinations.filter(({ title }) =>
      title.toLowerCase().includes(text.toLowerCase())
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
      <Header text={"Popular destinations"} />
      <FlatList
        data={filteredOptions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <TileHorizontal option={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={globalStyles.flatListHorizontal}
      />
      <Header text={"Recommendation"} />
      <FlatList
        data={recommendation}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <TileList option={item} />}
        showsVerticalScrollIndicator={false}
        vertical
        contentContainerStyle={globalStyles.flatListVertical}
      />
    </SafeAreaView>
  );
};
