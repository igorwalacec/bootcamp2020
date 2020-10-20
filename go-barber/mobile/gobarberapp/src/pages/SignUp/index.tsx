import React, {useRef} from 'react';
import { View, ScrollView, Image, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, BackToSignInButton, BackToSignInButtonText } from './styles';

import logoImg from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  return (
    <>
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1}}>
        <Container>
          <Image source={logoImg} />
          <View>
            <Title>Crie sua conta</Title>
          </View>
          <Form ref={formRef} onSubmit={(data)=>{console.log(data)}}>
            <Input name="name" icon="user" placeholder="Nome" />
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />
          </Form>

          <Button
            onPress={() => {
              formRef.current?.submitForm();
            }}
          >
            Entrar
          </Button>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
      <BackToSignInButton onPress={()=> navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#ff9000"/>
        <BackToSignInButtonText>Voltar para logon</BackToSignInButtonText>
      </BackToSignInButton>
    </>
  );
};

export default SignUp;
