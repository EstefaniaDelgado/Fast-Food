import { StyleSheet, Text, View } from 'react-native';

const burgers = [
  { id: 1, name: 'Burguer Doble Cheddar', price: 12.56 },
  { id: 2, name: 'Burguer Pig', price: 12.56 },
];

export default function PopularFood() {
  return (
    <View style={{ marginTop: 16, paddingHorizontal: 16 }}>
      <Text style={styles.title}>Hamburguesas populares</Text>
      <View style={styles.list}>
        {burgers.map((item) => (
          <View key={item.id} style={styles.card}>
            {/* <Image source={item.image} style={styles.image} /> */}
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  list: { flexDirection: 'row', gap: 12 },
  card: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 16,
    alignItems: 'center',
    flex: 1,
  },
  image: { width: 80, height: 80, marginBottom: 8 },
  name: { fontSize: 14, textAlign: 'center' },
  price: { fontSize: 14, fontWeight: 'bold', marginTop: 4 },
});
