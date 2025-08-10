import { Stack } from 'expo-router';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Deliver from '../assets/images/deliver.png';
import Pizzas from '../assets/images/pizza-background.png';
import Header from '../components/Home/Header';
import Categories from '../components/Home/Categories';
import PopularFood from '../components/Home/PopularFood';

const home = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />
      <View style={styles.wrapper}>
        <ImageBackground
          source={Pizzas}
          resizeMode="cover"
          imageStyle={{ borderRadius: 20 }}
        >
          <View style={styles.card}>
            <Text style={styles.title}>
              La forma más rápida de Obtener tu
              <Text style={{ color: 'red'}}>Comida</Text>
            </Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ordernar ahora</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <Image source={Deliver} style={styles.deliver} />
      </View>
      <Categories/>
      <PopularFood/>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap:10,
    backgroundColor: '#f5f5f5',
  },
  wrapper: {
    position: 'relative',
    marginBottom:10,
    alignItems:'center'
  },
  card: {
    overflow: 'hidden',
    borderRadius: 20,
    width: '90%',
    alignItems: 'flex-start',
    gap: 20,
    padding: 10,
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  deliver: {
    height: 180,
    width: 180,
    position: 'absolute',
    right:0,
  },
});
