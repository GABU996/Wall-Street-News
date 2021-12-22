import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const ResultsList = ({ result, title, navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: 30,
          fontSize: 40,
          fontWeight: "bold",
          color: "white",
        }}
      >
        {title}
      </Text>
      <FlatList
        data={result}
        keyExtractor={(item) => item.description}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 30, alignItems: "center" }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                marginBottom: 10,
                color: "white",
                marginHorizontal: 10,
              }}
            >
              Title: {item.title}
            </Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Results", {
                  news: item,
                });
              }}
            >
              <Image
                source={{ uri: item.urlToImage }}
                style={{
                  width: 350,
                  height: 250,
                  borderWidth: 1,
                  borderRadius: 15,
                  borderColor: "white",
                }}
              />
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "white",
                marginTop: 10,
              }}
            >
              Author: {item.author}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
