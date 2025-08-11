import { Image, StyleSheet, Text, View } from 'react-native';
import BurguerCheddar from '../../assets/images/burguer-cheddar.png';
import BurguerPig from '../../assets/images/burguer-pig.png';

const burgers = [
  { id: 1, name: 'Burguer Doble Cheddar', price: 12.56, image: BurguerCheddar },
  { id: 2, name: 'Burguer Pig', price: 12.56, image: BurguerPig },
  { id: 3, name: 'Burguer Doble Cheddar', price: 12.56, image: BurguerCheddar },
  { id: 4, name: 'Burguer Pig', price: 12.56, image: BurguerPig },
];

export default function PopularFood() {
  return (
    <View style={{ marginTop: 16, paddingHorizontal: 16 }}>
      <Text style={styles.title}>Hamburguesas populares</Text>
      <View style={styles.list}>
        {burgers.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  list: { flexDirection: 'row', gap: 12, flexWrap: 'wrap' },
  card: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
    alignItems: 'center',
    width: '48%',
  },
  image: { width: 80, height: 70, marginBottom: 8 },
  name: { fontSize: 14, textAlign: 'center' },
  price: { fontSize: 14, fontWeight: 'bold', marginTop: 4 },
});
