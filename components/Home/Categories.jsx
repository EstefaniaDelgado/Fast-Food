import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Burguer from '../../assets/images/burguer.svg';
import Dessert from '../../assets/images/desserts.svg';
import HotDog from '../../assets/images/hot-dog.svg';
import IceCream from '../../assets/images/ice-cream.svg';
import Pizza from '../../assets/images/pizza.svg';

const categories = [
  { id: 1, name: 'Burguers', icon: Burguer },
  { id: 2, name: 'Pizzas', icon: Pizza },
  { id: 3, name: 'Hot Dogs', icon: HotDog },
  { id: 4, name: 'Postres', icon: Dessert },
  { id: 5, name: 'Helados', icon: IceCream },
];

export default function Categories() {
  return (
    <View style={{ marginTop: 16 }}>
      <Text style={styles.title}>Categorias</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
      >
        {categories.map((cat) => {
          const Icon = cat?.icon;
          return (
            <TouchableOpacity key={cat.id} style={styles.button}>
              <Text>{cat.name}</Text>
              <Icon width={50} height={50} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: 'bold', marginLeft: 16, marginBottom: 15 },
  scroll: { paddingHorizontal: 16 },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
});
