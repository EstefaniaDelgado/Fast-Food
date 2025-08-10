import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const categories = [
  { id: 1, name: 'Burguer' },
  { id: 2, name: 'Pizza' },
  { id: 3, name: 'Hot Dog' },
];

export default function Categories() {
  return (
    <View style={{ marginTop: 16 }}>
      <Text style={styles.title}>Categorias</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        {categories.map((cat) => (
          <TouchableOpacity key={cat.id} style={styles.button}>
            <Text>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: 'bold', marginLeft: 16, marginBottom: 8 },
//   scroll: { paddingLeft: 16 },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
});
