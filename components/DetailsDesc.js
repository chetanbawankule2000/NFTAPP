import { View, Text } from "react-native";
import React, { useState } from "react";
import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";
const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          sunTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.regular,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}></View>
        <Text
          style={{
            fontSize: SIZES.small,

            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            lineHeight: SIZES.large,
          }}
        >
          {text}
          {!readMore && "..."}
          <Text
            onPress={() => {
              if (!readMore) {
                setReadMore(true);
                setText(data.description);
              } else {
                setReadMore(false);
                setText(data.description.slice(0, 100));
              }
            }}
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
            }}
          >
            {readMore ? "Show Less" : "Read More"}
          </Text>
        </Text>
      </View>
    </>
  );
};

export default DetailsDesc;
