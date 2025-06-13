import { Text, TouchableOpacity } from 'react-native';
import styles from './style';

function Botao(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default Botao;
