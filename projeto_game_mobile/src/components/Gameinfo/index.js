import { View, Text, Image, StyleSheet } from 'react-native';
import styles from './styles';

export default function GameInfo(props) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: props.imageUri }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.developer}>Desenvolvido por: {props.developer}</Text>
    </View>
  );
}
