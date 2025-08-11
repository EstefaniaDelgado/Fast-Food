import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import WomanYoung from '../../assets/images/woman-young.svg'


export default function Header() {
  return (
    <View style={styles.container}>
      <Ionicons name="location-outline" size={20} color="red" />
      <Text style={styles.location}>Bogotá, <Text style={{ fontWeight: 'bold' }}>CO</Text></Text>
      <View style={styles.containerAvatar}>
        <WomanYoung width={60} height={60}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop:40,
  },
  location: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  containerAvatar:{  
    borderRadius:50
  },
    
});
