import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddAppointment from './screens/AddAppointment';
import EditAppointment from './screens/EditAppointment';
import HomeScreen from './screens/HomeScreen';
import PatientScreen from './screens/PatientScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Patients"
          component={HomeScreen}
          options={{ title: 'Пацієнти' }}
        />
        <Stack.Screen
          name="Patient Card"
          component={PatientScreen}
          options={{ title: 'Картка піцієнта' }}
        />
        <Stack.Screen
          name="Edit appointment"
          component={EditAppointment}
          options={{ title: 'Редагувати призначення' }}
        />
        <Stack.Screen
          name="Add appointment"
          component={AddAppointment}
          options={{ title: 'Додати призначення' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
