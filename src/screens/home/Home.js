import React, { useState } from "react";
import { Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../shared/styles";
import { Input, Header } from "../../shared/components";
import { TileHorizontal, TileList, IntroGreeting } from "./components";
import { popularDestinations, recommendation } from "../../shared/data";
import { userData } from "../../shared/data";

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
      <IntroGreeting styles={globalStyles} data={userData} />
      <Input
        placeholder="Search"
        value={searchValue}
        onChangeText={handleSearch}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {filteredOptions && (
        <>
          <Header text={"Popular destinations"} />
          <FlatList
            data={filteredOptions}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <TileHorizontal option={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </>
      )}
      {filteredOptions.length === 0 && (
        <Text style={globalStyles.boldTextSmallPurple}>
          Sorry, no destinations found. Try again?
        </Text>
      )}

      <Header text={"Recommendation"} />
      <FlatList
        data={recommendation}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <TileList option={item} />}
        showsVerticalScrollIndicator={false}
        vertical
        contentContainerStyle={globalStyles.containerVertical}
      />
    </SafeAreaView>
  );
};
