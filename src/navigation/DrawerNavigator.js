import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import NowPlayingScreen from '../screens/NowPlayingScreen';
import LyricsScreen from '../screens/LyricsScreen';
import ArtistScreen from '../screens/ArtistScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LogoutScreen from '../screens/LogoutScreen';
import CustomDrawer from '../components/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: '#007AFF',
        drawerLabelStyle: {
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Now Playing"
        component={NowPlayingScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="musical-notes-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Lyrics"
        component={LyricsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Artist"
        component={ArtistScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="log-out-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}