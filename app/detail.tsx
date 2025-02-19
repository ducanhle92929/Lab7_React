import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

type RootParamList = {
  HomeScreen: undefined;
  Detail: { name: string };
};

type DetailScreenNavigationProp = NativeStackNavigationProp<RootParamList, 'Detail'>;
type DetailScreenRouteProp = RouteProp<RootParamList, 'Detail'>;

export default function DetailScreen() {
  const navigation = useNavigation<DetailScreenNavigationProp>();
  const route = useRoute<DetailScreenRouteProp>();
  const { name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào bạn, {name}</Text>
      <Text style={styles.subtitle}>Id của bạn là, 123</Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>TRỞ LẠI BẢNG - GOBACK</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: 'HomeScreen' }],
        })}>
        <Text style={styles.buttonText}>TRỞ LẠI BẢNG - RESET</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>TRỞ LẠI BẢNG - POP</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.buttonText}>TRỞ LẠI BẢNG - POPTOTOP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    // alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0066FF',
    marginBottom: 5,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#0066FF',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#0066FF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});