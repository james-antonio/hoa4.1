import { StyleSheet, Text, View } from 'react-native';
import Status from './components/status';

export default function App() {
  return (
    <View style={styles.container}>
      <Status/>
      <View style={styles.messageContent}>
      </View> 
      <View style={styles.toolbarSpace}>
        <Text>ANTONIO</Text>
      </View>
      <View style={styles.inputMethod}>
        <Text>Hands on Activity 4.1</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
  },
  messageContent: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputMethod: {
    flex: 1, 
    backgroundColor: 'whites',
  
    alignItems: 'center',
  },
  toolbarSpace: {
    borderTopWidth: 1, 
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: 'yellow',
   
    alignItems: 'center',
  },
});