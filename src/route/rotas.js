import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Inicio from '../view/inicio'
import Sinopse from '../view/sinopse'

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
 return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen  
          name="Inicio" 
          component={Inicio} 
          options={{headerShown: false}}/>
        <Stack.Screen  
          name="Sinopse" 
          component={Sinopse} 
          options={{headerShown: false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}