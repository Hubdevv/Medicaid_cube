import React from 'react'
import { Container,Form,FormButton,FormContent,FormH1,FormInput,FormWrap, Icon, Text,FormLabel } from './signinElements'

const SignIn = () => {
    return (
        <>
         <Container>
             <FormWrap>
                 <Icon to="/">Medicaid</Icon>
                 <FormContent>
                     <Form action="#">
                      <FormH1>Connecter sur votre compte</FormH1>
                      <FormLabel htmlFor='for'>Email</FormLabel>
                      <FormInput type='email' required/>
                      <FormLabel htmlFor='for'>Mot de passe</FormLabel>
                      <FormInput type='password' required/>
                      <FormButton type='submit'>Continuer</FormButton>
                      <Text>Mot de passe oublié?</Text>

                     </Form>
                 </FormContent>
             </FormWrap>
             
             </Container>   
        </>
    )
}

export default SignIn
