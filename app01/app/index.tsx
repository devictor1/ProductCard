import React from 'react';
import { Pressable, Linking, View, Text, Image, StyleSheet } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';



export default function ProductCard() {
  const colorScheme = useColorScheme();
  const handlePress = (url: string) => {
    if (url) {
      Linking.openURL(url).catch(err => console.error("Erro ao abrir o link: ", err));
    } else {
      console.error("URL inválido");
    }
  };
  
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://i.imgur.com/n4LXp4b.jpeg' }} 
        style={styles.productImage} 
      />
      <Text style={styles.name}>Estrogonofe de Frango</Text>
      <Text style={styles.description}>
        Aproveite o melhor Estrogonofe da região com essa deliciosidade feita de frango, cebola, alho, cebolinha, pimenta, molho de tomate, e nosso tempero especial, muito amor!
      </Text>
      <Text style={styles.description}>
        Servido acompanhado por arroz branco e batata palha, é de cair o queixo!
      </Text>
      <Pressable 
        onPress={() => handlePress('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'lightblue' : 'transparent'
          }
        ]}
      >
      <Text style={styles.link}>
        Comprar!
      </Text>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  link: {
    fontSize: 18,
    color: 'blue',
    textAlign: 'center',
    textDecorationLine: 'underline',
    padding: 5,
  },
});