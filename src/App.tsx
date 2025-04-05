import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  Pressable
} from 'react-native';
import RNHapticFeedback from "react-native-haptic-feedback"
import DiceOne from "../assets/One.png"
import DiceTwo from "../assets/Two.png"
import DiceThree from "../assets/Three.png"
import DiceFour from "../assets/Four.png"
import DiceFive from "../assets/Five.png"
import DiceSix from "../assets/Six.png"

type diceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({ imageUrl }: diceProps): React.JSX.Element => {
  return (
    <View>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  )
}


function App(): React.JSX.Element {
  const [diceImageOne, setDiceImageOne] = useState<ImageSourcePropType>(DiceOne)
  const [diceImageTwo, setDiceImageTwo] = useState<ImageSourcePropType>(DiceFour)

  const rollDoceOnTap = () => {
    const randomNumDiceOne = Math.floor(Math.random() * 6) + 1
    const randomNumDiceTwo = Math.floor(Math.random() * 6) + 1

    switch (randomNumDiceOne) {
      case 1:
        setDiceImageOne(DiceOne)
        break;
      case 2:
        setDiceImageOne(DiceTwo)
        break;
      case 3:
        setDiceImageOne(DiceThree)
        break;
      case 4:
        setDiceImageOne(DiceFour)
        break;
      case 5:
        setDiceImageOne(DiceFive)
        break;
      case 6:
        setDiceImageOne(DiceSix)
        break;

      default:
        setDiceImageOne(DiceOne)
        break;
    }

    switch (randomNumDiceTwo) {
      case 1:
        setDiceImageTwo(DiceOne)
        break;
      case 2:
        setDiceImageTwo(DiceTwo)
        break;
      case 3:
        setDiceImageTwo(DiceThree)
        break;
      case 4:
        setDiceImageTwo(DiceFour)
        break;
      case 5:
        setDiceImageTwo(DiceFive)
        break;
      case 6:
        setDiceImageTwo(DiceSix)
        break;

      default:
        setDiceImageTwo(DiceFour)
        break;
    }
    RNHapticFeedback.trigger("impactLight", options);
  }





  return (
    <View style={styles.container}>
      <View style={styles.dicesContainer}>
        <Dice imageUrl={diceImageOne} />
        <Dice imageUrl={diceImageTwo} />
      </View>
      <Pressable onPress={rollDoceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll the dices</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF2F2",

  },
  dicesContainer: {
    flexDirection: "row",
    paddingLeft: 3
  },
  diceImage: {
    width: 200,
    height: 200
  },
  rollDiceBtnText: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
