import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { ScrollView, ScrollViewBase, StyleSheet, Text, TextInput, View, ViewPagerAndroidBase, Button } from 'react-native';

 
//Navegação entre páginas.
const Stack = createNativeStackNavigator();
 
const Readingcode = () => {
 
 return (
   <NavigationContainer>
     <Stack.Navigator>
 
       <Stack.Screen
 
       //Rota Página Inicial
         name="PaginaInicial"
         component={PaginaInicial} //Tela que irá
         //Header
         options = {{
          title:'readingcode'
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
     </Stack.Navigator>
   </NavigationContainer>
 );
};
 
//Página inicial do app que leva à página de tutoriais.
const PaginaInicial = ({ navigation }) => {
 
 return (
   <View style={estilos.pagina_inicial}>
     <Text>Bem vindo ao readingcode-app versão 1.0</Text>
     <Button
       title='Entrar'
       onPress={() =>
         navigation.navigate('Tutoriais')
      
       }
     />
   </View>
 )
}
 
 
//Página de tutoriais que é acessada via navegação.
const Tutoriais = ({navigation, route}) => {
 return (
   <View style={estilos.tutoriais}>

     <TextInput
      style={{
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 1,
        height: 40,
        width: 380,
        padding: 5,
        margin: 50,
        borderRadius: 5,
      }}

      placeholder='Digite a tecnologia que deseja aprender'
     />

     <ScrollView style={{
      display: 'flex',
      flexDirection: 'column'
     }}>
    
        <View style={estilos.tutoriais.tecnologia}>

          <View style={estilos.tutoriais.tecnologia.titulo}>
            <Text style={
              estilos.tutoriais.tecnologia.titulo.fonte
              }>Nome da Tecnologia</Text>

          </View>

          <View style={estilos.tutoriais.tecnologia.botao}>
            <Button
              color='#3B3936'
              title='Ver tutorial'
              onPress={() =>
                navigation.navigate('Html')
              }
            />
          </View>
        </View>

        <View style={estilos.tutoriais.tecnologia}>

          <View style={estilos.tutoriais.tecnologia.titulo}>
            <Text style={
              estilos.tutoriais.tecnologia.titulo.fonte
              }>Nome da Tecnologia</Text>

          </View>

          <View style={estilos.tutoriais.tecnologia.botao}>
            <Button
              color='#3B3936'
              title='Ver tutorial'
              onPress={() =>
                alert('Estamos em manutenção.')
              }
            />
          </View>
        </View>

        <View style={estilos.tutoriais.tecnologia}>

          <View style={estilos.tutoriais.tecnologia.titulo}>
            <Text style={
              estilos.tutoriais.tecnologia.titulo.fonte
              }>Nome da Tecnologia</Text>

          </View>

          <View style={estilos.tutoriais.tecnologia.botao}>
            <Button
              color='#3B3936'
              title='Ver tutorial'
              onPress={() =>
                alert('Estamos em manutenção.')
              }
            />
          </View>
        </View>

     </ScrollView>
     
   </View>
 )
}
 

const Html = ({navigation, route}) => {

  return (
    <View style={estilos.tutoriais}>
      <Text>Tutoriais HTML</Text>
    </View>
  )

}

//Estilização
const estilos = StyleSheet.create({
 
  //Pagina Inicial
 pagina_inicial:{
   flex: 1,
   backgrounColor: 'aqua',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center'
 },
 
 //Tutorial
 tutoriais: {
   flex: 1,
   backgroundColor: 'white',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'flex-start',
   alignItems: 'center',

   tecnologia: {
      backgroundColor: '#B2BEBF',
      width: 380,
      height: 380,
      borderRadius: 5,
      margin: 10,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,

      botao: {
        width: 200,
        overflow: 'hidden',
        borderRadius: 5,
      },

      titulo: {
        marginTop: 140,

        fonte: {
          fontSize: 30
        }
      }
    }
   }
,
 
});
 



//Utiliza a função que criei.
module.exports = Readingcode;