import {View, TouchableOpacity, Text, StyleSheet ,TextInput, Dimensions, Platform, StatusBar, Image} from 'react-native';
import React, {useState, useContext} from 'react';
import { AuthContext } from '../AuthContext';

const Registro = ({navigation}) => {
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  
  const {register} = useContext(AuthContext);

    return (
    <View style={styles.container}>
      <View style={{alignSelf:'center'}}>
        <Text style={styles.texto}>Login</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={(text) => setUser(text)}
          value={user}/>

        <Text style={styles.texto}>Senha</Text>
        <TextInput 
          style={styles.input}
          secureTextEntry
          onChangeText={(text) => setSenha(text)}
          value={senha}/>

        <Text style={styles.texto}>Email</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={(text) => setEmail(text)}
          value={email}/>

        <Text style={styles.texto}>Telefone</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={(text) => setTel(text)}
          value={tel}/>
        <View>
          <TouchableOpacity 
            style={styles.botao} 
            onPress={() => {
              register(user, senha, email, tel, navigation);
            }}
          >
            <Text style={styles.textoEntrar}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
  },
  texto:{
    fontSize: 24,
    marginBottom:3,
    color:'#FF5579',
    marginTop: 20,
    fontWeight:'bold',
  },
  input:{
    paddingLeft:5,
    fontSize: 18,
    borderColor:'#FF5579',
    borderWidth: 1,
    borderRadius: 5,
    width: 334.19,
    height: 48.86,
    outlineColor: '#FF5579',
  },
  botao:{
    alignSelf:'center',
    backgroundColor:'#FF5579',
    marginTop: 20,
    paddingLeft:20,
    paddingTop:5,
    paddingRight:20,
    paddingBottom:5,
    borderRadius:5,
  },
  textoEntrar:{
    fontSize: 24,
    color:'white',
  },
});
export default Registro;