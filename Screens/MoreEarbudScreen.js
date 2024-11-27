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

const MoreEarbudScreen = ({ navigation }) => {
  const features = [
    {
      id: 1,
      title: "Best Prices",
      description: "Objective AI-based pricing",
      image: require("../assets/DATA/BestPrices.webp"), // Replace with actual path
    },
    {
      id: 2,
      title: "Instant Payment",
      description:
        "Instant Money Transfer in your preferred mode \nat time of pick up or store drop off",
      image: require("../assets/DATA/InstantPayment.webp"), // Replace with actual path
    },
    {
      id: 3,
      title: "Simple & Convenient",
      description: "Check price, schedule pickup & get paid",
      image: require("../assets/DATA/SimpConvenient.webp"), // Replace with actual path
    },
    {
      id: 4,
      title: "Free Doorstep Pickup",
      description: "No fees for pickup across 1500 cities across \nIndia",
      image: require("../assets/DATA/FreeDoorstepPickup.webp"), // Replace with actual path
    },
    {
      id: 5,
      title: "Factory Grade Data Wipe",
      description: "100% Safe and Data Security Guaranteed",
      image: require("../assets/DATA/FactoryGradeDataWipe.webp"), // Replace with actual path
    },
    {
      id: 6,
      title: "Valid Purchase Invoice",
      description: "Genuine Bill of Sale",
      image: require("../assets/DATA/ValidPurchaseInvoice.webp"), // Replace with actual path
    },
  ];

  const products = [
    {
      id: 1,
      name: "LG Tone Free HBS - FN6",
      description: "",
      image: require("../assets/DATA/earbud1.webp"), // Update with actual path
    },
    {
      id: 2,
      name: "LG Tone Free HBS - FN7",
      description: "",
      image: require("../assets/DATA/earbud2.webp"), // Update with actual path
    },
    {
      id: 3,
      name: "Sennheiser Momentum True Wireless",
      description: "",
      image: require("../assets/DATA/earbud3.webp"), // Update with actual path
    },
    {
      id: 4,
      name: "Sony WF-1000XM3 Truly Wireless",
      description: "",
      image: require("../assets/DATA/earbud4.webp"), // Update with actual path
    },
    {
      id: 5,
      name: "Sony WF-H800 Truly Wireless",
      description: "",
      image: require("../assets/DATA/earbud5.webp"), // Update with actual path
    },
    {
      id: 6,
      name: "Sony WF-H800 Truly Wireless",
      description: "",
      image: require("../assets/DATA/earbud6.webp"), // Update with actual path
    },
    {
      id: 7,
      name: "Sony WF-XB700 Truly Wireless",
      description: "",
      image: require("../assets/DATA/earbud7.webp"), // Update with actual path
    },
  ];

  const [expanded, setExpanded] = useState(null);

  const toggleAnswer = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqData = [
    {
      question: "Where can I turn in old phones for cash?",
      answer:
        "You can turn in your old phones at participating stores or through our online service.",
    },
    {
      question: "How can I sell my old cell phone?",
      answer:
        "Simply check the price, schedule a pickup, and get paid when your phone is collected.",
    },
    {
      question: "What do you do with my old phone?",
      answer:
        "We either refurbish, recycle, or resell the phones depending on their condition.",
    },
  ];
    const brands = [
      { name: 'Apple', displayName: 'Apple', color: 'black', fontSize: 25 },
      { name: 'Redmi', displayName: 'Xiaomi', color: 'orange', fontSize: 15 },
      { name: 'SAMSUNG', displayName: 'samsung', color: 'blue', fontSize: 12 },
      { name: 'ONEPLUS', displayName: 'OnePlus', color: 'red', fontSize: 12 },
      { name: 'OPPO', displayName: 'OPPO', color: 'green', fontSize: 15 },
      { name: 'realme', displayName: 'Realme', color: 'rgb(188, 188, 22)', fontSize: 16 },
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
      {/* Navigation */}
      <View style={styles.navigation}>
        <Text style={styles.navigationText}>Home</Text>
        <Text style={styles.navigationText}> {">"} </Text>
        <Text style={styles.navigationText}>Sell Old Earbuds</Text>
      </View>

      {/* Main content */}
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>
            Sell your Smartwatch for Instant{"\n"} Cash
          </Text>

          {/* Features */}
          <View style={styles.features}>
            <Text style={styles.checkmark}>✔</Text>
            <Text style={styles.featureText}>Maximum Value</Text>
            <Text style={styles.checkmark}>✔</Text>
            <Text style={styles.featureText}>Safe & Hassle-free</Text>
            <Text style={styles.checkmark}>✔</Text>
            <Text style={styles.featureText}>Free Doorstep Pickup</Text>
          </View>

          {/* Search */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search your Smartwatch to sell"
            />
          </View>

          <View style={styles.brandContainer}>
            <Text style={styles.brandText}>- Or choose a brand -</Text>
          </View>

          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.brandButton}>
              <Text style={styles.defaultText}>Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.brandButton, { color: "orange" }]}>
              <Text style={[styles.defaultText, { color: "orange" }]}>
                Redmi
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.brandButton}>
              <Text
                style={[styles.defaultText, { color: "blue", fontSize: 11 }]}
              >
                SAMSUNG
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.brandButton}>
              <Text
                style={[styles.defaultText, { color: "red", fontSize: 11 }]}
              >
                Oneplus
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.moreBrands}>
              <Text style={styles.moreBrandsText}>More brands </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/DATA/people_smile.webp")}
            style={styles.image}
          />
        </View>
      </View>

      {/* How Cashify Works */}
      <Text style={styles.cashifyTitle}>How Cashify Works</Text>

      <View style={styles.cashifyContainer}>
        <View style={styles.step}>
          <Image
            source={require("../assets/DATA/Check_Price.webp")}
            style={styles.stepImage}
          />
          <View style={{ flexDirection: "row" }}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>1</Text>
            </View>
            <Text style={styles.stepTitle}>Check Price</Text>
          </View>
          <Text style={styles.stepDescription}>
            Select your device & tell us about its current condition, and our
            advanced AI tech will tailor make the perfect price for you.
          </Text>
        </View>

        <View style={styles.step}>
          <Image
            source={require("../assets/DATA/Schedule_Pickup.webp")}
            style={styles.stepImage}
          />
          <View style={{ flexDirection: "row" }}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>2</Text>
            </View>
            <Text style={styles.stepTitle}>Schedule Pickup</Text>
          </View>
          <Text style={styles.stepDescription}>
            Book a free pickup from your home or work at a time slot that best
            suits your convenience.
          </Text>
        </View>

        <View style={styles.step}>
          <Image
            source={require("../assets/DATA/Get_Paid.webp")}
            style={styles.stepImage}
          />
          <View style={{ flexDirection: "row" }}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>3</Text>
            </View>
            <Text style={styles.stepTitle}>Get Paid</Text>
          </View>
          <Text style={styles.stepDescription}>
            Did we mention you get paid as soon as our executive picks up your
            device? It's instant payment all the way!
          </Text>
        </View>
      </View>

      {/* Hot deals */}
      <View style={styles.hotDeals}>
        <Text style={styles.title}>Hot Deals</Text>
        <View style={styles.imageContainer2}>
          <Image
            source={require("../assets/DATA/ExchangeOffers.webp")} // Replace with your image path
            style={styles.image2}
          />
          <Image
            source={require("../assets/DATA/Rufurbished.webp")} // Replace with your image path
            style={styles.image2}
          />
        </View>
      </View>

      {/* Why us */}
      <View style={styles.containerWhyUs}>
        <Text style={styles.titleWhyUs}>Why Us</Text>
        <View style={styles.featuresGrid}>
          {features.map((feature) => (
            <View key={feature.id} style={styles.feature}>
              <View style={{ flexDirection: "row" }}>
                <Image source={feature.image} style={styles.featureImage} />
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.featureTitle}>{feature.title}</Text>
                  <Text style={styles.featureDescription}>
                    {feature.description}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* top selling brands */}
      <View style={styles.containerSelling}>
      <Text style={styles.titleSelling}>Top Selling Brands</Text>
      <View style={styles.brandLinks}>
        {brands.map((brand, index) => (
          <TouchableOpacity key={index} style={styles.brandLink}>
            <View style={styles.brandBox}>
              <Text style={[styles.brandName, { color: brand.color, fontSize: brand.fontSize }]}>
                {brand.name}
              </Text>
              <Text>{brand.displayName}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>

      {/* TopModel */}
      <View style={styles.topModels}>
        <Text style={styles.titleModels}>Top Selling Models</Text>
        <View style={styles.productContainer}>
          {products.map((product) => (
            <View key={product.id} style={styles.productCard}>
              <Image source={product.image} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productDescription}>
                {product.description}
              </Text>
            </View>
          ))}
        </View>
      </View>
      {/* FAQs */}
      <View style={styles.containerFAQ}>
        <Text style={styles.titleFAQs}>FAQs</Text>
        {faqData.map((item, index) => (
          <View key={index} style={styles.faqSection}>
            <TouchableOpacity
              style={styles.faqQuestion}
              onPress={() => toggleAnswer(index)}
            >
              <Text style={styles.faqText}>{item.question}</Text>
              <Icon
                name={expanded === index ? "minus" : "plus"}
                size={20}
                color="#333"
              />
            </TouchableOpacity>
            {expanded === index && (
              <View style={styles.faqAnswer}>
                <Text style={styles.answerText}>{item.answer}</Text>
              </View>
            )}
          </View>
        ))}
      </View>

      <View style={styles.containerDownload}>
        <View style={styles.containerDownloadImg}>
          <Image
            source={require("../assets/DATA/imgDowload.png")}
            style={styles.imgDownload}
          />
        </View>
        <View style={styles.contentSell}>
          <Text style={styles.textContent}>
            Sell Old Apple Mobile Sell Old Samsung Mobile Sell Old Xiaomi Mobile
            Sell Old Motorola Mobile Sell Old Google Mobile Sell Old Lenovo
            Mobile Sell Old OnePlus Mobile {"\n"}
            Sell Old Oppo Mobile Sell Old Vivo Mobile Sell Old Huawei Mobile
            Sell Old Asus Mobile Sell Old Nokia Mobile Sell Old Sony Mobile Sell
            Old LG Mobile Sell Old Panasonic {"\n"} Mobile Sell Old Gionee
            Mobile Sell Old LeEco Mobile Sell Old Micromax Mobile Sell Old HTC
            Mobile Sell Old Coolpad Mobile Sell Old Xolo Mobile Sell Old Intex
            Mobile Sell Old Karbonn Mobile Sell Old Lava Mobile
          </Text>
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
    marginTop: 50,
    marginLeft: 160,
  },
  navigationText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "bold",
  },
  content: {
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#F7F7F7",
    borderRadius: 8,
    padding: 20,
    marginLeft: 150,
    marginTop: 20,
  },
  textContainer: {
    maxWidth: "60%",
    marginTop: 100,
  },
  heading: {
    fontSize: 35,
    marginTop: -50,
    fontWeight: "bold",
  },
  features: {
    marginTop: 40,
    flexDirection: "row",
    flexWrap: "wrap", // Allow the text to wrap if needed
  },
  checkmark: {
    color: "#4CAF50",
    marginRight: 10, // Add space between the checkmark and feature text
  },
  featureText: {
    color: "black",
    fontWeight: "bold",
    marginRight: 10, // Optional, to add more space between feature items if necessary
  },
  searchContainer: {
    marginTop: 50,
  },
  searchInput: {
    paddingLeft: 40,
    paddingRight: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    width: "100%",
    backgroundColor: "white",
  },
  brandContainer: {
    marginTop: 40,
  },
  brandText: {
    fontSize: 18,
  },
//   brandButton: {
//     backgroundColor: "white",
//     padding: 15,
//     borderRadius: 10,
//     marginTop: 25,
//     marginLeft: -460,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     alignSelf: "center",
//     height: 80,
//     width: 100,
//   },
//   brandButtonText: {
//     textAlign: "center",
//     color: "black",
//     fontWeight: "bold",
//   },

containerButton: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: 25,
  },
  brandButton: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  defaultText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  moreBrands: {
    marginLeft: 10,
  },
  moreBrandsText: {
    textDecorationLine: 'none',
    marginTop:35
  },
  imageContainer: {
    width: "100%",
    height: 200, // Đảm bảo rằng container có chiều cao hợp lý để chứa hình ảnh
  },
  image: {
    marginLeft: 120,
    resizeMode: "cover", // Điều chỉnh cách hiển thị hình ảnh
  },
  cashifyTitle: {
    marginTop: 70,
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 150,
  },
  cashifyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 50,
    marginLeft: 100,
  },
  step: {
    width: "30%",
    alignItems: "center",
    marginBottom: 50,
  },
  stepImage: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
  circle: {
    backgroundColor: "#42c8b7",
    width: 25,
    height: 25,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  circleText: {
    color: "#ffffff",
    fontSize: 14,
  },
  stepTitle: {
    marginTop: 12,
    marginLeft: 10,
    fontWeight: "bold",
  },
  stepDescription: {
    color: "#9ba1a5",
    marginTop: 10,
    marginLeft: 50,
  },
  hotDeals: {
    backgroundColor: "rgba(247, 247, 247, 255)",
    height: 310,
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    fontWeight: "bold",
    marginLeft: 150,
  },
  imageContainer2: {
    flexDirection: "row", // Arrange images side-by-side
    justifyContent: "space-between",
    padding: 20,
    width: "45.5%",
    marginLeft: 130,
  },
  image2: {
    width: 320, // Set image width
    height: 260, // Set image height
    resizeMode: "contain", // Scale the image properly
    marginTop: -30,
  },

  containerWhyUs: {
    backgroundColor: "rgba(217, 244, 241, 1)",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  titleWhyUs: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 150,
    marginTop: 10,
  },
  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 20,
    marginLeft: 90,
  },
  feature: {
    width: "30%",
    backgroundColor: "rgba(217, 244, 241, 1)",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    marginLeft: 45,
  },
  featureImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: "contain",
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: "#666",
  },

  topSelling: {
    marginTop: 100,
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
  productContainer: {
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
  productName: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  containerFAQ: {
    justifyContent: "space-around",
    width: "80%",
    marginLeft: 150, // Adjust as necessary
    marginTop: 20,
  },
  titleFAQs: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
  },
  faqSection: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 20,
  },
  faqQuestion: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    cursor: "pointer", // This is for the web, React Native doesn't use this, but it’s used for toggling
  },
  faqText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  faqAnswer: {
    paddingTop: 10,
    paddingLeft: 20,
  },
  answerText: {
    fontSize: 16,
    color: "#666",
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
    width: "95%",
    height: 400,
    borderRadius: 20, // Bo góc hình ảnh
  },
  contentSell: {
    marginTop: 30,
    marginLeft: 40,
  },
  textContent: {
    fontSize: 19,
    color: "#333", // Màu chữ
    lineHeight: 22, // Để chữ không bị sát nhau quá
    textAlign: "left", // Căn trái văn bản
  },
  containerSelling: {
    marginTop: 140,
    marginLeft: 130,
  },
  titleSelling: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  brandLinks: {
    marginTop:30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20, // Note: React Native doesn't support `gap`, use margin for spacing instead.
  },
  brandLink: {
    textDecorationLine: 'none',
  },
  brandBox: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: 140,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandName: {
    fontWeight: 'bold',
    marginBottom: 5, // Adjusted for React Native spacing
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
export default MoreEarbudScreen;
