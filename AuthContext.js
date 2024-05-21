import { BASE_URL } from './Config';
import React, { createContext } from 'react';
import * as Crypto from 'expo-crypto';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const onConvertSHA = async (senha) => {
    try {
      const hash = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA512,
        senha
      );
      return hash;
    } catch (error) {
      console.error('Error generating SHA512:', error);
    }
  };

  const login = async (user, senha, navigation) => {
    try {
      const hash = await onConvertSHA(senha);

      const response = await fetch(`${BASE_URL}/login`);
      const data = await response.json();
      const userFound = data.items.find(
        (item) => item.cd_login === user && item.senha === hash
      );

      if (userFound) {
        navigation.navigate('Home');
      } else {
        console.error('Usuário não encontrado');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (user, senha, email, tel, navigation) => {
    try {
      const hash = await onConvertSHA(senha);
      const userData = {
        id_login: 1,
        cd_login: user,
        cd_tipo_usuario: 1,
        senha: hash,
        email,
        telefone: tel,
      };

      //Verificando json
      //console.log('Sending the following JSON data:', userData);

      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      // Verificar o status da resposta
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseBody = await response.text();
      //console.log('Response body:', responseBody);

      // Verifica se a resposta não é vazia antes de tentar analisá-la
      const data = responseBody ? JSON.parse(responseBody) : {};

      // Supondo que a resposta contém uma chave 'success' para indicar sucesso
      if (data.success || responseBody === '') {
        navigation.navigate('Login');
      } else {
        console.error('Registration failed', data.message);
      }
    } catch (error) {
      console.error('Error during registration', error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        register,
        login,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
