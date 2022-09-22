import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View style={{ backgroundColor: COLORS.primary, padding: SIZES.font }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 15,
              height: 15,
            }}
          />
        </View>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            color: COLORS.white,
          }}
        >
          Hello, Dating 👋
        </Text>
        <Text
          style={{
            fontSize: SIZES.large,
            fontFamily: FONTS.bold,
            color: COLORS.white,
            mrginTop: SIZES.base / 2,
          }}
        >
          Let's find some NFT
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          paddingHorizontal: SIZES.font,
          backgroundColor: COLORS.gray,
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: SIZES.small - 2,
          borderRadius: SIZES.font,
        }}
      >
        <Image
          source={assets.search}
          resizeMode="contain"
          style={{ height: 20, width: 20, marginRight: SIZES.base }}
        />
        <TextInput
          placeholder="Search NFT"
          onChangeText={onSearch}
          style={{ flex: 1 }}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
