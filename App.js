import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import {ScrollView, ScrollViewBase, StyleSheet, Text, TextInput, View, ViewPagerAndroidBase, Button, Image, TouchableOpacity } from 'react-native';

 
//Navegação entre páginas.
const Stack = createNativeStackNavigator();
 
const Readingcode = () => {
 
 return (
   <NavigationContainer>
     <Stack.Navigator>
 
       <Stack.Screen
 
       //Rota Página Inicial
         name="Pagina Inicial"
         component={PaginaInicial} //Tela que irá
         //Header
         options = {{
          title:'',
          headerStyle: {
            backgroundColor: '#262626',
            display: 'hidden'
          }
        }}
        />
    
       <Stack.Screen
       //Rota Tutoriais
         name="Tutoriais"
         component={Tutoriais}

         options = {{
          title: 'readingcode'
         }}
       />

       <Stack.Screen
       //Rota Html
        name='Html'
        component={Html}

        options = {{
          title: 'readingcode'
        }}
       />

       <Stack.Screen
       //Rota Css
        name='Css'
        component={Css}
       />

        <Stack.Screen
        //Rota Javascript
        name='Javascript'
        component={Javascript}
        />

        <Stack.Screen
        //Rota Primeiro tutorial HTML
        name='PrimeiroTutorialHtml'
        component={PrimeiroTutorialHtml}
       
        />
     </Stack.Navigator>
   </NavigationContainer>
 );
};
 
//Página inicial do app que leva à página de tutoriais.
const PaginaInicial = ({ navigation }) => {
 
 return (
   <View style={{
    flex: 1,
    backgroundColor: '#2d2d2d',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
   }}>

    <View style ={{
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'center',
       marginBottom: 80
    }}>

      <Text style={{
        color: '#28D967',
        fontSize: 20
      }}>readingcode</Text>

      <Text style = {{
        color: '#727171',
        fontSize: 14
      }}>app</Text>

    </View>
      
     <Image
     style = {{
      width: 150,
      height: 290,
      marginBottom: 50
     }}
      source={{
        uri:'https://ouch-cdn2.icons8.com/R97QkQ6X-7bNXymb1rZyQBpiJ-3G9AZi4bkPbeA0GSA/rs:fit:256:494/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTEv/Njc0NmNjYzktYjNl/My00NTFjLWJhZTgt/ZjcyMzJhODNkOWNl/LnBuZw.png'
      }}
     />

     <Text style={{
      color: 'white',
      fontSize: 22,
      width: 350,
      fontStyle: 'bolder',
      textAlign: 'center',
      marginBottom: 80
     }}>Entenda os princípios da tecnologia, comece seus projetos.</Text>

     <View style={estilos.pagina_inicial.botao}>
     <Button
      color={'#28D967'}
       title='Entrar'
       onPress={() =>
         navigation.navigate('Tutoriais')
      
       }
     />
     </View>
     
   </View>
 )
}
 
 
//Página de tutoriais que é acessada via navegação.
const Tutoriais = ({navigation, route}) => {
 return (
   <View style={estilos.tutoriais}>

     <TextInput
      style={{
        backgroundColor: '#FFFFFF',
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 1,
        height: 40,
        width: 380,
        paddingLeft: 20,
        margin: 50,
        borderRadius: 5,
        border: 'none'
      }}

      placeholder='Digite a tecnologia que deseja aprender'
     />

     <ScrollView style={{
      display: 'flex',
      flexDirection: 'column'
     }}>

      <View style ={estilos.tutoriais.tecnologias}>
      <TouchableOpacity style={{
        width: 100,
        height: 100,
        backgroundColor: '#27BF5B',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
      }}
      onPress = {() => {
        navigation.navigate('Html');
      }}
      >
          <Text>HTML</Text>
      </TouchableOpacity>  

      <TouchableOpacity style={{
        width: 100,
        height: 100,
        backgroundColor: '#27BF5B',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
      }}
      
      onPress = {() => {
        navigation.navigate('Css');
      }}>
          <Text>CSS</Text>
      </TouchableOpacity> 

      <TouchableOpacity style={{
        width: 100,
        height: 100,
        backgroundColor: '#27BF5B',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
      }}
      onPress = {() => {
        navigation.navigate('Javascript');
      }}
      >
          <Text>JavaScript</Text>

          
      </TouchableOpacity>       

      </View>

      
     </ScrollView>
     
   </View>
 )
}
 
