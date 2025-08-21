import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      {/* SVG border outline */}
      <Svg height="60" width="300" style={styles.svg}>
        {/* Top + Left only */}
        <Path d="M54 4 L150 0" stroke="darkred" strokeWidth="4" />
        <Path d="M4 4 L150 0" stroke="darkred" strokeWidth="1" />
        <Path d="M150 0 L295 0" stroke="darkred" strokeWidth="4" />
        <Path d="M150 0 L150 0" stroke="darkred" strokeWidth="9" />
        <Path
          d="M5 5 L295 0" // top
          fill="none"
          stroke="darkred"
          strokeWidth="3.5"
        />
        <Path
          d="M5 5 L5 60" // left
          fill="none"
          stroke="darkred"
          strokeWidth="3"
        />

        {/* Bottom (new separate path) */}
        <Path d="M5 60 L295 55" fill="none" stroke="darkred" strokeWidth="1" />
        <Path d="M4 59 L100 61" fill="none" stroke="darkred" strokeWidth="5" />
        <Path d="M30 59 L180 57" fill="none" stroke="darkred" strokeWidth="0.8" />
        <Path d="M50 59 L180 57" fill="none" stroke="darkred" strokeWidth="0.8" />
        <Path d="M80 60 L180 57" fill="none" stroke="darkred" strokeWidth="0.8" />
        <Path d="M100 60 L200 57" fill="none" stroke="darkred" strokeWidth="0.8" />
        <Path d="M120 60 L210 57" fill="none" stroke="darkred" strokeWidth="0.8" />
        <Path d="M130 60 L210 57" fill="none" stroke="darkred" strokeWidth="0.8" />
        
        {/* Right side (new separate path) */}
        <Path d="M295 0 L294 55" fill="none" stroke="darkred" strokeWidth="1" />
        <Path d="M296 0 L295 26" fill="none" stroke="darkred" strokeWidth="0.9" />
        <Path d="M296 0 L295 28" fill="none" stroke="darkred" strokeWidth="0.9" />
        <Path d="M296 0 L295 30" fill="none" stroke="darkred" strokeWidth="0.6" />
        <Path d="M296 0 L295 32" fill="none" stroke="darkred" strokeWidth="0.5" />
      </Svg>

      {/* Button text */}
      <Text style={styles.text}>Get Started</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  svg: {
    position: 'absolute',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'darkred',
  },
});

export default CustomButton;
