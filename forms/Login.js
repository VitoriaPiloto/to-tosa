import { View, TouchableOpacity, Text, StyleSheet, TextInput} from 'react-native';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';

const Login = ({ navigation }) => {
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');

  const {login} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={{ alignSelf: 'center' }}>
        <Text style={styles.texto}>Login</Text>
        <TextInput style={styles.input} 
          onChangeText={(text) => setUser(text)}
          value={user}/>

        <Text style={styles.texto}>Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          onChangeText={(text) => setSenha(text)}
          value={senha}
        />
        <View>
          <TouchableOpacity style={styles.botao} 
            onPress={() => {
              login(user, senha, navigation);
            }}
          >
            <Text style={styles.textoEntrar}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
            <Text style={styles.textoCadastro}>Criar Cadastro</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 24,
    marginBottom: 3,
    color: '#FF5579',
    marginTop: 50,
    fontWeight: 'bold',
  },
  input: {
    paddingLeft: 5,
    fontSize: 18,
    borderColor: '#FF5579',
    borderWidth: 1,
    borderRadius: 5,
    width: 334.19,
    height: 48.86,
    outlineColor: '#FF5579',
  },
  botao: {
    alignSelf: 'center',
    backgroundColor: '#FF5579',
    marginTop: 20,
    paddingLeft: 20,
    paddingTop: 5,
    paddingRight: 20,
    paddingBottom: 5,
    borderRadius: 5,
  },
  textoEntrar: {
    fontSize: 24,
    color: 'white',
  },
  textoCadastro: {
    marginTop: 10,
    fontSize: 18,
    color: '#FFA037',
    alignSelf: 'center',
  },
});

export default Login;
