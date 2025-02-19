import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handlePress = (screen: string) => {
    setSelected(screen);
    navigation.navigate(screen);
  };
  type MenuItem = {
    name: string;
    screen: string;
    icon: keyof typeof MaterialIcons.glyphMap;
  };
  const menuItems: MenuItem[] = [
    { name: 'Home', screen: 'Home', icon: 'home' },
    { name: 'Article', screen: 'Article', icon: 'article' },
    { name: 'Chat', screen: 'Chat', icon: 'chat' },
    { name: 'Setting', screen: 'Setting', icon: 'settings' },
    { name: 'Help', screen: 'Help', icon: 'help' },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://tourismdanang.com/wp-content/uploads/2020/04/62553457_441495056671311_2106223215742287872_o.jpg' }}
          style={styles.profileImage}
        />
        <Text style={styles.username}> Lê Đức Anh</Text>
        <Text style={styles.email}>anhld@gmail.com</Text>
      </View>

      {/* Menu Items */}
      {/* {menuItems.map((item) => (
        <TouchableOpacity
          key={item.name}
          onPress={() => handlePress(item.screen)}
          style={[
            styles.menuItem,
            selected === item.screen ? styles.selectedItem : null, // Đổi màu khi được chọn
          ]}
        >
          <MaterialIcons name={item.icon} size={24} color={selected === item.screen ? "#000" : "#000"} />
          <Text style={styles.menuText}>{item.name}</Text>
        </TouchableOpacity>
        
      ))} */}
      {/* Menu Items */}
{menuItems.map((item) => (
  <View key={item.name}>
        {item.name === "Setting" && <View style={styles.divider} />}

    <TouchableOpacity
      onPress={() => handlePress(item.screen)}
      style={[
        styles.menuItem,
        selected === item.screen ? styles.selectedItem : null, // Đổi màu khi được chọn
      ]}
    >
      <MaterialIcons name={item.icon} size={24} color={selected === item.screen ? "#000" : "#000"} />
      <Text style={styles.menuText}>{item.name}</Text>
    </TouchableOpacity>
    {item.name === "Setting" && <View style={styles.divider} />}

    
  </View>
))}

    </View>
  );
};



const styles = StyleSheet.create({
  header: {
    padding: 20,
    top: 0,
    paddingTop: 50,
    
    backgroundColor: '#AAAAAA',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#FFFFFF',
  },
  email: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  selectedItem: {
    backgroundColor: '#FFFFCC', // Màu vàng khi được chọn
    borderRadius: 5,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 20,
  },
  divider: {
    // marginLeft: 0,
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 20,
    marginVertical: 3,
  },
  
});

export default CustomDrawerContent;
