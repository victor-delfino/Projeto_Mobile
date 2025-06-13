import { View, Text } from 'react-native';
import styles from './styles';

export default function UserInfo(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.text}>{props.nome}</Text>

      <Text style={styles.label}>Idade:</Text>
      <Text style={styles.text}>{props.idade}</Text>

      <Text style={styles.label}>Preferências:</Text>
      <Text style={styles.text}>{props.preferencias}</Text>
    </View>
  );
}
