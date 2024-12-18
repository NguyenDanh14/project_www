import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";

const SmartWatchAppleScreen = ({ navigation }) => {
  const seriesList = [
    "Series 4",
    "Series 5",
    "Series 6",
    "Series SE",
    "Series 7",
    "Series Ultra",
    "Series 8",
    "Series 9",
    "Series 10",
  ];
  const productList = [
    {
      id: 1,
      name: "Apple Watch Series 7",
      description: "41mm Aluminum\n(GPS Only)",
      image: require("../assets/DATA/anhDongHo1.webp"),
    },
    {
      id: 2,
      name: "Apple Watch Series 7",
      description: "41mm Aluminum\n(GPS Only)",
      image: require("../assets/DATA/anhDongHo2.webp"),
    },
    {
      id: 3,
      name: "Apple Watch Series 7",
      description: "41mm Aluminum\n(GPS Only)",
      image: require("../assets/DATA/anhDongHo1.webp"),
    },
    {
      id: 4,
      name: "Apple Watch Series 7",
      description: "41mm Aluminum\n(GPS Only)",
      image: require("../assets/DATA/anhDongHo3.webp"),
    },
    {
      id: 5,
      name: "Apple Watch Series 7",
      description: "41mm Aluminum\n(GPS Only)",
      image: require("../assets/DATA/anhDongHo1.webp"),
    },
    {
      id: 6,
      name: "Apple Watch Series 7",
      description: "41mm Aluminum\n(GPS Only)",
      image: require("../assets/DATA/anhDongHo4.jpg"),
    },
    {
      id: 7,
      name: "Apple Watch Series 7",
      description: "41mm Aluminum\n(GPS Only)",
      image: require("../assets/DATA/anhDongHo5.jpg"),
    },
    {
      id: 8,
      name: "Apple Watch Series 7",
      description: "41mm Aluminum\n(GPS Only)",
      image: require("../assets/DATA/anhDongHo1.webp"),
    },
    {
      id: 9,
      name: "Apple Watch Series 7",
      description: "41mm Aluminum\n(GPS Only)",
      image: require("../assets/DATA/anhDongHo2.webp"),
    },
    {
      id: 10,
      name: "Apple Watch Series 7",
      description: "41mm Aluminum\n(GPS Only)",
      image: require("../assets/DATA/anhDongHo1.webp"),
    },
  ];
  const displayedProducts = productList.slice(0, 10);

  const steps = [
    {
      id: 1,
      title: "Safe & Secure",
      description:
        "Select your device & we’ll help you unlock the best selling price based on the present conditions of your gadget & the current market price.",
      image: require("../assets/DATA/SafeSecure.webp"),
    },
    {
      id: 2,
      title: "Instant Payment",
      description:
        "On accepting the price offered for your device, we’ll arrange a free pick up.",
      image: require("../assets/DATA/InstantPayment2.webp"),
    },
    {
      id: 3,
      title: "Best Price",
      description:
        "Instant Cash will be handed over to you at time of pickup or through payment mode of your choice.",
      image: require("../assets/DATA/BestPrice.webp"),
    },
  ];
  const products = [
    {
      id: 1,
      name: "Apple Watch Series 7",
      description: "41mm Aluminum",
      image: require("../assets/DATA/anhDongHo1.webp"), // Update with actual path
    },
    {
      id: 2,
      name: "Apple Watch Series 7",
      description: "41mm Aluminum",
      image: require("../assets/DATA/anhDongHo2.webp"), // Update with actual path
    },
    {
      id: 3,
      name: "Apple Watch Series 7",
      description: "41mm Aluminum",
      image: require("../assets/DATA/anhDongHo1.webp"), // Update with actual path
    },
    {
      id: 4,
      name: "Apple Watch Series 7",
      description: "41mm Aluminum",
      image: require("../assets/DATA/anhDongHo3.webp"), // Update with actual path
    },
    {
      id: 5,
      name: "Apple Watch Series 7",
      description: "41mm Aluminum",
      image: require("../assets/DATA/anhDongHo1.webp"), // Update with actual path
    },
    {
      id: 6,
      name: "Apple Watch Series 7",
      description: "41mm Aluminum",
      image: require("../assets/DATA/anhDongHo4.jpg"), // Update with actual path
    },
    {
      id: 7,
      name: "Apple Watch Series 7",
      description: "41mm Aluminum",
      image: require("../assets/DATA/anhDongHo5.jpg"), // Update with actual path
    },
  ];
  return (
    <ScrollView style={styles.container}>
      {/* Navigation */}
      <View style={styles.navigation}>
        <Text style={styles.link}>Home</Text>
        <Text style={styles.separator}> &gt; </Text>
        <Text style={styles.inactiveLink}>Sell Old Smartwatch</Text>
        <Text style={styles.separator}> &gt; </Text>
        <Text style={styles.activeLink}>Sell Old Apple</Text>
      </View>

      {/* Select Series Title */}
      <Text style={styles.title}>Select Series</Text>

      {/* Series List */}
      <View style={styles.seriesContainer}>
        {seriesList.slice(0, 10).map((series, index) => (
          <TouchableOpacity key={index} style={styles.seriesItem}>
            <Text style={styles.seriesText}>{series}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Select model */}
      <View style={styles.containerModel}>
        {/* Title */}
        <Text style={styles.titleModel}>Select Model</Text>

        {/* Product Grid */}
        <View style={styles.productContainer1}>
          {displayedProducts.map((product) => (
            <View key={product.id} style={styles.productCard1}>
              <Image source={product.image} style={styles.productImage} />
              <Text style={styles.productName1}>{product.name}</Text>
              <Text style={styles.productDescription}>
                {product.description}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* why sell on cashify */}
      <View style={styles.containerCashify}>
        <Text style={styles.titleCashify}>Why Sell On Cashify?</Text>
        <View style={styles.stepContainer}>
          {steps.map((step) => (
            <View key={step.id} style={styles.step}>
              <Image source={step.image} style={styles.stepImage} />
              <Text style={styles.stepTitle}>{step.title}</Text>
              <Text style={styles.stepDescription}>{step.description}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* top selling brands */}
      <View style={styles.topSelling}>
        {/* Title */}
        <Text style={styles.titleSelling}>Top Selling Brands</Text>

        {/* Brand Link */}
        <TouchableOpacity style={styles.brandLink}>
          <View style={styles.brandBox}>
            <Text style={styles.brandName}>Apple</Text>
            <Text>Apple</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* TopModel */}
      <View style={styles.topModels}>
        <Text style={styles.titleModels}>Top Selling Models</Text>
        <View style={styles.productContainer2}>
          {products.map((product) => (
            <View key={product.id} style={styles.productCard}>
              <Image source={product.image} style={styles.productImage} />
              <Text style={styles.productName2}>{product.name}</Text>
              <Text style={styles.productDescription2}>
                {product.description}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.containerDownload}>
        <View style={styles.containerDownloadImg}>
          <Image
            source={require("../assets/DATA/imgDowload.png")}
            style={styles.imgDownload}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
    marginLeft: 140,
    marginTop: 200,
  },
  link: {
    color: "#666",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  separator: {
    color: "#666",
  },
  inactiveLink: {
    color: "#666",
  },
  activeLink: {
    color: "#666",
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 140,
  },
  seriesContainer: {
    flexDirection: "row",
    width: "90%",
    flexWrap: "wrap",
    marginLeft: 130,
    marginTop: 20,
  },
  seriesItem: {
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    paddingVertical: 20,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "18%", // 5 cột (100% / 5 = 20%, trừ khoảng cách giữa các mục)
    marginBottom: 15, // Khoảng cách giữa các hàng
  },
  seriesText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
  },
  containerModel: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  titleModel: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 140,
  },
  productContainer1: {
    flexDirection: "row",
    marginLeft: 100,
    marginTop: 20,
    width: "90%",
    flexWrap: "wrap",
    justifyContent: "space-around", // Căn đều giữa các sản phẩm
    marginHorizontal: 5,
  },
  productCard1: {
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    padding: 5,
    alignItems: "center",
    width: "18%", // Chia đều 5 cột (100% / 5 = 20% - khoảng cách)
    marginBottom: 15, // Khoảng cách dọc giữa các hàng
  },
  productImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginBottom: 10,
  },
  productName1: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  productDescription1: {
    fontSize: 11,
    color: "#666",
    textAlign: "center",
  },
  containerCashify: {
    flex: 1,
    backgroundColor: "#fff",
    marginLeft: 120,
    marginTop: 100,
  },
  titleCashify: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 20,
  },
  stepContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    flexWrap: "wrap", // Wrap items to next row if needed
    paddingHorizontal: 20,
  },
  step: {
    width: "30%", // 3 items per row
    alignItems: "center",
    marginBottom: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
  },
  stepImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  stepDescription: {
    fontSize: 14,
    color: "#9ba1a5",
    marginTop: 10,
    textAlign: "center",
  },
  topSelling: {
    marginTop: -100,
    marginLeft: 150, // Adjusted for mobile screen spacing
  },
  titleSelling: {
    fontSize: 25,
    fontWeight: "bold",
  },
  brandLink: {
    display: "flex",
  },
  brandBox: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // For Android shadow
    width: 160, // Increased width
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  brandName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  topModels: {
    marginTop: 30,
    marginLeft: 20, // Adjusted for mobile screen
  },
  titleModels: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 130,
    marginBottom: 20,
  },
  productContainer2: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: 10, // Adjust container padding
    marginLeft: 110,
  },
  productCard: {
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // For Android shadow
    padding: 20,
    textAlign: "center",
    width: 180,
    height: 220,
    marginBottom: 20,
    alignItems: "center",
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 16,
  },
  productName2: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  productDescription2: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  containerDownload: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  containerDownloadImg: {
    justifyContent: "center",
    alignItems: "center", // Căn giữa theo chiều ngang
    marginTop: 50,
  },
  imgDownload: {
    width:'95%',
    height:400,
    borderRadius: 20, // Bo góc hình ảnh
  }
});
export default SmartWatchAppleScreen;
