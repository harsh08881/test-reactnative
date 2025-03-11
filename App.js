import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Dummy Screens
const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home Screen</Text>
  </View>
);
const NFTsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>NFTs</Text>
  </View>
);
const ExploreScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Explore</Text>
  </View>
);
const ActivityScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Activity</Text>
  </View>
);
const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings</Text>
  </View>
);

// Create Navigators
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Drawer Navigation (Only for Home)
function HomeDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' }} />
    </Drawer.Navigator>
  );
}

// Bottom Tabs with HomeDrawer
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
            else if (route.name === 'NFTs') iconName = focused ? 'image' : 'image-outline';
            else if (route.name === 'Explore') iconName = focused ? 'search' : 'search-outline';
            else if (route.name === 'Activity') iconName = focused ? 'pulse' : 'pulse-outline';
            else if (route.name === 'Settings') iconName = focused ? 'settings' : 'settings-outline';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#fff', paddingBottom: 5 },
        })}
      >
        <Tab.Screen name="Home" component={HomeDrawer} options={{ headerShown: false }} />
        <Tab.Screen name="NFTs" component={NFTsScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Explore" component={ExploreScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Activity" component={ActivityScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
