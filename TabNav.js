import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tap.Screen name="Home" component={Home} />
      <Tap.Screen name="Settings" component={SettingsPage} />
      <Tap.Screen name="Suscripcion" component={Subscription} />
    </Tab.Navigator>
  );
}
