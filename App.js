import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddAppointment from './screens/AddAppointment';
import AddPatient from './screens/AddPatient';
import DentalFormula from './screens/DentalFormula';
import EditAppointment from './screens/EditAppointment';
import EditPatient from './screens/EditPatient';
import HomeScreen from './screens/HomeScreen';
import PatientScreen from './screens/PatientScreen';
import PatientsList from './screens/PatientsList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Patients"
          component={HomeScreen}
          options={{ title: 'Прийоми' }}
        />
        <Stack.Screen
          name="Patients list"
          component={PatientsList}
          options={{ title: 'Пацієнти' }}
        />
        <Stack.Screen
          name="Add patient"
          component={AddPatient}
          options={{ title: 'Додати пацієнта' }}
        />
        <Stack.Screen
          name="Edit patient"
          component={EditPatient}
          options={{ title: 'Редагувати піцієнта' }}
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
        <Stack.Screen
          name="Dental formula"
          component={DentalFormula}
          options={{ title: 'Фомула зубів' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
