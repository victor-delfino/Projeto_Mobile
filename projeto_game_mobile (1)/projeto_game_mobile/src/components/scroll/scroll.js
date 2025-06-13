import React from 'react';
import { ScrollView } from 'react-native';
import defaultStyles from './styles';

function Scroll({
  children,
  style,
  contentContainerStyle,
  horizontal = true,
  showsHorizontalScrollIndicator = true,
  ...props
}) {
  return (
    <ScrollView
      horizontal={horizontal}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      contentContainerStyle={[defaultStyles.scrollViewContent, contentContainerStyle]}
      style={[defaultStyles.scrollView, style]}
      {...props}
    >
      {children}
    </ScrollView>
  );
}

export default Scroll;