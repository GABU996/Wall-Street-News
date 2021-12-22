import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const ResultScreen = ({ route, navigation }) => {
  const { news } = route.params;
  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <View style={styles.container}>
        <View
          style={{ height: 30, backgroundColor: "black", width: "100%" }}
        ></View>
        <Text style={styles.introText}>{news.title}</Text>
        <Image style={styles.image} source={{ uri: news.urlToImage }} />
        <Text style={styles.authorDate}>Author:{news.author}</Text>
        <Text style={styles.authorDate}>Date: {news.publishedAt}</Text>
        <Text style={styles.contentText}>{news.content}</Text>
      </View>
    </ScrollView>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: { alignItems: "center", backgroundColor: "black" },

  image: { width: "100%", height: 250 },
  introText: {
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "black",
    fontSize: 20,
    color: "white",
    zIndex: 1,
    width: "100%",
    textAlign: "center",
    marginTop: 30,
    fontWeight: "800",
  },
  authorDate: {
    fontSize: 12,
    fontWeight: "800",
    color: "white",
  },

  contentText: {
    fontSize: 17,
    marginHorizontal: 5,
    color: "white",
  },
});
