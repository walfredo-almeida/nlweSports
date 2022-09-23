import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>

    </TouchableOpacity>

  )
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text> helo nlw react native </Text>
      <Button title="send 1"/>
      <Button title="send 2"/>
      <Button title="send 3"/>
      <StatusBar style="auto" backgroundColor='black'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
