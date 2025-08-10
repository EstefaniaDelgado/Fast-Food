import { Stack, useRouter } from 'expo-router';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MainImage from '../assets/images/cocina.jpg';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }}  />
      <ImageBackground
        source={MainImage}
        resizeMode="cover"
        style={styles.container}
      >
        <StatusBar barStyle={'default'} backgroundColor="transparent" translucent />
        <View style={styles.card}>
          <Text style={styles.title}>
            La forma más rápida de Obtener tu{' '}
            <Text style={{ color: 'red' }}>Comida</Text>
          </Text>
          <Text style={styles.subtitle}>
            Nuestro trabajo es ofrecerte el mejor servicio para que tengas el
            plato que gustas lo más rápido posible
          </Text>
          <TouchableOpacity style={styles.button} onPress={()=>router.push('/home')} >
            <Text style={styles.buttonText}>Comencemos</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  card: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 180,
    borderTopRightRadius: 180,
    marginTop: -20,
    elevation: 3,
    alignItems: 'center',
    width: '100%',
    height: '50%',
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    gap:10
  },
  title: {
    fontSize: 27,
    width:'80%',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

/*  onPress={() => router.push('/home')} */
