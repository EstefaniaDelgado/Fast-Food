import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Header() {
  return (
    <View style={styles.container}>
      <Ionicons name="location-outline" size={20} color="red" />
      <Text style={styles.location}>Bogotá, <Text style={{ fontWeight: 'bold' }}>CO</Text></Text>
      <View style={styles.containerAvatar}>
        <Image
        source={{ uri: 'https://robohash.org/1' }}
        style={styles.avatar}
      />
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
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    
   
  },
  containerAvatar:{
    backgroundColor:'yellow',
   
    borderRadius:50
  }
});
