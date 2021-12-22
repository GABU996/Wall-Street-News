import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import axios from "axios";
import ResultsList from "../components/ResultsList";

const Homescreen = ({ navigation }) => {
  const [result, setResult] = useState([]);
  async function getUser() {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d959a46be82c4c72b5861e53f6f34893"
      );
      setResult(response.data.articles);
      // console.log("response.data.articles--------", response.data.articles);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUser();
  }, []);
  return (
    <View style={styles.container}>
      <ResultsList
        result={result}
        title="Wall Street Journal"
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});

export default Homescreen;
