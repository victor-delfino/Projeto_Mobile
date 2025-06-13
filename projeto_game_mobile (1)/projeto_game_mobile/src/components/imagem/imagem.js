import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import defaultStyles from './styles';

function Imagem({
  source,
  onPress,
  styles = defaultStyles,
  imageProps = {},
  containerProps = {},
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      {...containerProps}
    >
      <Image
        source={source}
        style={styles.image}
        resizeMode="cover"
        {...imageProps}
      />
    </TouchableOpacity>
  );
}

export default Imagem;