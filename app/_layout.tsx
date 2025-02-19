import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './customDrawerContent';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import Home from './home';
import Setting from './setting';
import Article from './article';
import Chat from './chat';
import Help from './help';

const Drawer = createDrawerNavigator();

export default function RootLayout() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Setting" component={Setting} />
          <Drawer.Screen name="Article" component={Article} />
          <Drawer.Screen name="Help" component={Help} />
          <Drawer.Screen name="Chat" component={Chat} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
