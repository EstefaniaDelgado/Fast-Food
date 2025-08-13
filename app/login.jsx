import AntDesign from '@expo/vector-icons/AntDesign';
import Checkbox from 'expo-checkbox';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FastFoodBackground from '../assets/images/fast-food.png';

export default function LoginScreen() {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  return (
    <ImageBackground
      style={styles.background}
      source={FastFoodBackground}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Iniciar sesión</Text>
          <Text style={styles.subtitle}>Bienvenido</Text>
          <TouchableOpacity
            style={styles.buttonGoogle}
            onPress={() => router.replace('/(home)')}
          >
            <AntDesign name="google" size={24} color="white" />
            <Text style={styles.buttonText}>Iniciar Sesión con Google</Text>
          </TouchableOpacity>

          <View style={styles.containerLine}>
            <View style={styles.line} />
            <Text style={styles.textOption}>Ó</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.box}>
            <View>
              <Text style={styles.label}>Correo</Text>
              <TextInput
                style={styles.input}
                placeholder="Ej: nombre@mail.com"
                keyboardType="email-address"
              />
            </View>
            <View>
              <Text style={styles.label}>Contraseña</Text>
              <TextInput
                style={styles.input}
                placeholder="•••••••••••"
                secureTextEntry
              />
              <View style={styles.containerCheckbox}>
                <View style={styles.layout}>
                  <Text>Recuerdame</Text>
                  <Checkbox
                    value={isChecked}
                    onValueChange={setIsChecked}
                    color={isChecked ? '#4630EB' : undefined}
                  />
                </View>
                <Text style={{ color: '#4630EB' }}>Olvide mi contraseña?</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => router.replace('/(home)')}
            >
              <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 8,
                marginTop: 5,
              }}
            >
              <Text>Sin cuenta aún?</Text>
              <Text style={{ color: '#4630EB' }}>Create una</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '700',
  },
  containerLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  textOption: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#6b6666ff',
  },
  box: {
    padding: 5,
  },
  label: {
    fontSize: 14,
    color: '#555',
    paddingVertical: 3,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  buttonGoogle: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  containerCheckbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  layout: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    gap: 8,
  },
});
