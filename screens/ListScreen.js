// ListScreen.js
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Card from '../components/Card';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ListScreen = ({navigation}) => {
  const data = [
    {
      id: 1,
      name: 'Dr. John Doe',
      image:
        'https://static.vecteezy.com/system/resources/previews/027/312/426/original/portrait-of-a-doctor-with-stethoscope-isolated-essential-workers-avatar-icons-characters-for-social-media-user-profile-website-and-app-3d-render-illustration-png.png',
    },
    {
      id: 2,
      name: 'Dr. Janiffer Smith',
      image:
        'https://static.vecteezy.com/system/resources/previews/027/312/338/original/portrait-of-a-female-doctor-with-stethoscope-isolated-essential-workers-avatar-icons-characters-for-social-media-user-profile-website-and-app-3d-render-illustration-png.png',
    },
  ];

  const handleCardPress = () => {
    navigation.navigate('Form');
  };

  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginVertical: 10,
          marginLeft: 10,
        }}>
        Doctors
      </Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Card
            name={item.name}
            image={item.image}
            onPress={() => handleCardPress(item.id)}
          />
        )}
      />
    </View>
  );
};

export default ListScreen;
