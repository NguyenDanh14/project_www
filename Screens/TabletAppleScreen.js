import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";

const TabletAppleScreen = ({ navigation }) => {
    const seriesList = [
        "Ipad Air Series",
        "Ipad Mini Series",
        "Ipad Pro Series",
        "Ipad Series",
      ];
      const products = [
        {
          id: 1,
          name: "Ipad Air M2 (Wifi Only)",
          description: "",
          image: require("../assets/DATA/ipad1.webp"), // Update with actual path
        },
        {
          id: 2,
          name: "Ipad Air M2 (Wifi + Cellular)",
          description: "41mm Aluminum",
          image: require("../assets/DATA/ipad2.webp"), // Update with actual path
        },
        {
          id: 3,
          name: "Ipad Air M4 (Wifi Only)",
          description: "",
          image: require("../assets/DATA/ipad3.webp"), // Update with actual path
        },
        {
          id: 4,
          name: "Ipad Air M4 (Wifi + Cellular)",
          description: "",
          image: require("../assets/DATA/ipad4.webp"), // Update with actual path
        },
        {
          id: 5,
          name: "Ipad Pro 4th Gen (Wifi Only)",
          description: "",
          image: require("../assets/DATA/ipad5.webp"), // Update with actual path
        },
        {
          id: 6,
          name: "Ipad Pro 4th Gen (Wifi + Cellular)",
          description: "",
          image: require("../assets/DATA/ipad6.webp"), // Update with actual path
        },
        {
          id: 7,
          name: "Ipad Pro 12.9 6th Gen (Wifi Only)",
          description: "",
          image: require("../assets/DATA/ipad7.webp"), // Update with actual path
        },
      ];
      const productList = [
        {
          id: 1,
          name: "Ipad Air M2 (Wifi Only)",
          description: "",
          image: require("../assets/DATA/ipad1.webp"),
        },
        {
          id: 2,
          name: "Ipad Air M2 (Wifi + Cellular)",
          description: "",
          image: require("../assets/DATA/ipad2.webp"),
        },
        {
          id: 3,
          name: "Ipad Air M4 (Wifi Only)",
          description: "",
          image: require("../assets/DATA/ipad3.webp"),
        },
        {
          id: 4,
          name: "Ipad Air M4 (Wifi + Cellular)",
          description: "",
          image: require("../assets/DATA/ipad4.webp"),
        },
        {
          id: 5,
          name: "Ipad Pro 4th Gen (Wifi Only)",
          description: "",
          image: require("../assets/DATA/ipad5.webp"),
        },
        {
          id: 6,
          name: "Ipad Pro 4th Gen (Wifi + Cellular)",
          description: "",
          image: require("../assets/DATA/ipad6.webp"),
        },
        {
          id: 7,
          name: "Ipad Pro 12.9 6th Gen (Wifi Only)",
          description: "",
          image: require("../assets/DATA/ipad7.webp"),
        },
        {
          id: 8,
          name: "Ipad Pro 12.9 6th Gen (Wifi + Cellular)",
          description: "",
          image: require("../assets/DATA/ipad8.webp"),
        },
        {
          id: 9,
          name: "Ipad Air 3rd Gen (Wifi Only)",
          description: "",
          image: require("../assets/DATA/ipad9.webp"),
        },
        {
          id: 10,
          name: "Ipad Air 3rd Gen (Wifi + Cellular)",
          description: "",
          image: require("../assets/DATA/ipad10.webp"),
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
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* Header Content */}
        <View style={styles.contentHeader}>
          <Image
            source={require("../assets/DATA/logo.png")}
            style={styles.logoHeader}
          />

          <View style={styles.headerSearch}>
            <Icon name="search" style={styles.iconHeaderSearch} />
            <TextInput
              style={styles.inputSearch}
              placeholder="Search for mobiles, accessories & More"
            />
          </View>

          <View style={styles.headerLocation}>
            <Icon name="map-marker-alt" style={styles.locationIcon} />
            <Text style={styles.locationName}>Gurgaon</Text>
            <Icon name="chevron-down" style={styles.chevronIcon} />
          </View>

          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.btnLoginText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Navigation Content */}
        <ScrollView
          horizontal
          style={styles.contentHeaderNav}
          showsHorizontalScrollIndicator={false}
        >
          {[
            "All",
            "Sell Phone",
            "Sell Gadgets",
            "Buy Phone",
            "Find New Gadget",
            "Buy Laptop",
            "Cashify Store",
            "More",
          ].map((item, index) => (
            <View key={index} style={styles.navItem}>
              <Text style={styles.navText}>{item}</Text>
              <Icon name="chevron-down" style={styles.chevronIcon} />
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{ marginLeft: 140, marginTop: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          Sell Old Apple Tablet
        </Text>
      </View>
      {/* Navigation */}
      <View style={styles.navigation}>
        <Text style={styles.link}>Home</Text>
        <Text style={styles.separator}> &gt; </Text>
        <Text style={styles.inactiveLink}>Sell Old Tablet</Text>
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
            <View key={product.id} style={styles.productCard}>
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
            <View key={product.id} style={styles.productCard2}>
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
        {/* footer */}
    <View style={styles.footer}>
      <View style={styles.contentFooter}>
        {/* Logo and Social Media Section */}
        <View style={styles.footerLinked}>
          <ImageBackground
            source={require('../assets/DATA/logo.png')}
            style={styles.logoFooter}
          />
          <Text style={styles.headlineLogoIcon}>Follow Us On</Text>
          <View style={styles.listIcon}>
            {['twitter', 'facebook', 'instagram', 'youtube'].map((icon, index) => (
              <TouchableOpacity key={index} style={styles.iconContainer}>
                <Icon name={icon} style={styles.icon} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Footer Menu */}
        <ScrollView horizontal contentContainerStyle={styles.listMenuFooter}>
          {[
            {
              title: 'Services',
              items: [
                'Sell Phone',
                'Sell Television',
                'Sell Smart Watch',
                'Sell Smart Speakers',
                'Sell DSLR Camera',
                'Sell Earbuds',
                'Repair Phone',
                'Buy Phone',
                'Recycle Phone',
                'Find New Phone',
                'Partner With Us',
              ],
            },
            {
              title: 'Company',
              items: [
                'About Us',
                'Careers',
                'Articles',
                'Press Releases',
                'Become Cashify Partner',
                'Become Supersale Partner',
              ],
            },
            {
              title: 'Sell Device',
              items: ['Mobile Phone', 'Laptop', 'Tablet', 'iMac', 'Gaming Consoles'],
            },
            {
              title: 'Help & Support',
              items: ['FAQ', 'Contact Us', 'Warranty Policy', 'Refund Policy'],
            },
            {
              title: 'More Info',
              items: [
                'Terms & Conditions',
                'Privacy Policy',
                'Terms of Use',
                'E-Waste Policy',
                'Cookie Policy',
                'GDPR Compliance',
                'What is Refurbished',
                'Device Safety',
              ],
            },
          ].map((menu, index) => (
            <View key={index} style={styles.menuColumn}>
              <Text style={styles.titleMenuFooter}>{menu.title}</Text>
              {menu.items.map((item, i) => (
                <Text key={i} style={styles.menuItem}>
                  {item}
                </Text>
              ))}
            </View>
          ))}
        </ScrollView>
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
  header: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    height: 73,
  },
  logoHeader: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  headerSearch: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    borderRadius: 5,
    paddingHorizontal: 10,
    width: 200,
    height: 40,
  },
  iconHeaderSearch: {
    marginRight: 5,
    fontSize: 16,
    color: "#888",
  },
  inputSearch: {
    flex: 1,
    fontSize: 14,
  },
  headerLocation: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    fontSize: 18,
    color: "#888",
    marginRight: 5,
  },
  locationName: {
    fontSize: 14,
    marginRight: 5,
  },
  chevronIcon: {
    fontSize: 14,
    color: "#888",
  },
  btnLogin: {
    backgroundColor: "#42c8b7",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  btnLoginText: {
    color: "#fff",
    fontWeight: "bold",
  },
  contentHeaderNav: {
    marginTop: 10,
    paddingVertical: 10,
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  navText: {
    fontSize: 14,
    marginRight: 5,
  },
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
    marginLeft: 140,
    marginTop: 10,
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
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    padding: 5,
    height: 180, // Điều chỉnh chiều cao để cân đối
    alignItems: "center",
    width: "19%", // Chia đều 5 cột với khoảng cách hợp lý (100% / 5 = 20%, giảm nhẹ để thêm khoảng cách)
    marginHorizontal: "0.5%", // Thêm khoảng cách ngang giữa các thẻ
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
    marginTop: 20,
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
    marginTop: 20,
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
  productCard2: {
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
  },
  footer: {
    width: '100%',
    backgroundColor: '#f7f7f7',
    paddingVertical: 20,
    alignItems: 'center',
  },
  contentFooter: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
  },
  footerLinked: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoFooter: {
    width: 120,
    height: 60,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  headlineLogoIcon: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  listIcon: {
    flexDirection: 'row',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: 'gray',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  icon: {
    color: 'white',
    fontSize: 18,
  },
  listMenuFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    paddingBottom: 10,
  },
  menuColumn: {
    marginRight: 30,
    maxWidth: 200,
  },
  titleMenuFooter: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuItem: {
    fontSize: 14,
    lineHeight: 24,
  },
});
export default TabletAppleScreen;
