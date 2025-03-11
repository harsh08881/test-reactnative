import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// Dummy Screens
const HomeScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Home Screen</Text>
  </View>
);

const NFTsScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>NFTs</Text>
  </View>
);
const ExploreScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Explore</Text>
  </View>
);
const ActivityScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Activity</Text>
  </View>
);
const SettingsScreen = ({navigation}) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Settings</Text>
    <Text onPress={() => navigation.navigate('LinkedIn')}>
      LinkedIn Accounts
    </Text>
    <Text onPress={() => navigation.navigate('Backup')}>Backup</Text>
    <Text onPress={() => navigation.navigate('Security')}>Security</Text>
    <Text onPress={() => navigation.navigate('DeveloperMode')}>
      Developer Mode
    </Text>
    <Text onPress={() => navigation.navigate('WalletConnect')}>
      Wallet Connect
    </Text>
    <Text onPress={() => navigation.navigate('Devices')}>Devices</Text>
  </View>
);

const LinkedInScreen = () => <Text>LinkedIn Accounts Screen</Text>;
const BackupScreen = () => <Text>Backup Screen</Text>;
const SecurityScreen = () => <Text>Security Screen</Text>;
const DeveloperModeScreen = () => <Text>Developer Mode Screen</Text>;
const WalletConnectScreen = () => <Text>Wallet Connect Screen</Text>;
const DevicesScreen = () => <Text>Devices Screen</Text>;

// Navigators
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const SettingsStack = createNativeStackNavigator();

// Home Drawer
function HomeDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Drawer.Screen
        name="Profile"
        component={HomeScreen}
        options={{title: 'Profile'}}
      />
    </Drawer.Navigator>
  );
}

// Settings Stack
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsHome"
        component={SettingsScreen}
        options={{title: 'Settings'}}
      />
      <SettingsStack.Screen name="LinkedIn" component={LinkedInScreen} />
      <SettingsStack.Screen name="Backup" component={BackupScreen} />
      <SettingsStack.Screen name="Security" component={SecurityScreen} />
      <SettingsStack.Screen
        name="DeveloperMode"
        component={DeveloperModeScreen}
      />
      <SettingsStack.Screen
        name="WalletConnect"
        component={WalletConnectScreen}
      />
      <SettingsStack.Screen name="Devices" component={DevicesScreen} />
    </SettingsStack.Navigator>
  );
}

// Main App
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home-outlined';
                break;
              case 'NFTs':
                iconName = focused ? 'collections' : 'collections-bookmark';
                break;
              case 'Explore':
                iconName = focused ? 'explore' : 'explore-off';
                break;
              case 'Activity':
                iconName = focused ? 'timeline' : 'timeline';
                break;
              case 'Settings':
                iconName = focused ? 'settings' : 'settings-suggest';
                break;
            }

            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {backgroundColor: '#fff', paddingBottom: 5},
        })}>
        <Tab.Screen
          name="Home"
          component={HomeDrawer}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="NFTs"
          component={NFTsScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Activity"
          component={ActivityScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