//Página de tutoriais HTML
const Html = ({navigation, route}) => {

  return (
    <View style={estilos.tutoriais}>
      <TextInput
      style={{
        backgroundColor: '#FFFFFF',
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 1,
        height: 40,
        width: 380,
        paddingLeft: 20,
        margin: 50,
        borderRadius: 5,
        border: 'none'
      }}

      placeholder='Procure por um artigo específico'
     />

     <ScrollView>
     <TouchableOpacity style={{
        width: 380,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 20,
        margin: 20,
      }}
      onPress = {() => {
        navigation.navigate('PrimeiroTutorialHtml')
      }}
      >
          <Text style ={{
            fontSize: 20
          }}>O que é HTML?</Text>

          <Text style ={{
            color: 'grey',
          }}>Leitura rápida.</Text>
          
      </TouchableOpacity> 

     </ScrollView>
    </View>
  )
}

//Tutorial 1 HTML
const PrimeiroTutorialHtml = ({navigation, route}) => {
  return (
    <View style ={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 25,
    }}>

      <ScrollView>
        <View style ={{
        display: 'flex',
        flexDirection: 'column',
        padding: 25,
      }}>

          <Text style = {{
          fontSize: 24,
          margin: 20
        }}>O que é HTML</Text>

        <Text style = {{
          fontSize: 20,
          color: 'grey',
          margin: 10
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Magni autem maiores iure, odio neque fugit libero blanditiis
          ea dolorum in mollitia esse ipsum alias saepe aliquid provident
          dolores voluptatem quas.
        </Text>

        <Text style = {{
          fontSize: 20,
          color: 'grey',
          margin: 10
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Magni autem maiores iure, odio neque fugit libero blanditiis
          ea dolorum in mollitia esse ipsum alias saepe aliquid provident
          dolores voluptatem quas.
        </Text>
        </View>

      </ScrollView>
      
    </View>
  )
}

//Tutoriais CSS
const Css = ({navigation, route}) => {

  return (
    <View style={estilos.tutoriais}>
      <TextInput
      style={{
        backgroundColor: '#FFFFFF',
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 1,
        height: 40,
        width: 380,
        paddingLeft: 20,
        margin: 50,
        borderRadius: 5,
        border: 'none'
      }}

      placeholder='Procure por um artigo específico'
     />

     <ScrollView>
     <TouchableOpacity style={{
        width: 380,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 20,
        margin: 20,
      }}
      onPress = {() => {
        alert('Estamos em manutenção!');
      }}
      >
          <Text style ={{
            fontSize: 20
          }}>O que é CSS?</Text>

          <Text style ={{
            color: 'grey',
          }}>Leitura rápida.</Text>
          
      </TouchableOpacity> 

     </ScrollView>
    </View>

    
  )

}

//Tutoriais JavaScript
const Javascript = ({navigation, route}) => {

  return (
    <View style={estilos.tutoriais}>
      <TextInput
      style={{
        backgroundColor: '#FFFFFF',
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 1,
        height: 40,
        width: 380,
        paddingLeft: 20,
        margin: 50,
        borderRadius: 5,
        border: 'none'
      }}

      placeholder='Procure por um artigo específico'
     />

     <ScrollView>
     <TouchableOpacity style={{
        width: 380,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 20,
        margin: 20,
      }}
      onPress = {() => {
        alert('Estamos em manutenção!');
      }}
      >
          <Text style ={{
            fontSize: 20
          }}>O que é JavaScript?</Text>

          <Text style ={{
            color: 'grey',
          }}>Leitura rápida.</Text>
          
      </TouchableOpacity> 

     </ScrollView>
    </View>

    
  )

}

//Estilização
const estilos = StyleSheet.create({
 
  //Pagina Inicial
 pagina_inicial:{
   flex: 1,
   backgrounColor: '#262626',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',

   botao: {
    width: 250,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 50
   }
 },
 
 //Tutorial
 tutoriais: {
   flex: 1,
   backgroundColor: '#262626',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'flex-start',
   alignItems: 'center',

   tecnologias: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    },

    html: {
      flex: 1,
      backgrounColor: '#262626',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
  },
});
 



//Utiliza a função que criei.
module.exports = Readingcode;
