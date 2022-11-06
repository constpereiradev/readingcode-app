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
            backgroundColor: 'grey',
          }
        }}
        />
    
       <Stack.Screen
       //Rota Tutoriais
         name="Tutoriais"
         component={Tutoriais}

         options = {{
          title: 'Tutoriais',
          headerStyle: {
            backgroundColor: 'grey',
          }
         }}
       />

       <Stack.Screen
       //Rota Html
        name='Html'
        component={Html}

        options = {{
          title: '',
          headerStyle: {
            backgroundColor: 'grey',
          }
         }}
       />

       <Stack.Screen
       //Rota Css
        name='Css'
        component={Css}

        options = {{
          title: '',
          headerStyle: {
            backgroundColor: 'grey',
          }
         }}
       />

        <Stack.Screen
        //Rota Javascript
        name='Javascript'
        component={Javascript}

        options = {{
          title: '',
          headerStyle: {
            backgroundColor: 'grey',
          }
         }}
        />

        <Stack.Screen
        //Rota Primeiro tutorial HTML
        name='PrimeiroTutorialHtml'
        component={PrimeiroTutorialHtml}

        options = {{
          title: '',
          headerStyle: {
            backgroundColor: 'grey',
          }
         }}
       
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
     }}>Entenda os princípios da tecnologia e comece seus projetos.</Text>

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
     }} showsVerticalScrollIndicator={false}>

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

     <ScrollView showsVerticalScrollIndicator={false}>
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style ={{
        display: 'flex',
        flexDirection: 'column',
        padding: 25,
      }}>

          <Text style = {{
          fontSize: 24,
          margin: 5
        }}>O que é HTML</Text>

        <Text style = {{
          fontSize: 20,
          color: 'grey',
          margin: 5,
          textAlign: 'justify'
        }}>
          HTML significa HiperText Markup Language,
          traduzindo para português: Linguagem de Marcação De
          Hipertexto. O HTML é essencial e o básico do
          desenvolvimento web, deixando a página organizada e não
          somente com textos soltos. Logo, o HTML serve para dar
          sentido à sua página web.
        </Text>

        <Text style = {{
          fontSize: 20,
          color: 'grey',
          margin: 5,
          textAlign: 'justify'
        }}>
          O HTML pode possuir textos, imagens, vídeos, arquivos,
          botões, caixas de inputs, entre outras grandes 
          funcionalidades. Toda a estrutura de um site vem do HTML:
          as fontes, organização de informações. É muito comum ouvir
          por aí que o HTML é o esqueletodo site, e essa é a mais
          pura verdade! Sem o HTML, as informações ficariam
          totalmente confusas em qualquer página web, se
          tornando apenas um arquivo .txt.
        </Text>

        <Text style = {{
          fontSize: 20,
          color: 'grey',
          margin: 5,
          textAlign: 'justify'
        }}>
          O HTML possui a extensão .html ou .hml, podendo ser um
          arquivo de qualquer nome, mas, no GitHub, por exemplo, é
          necessário haver o arquivo principal denominado "index.html",
          para indicar à plataforma que o seu projeto se inicia naquela
          página, mesmo que haja linkagem para muitas outras.
        </Text>

        <Text style = {{
          fontSize: 20,
          color: 'grey',
          margin: 5,
          textAlign: 'justify'
        }}>
          Siga para o próximo artigo para entender sobre as tags HTML, 
          é lá onde você precisa ter maior atenção e prática.
        </Text>
        </View>

        <TouchableOpacity style = {{
          backgroundColor: '#28D967',
          width: 300,
          height: 40,
          margin: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          overflow: 'hidden'
        }}>

          <Text style ={{
            color: 'white',
            textAlign: 'center',
            fontSize: 20
          }}>Próximo artigo</Text>
          
        </TouchableOpacity>

        
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
