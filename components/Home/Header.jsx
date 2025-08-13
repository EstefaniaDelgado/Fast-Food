import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import WomanYoung from '../../assets/images/woman-young.svg';
import { router } from 'expo-router';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLocation}>
        <Ionicons name="location-outline" size={20} color="red" />
        <Text style={styles.location}>
          Bogotá, <Text style={{ fontWeight: 'bold' }}>CO</Text>
        </Text>
        <AntDesign name="down" size={20} color="red" />
      </View>

      <TouchableOpacity style={styles.containerAvatar} onPress={()=>router.push('/login')}>
        <WomanYoung width={60} height={60} />
      </TouchableOpacity>
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
    marginTop: 40,
  },
  containerLocation:{
    flexDirection:'row',
    gap:8,
  },
  location: {
    marginLeft: 8,
    fontSize: 16,
  },
  containerAvatar: {
    borderRadius: 50,
  },
});
