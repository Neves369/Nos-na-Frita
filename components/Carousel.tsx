import React, { useState, useCallback, useRef, memo } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
const { width, height } = Dimensions.get("window");
import Carousel from "react-native-reanimated-carousel";

function CustomCarousel(param: Array<any>) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const ref = useRef(null);

  const renderItem = useCallback(({ item, index }: any) => {
    return (
      <View
        style={[
          {
            height: "100%",
            width: width,
            paddingHorizontal: "3%",
          },
        ]}
      >
        {
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{
              uri: `data:image/gif;base64,${item.foto}`,
              cache: "only-if-cached",
            }}
          />
        }
      </View>
    );
  }, []);

  if (param.data) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 10,
        }}
      >
        <Carousel
          width={width}
          height={width / 2}
          data={param.data}
          autoPlay={true}
          loop
          autoPlayInterval={5000}
          scrollAnimationDuration={2000}
          renderItem={renderItem}
          onSnapToItem={(index: number) => setActiveIndex(index)}
        />
      </View>
    );
  } else {
    return <></>;
  }
}

export default CustomCarousel;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 10,
  },
  shadowBox: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
