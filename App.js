import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditAppointment from './screens/EditAppointment';
import HomeScreen from './screens/HomeScreen';
import PatientScreen from './screens/PatientScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Пацієнти" component={HomeScreen} />
        <Stack.Screen name="Картка піцієнта" component={PatientScreen} />
        <Stack.Screen
          name="Редагувати призначення"
          component={EditAppointment}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
