import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  Modal,
  TouchableHighlight,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {Picker} from '@react-native-picker/picker';
import infor from '../data/peliculas.data';
export default function Peliculas() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');
  const openModal = videoId => {
    setSelectedVideo(videoId);
    setModalVisible(true);
    console.log(videoId, modalVisible);
  };
  const [selectedValue, setSelectvalue] = useState('San Salvador');
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?appid=f944cb027ec3824df5635c28e51d513f&q=${selectedValue}`,
      );
      console.log(response);
    };
    getData();
  }, [selectedValue]);
  return (
    <View>
      <View>Clima </View>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectvalue(itemValue)}>
        <Picker.Item label="Aguilares" value="Aguilares" />
        <Picker.Item label="Apopa" value="Apopa" />
        <Picker.Item label="Ayutuxtepeque" value="Ayutuxtepeque" />
        <Picker.Item label="Ciudad Delgado" value="Ciudad Delgado" />
        <Picker.Item label="Cuscatancingo" value="Cuscatancingo" />
        <Picker.Item label="El Paisnal" value="El Paisnal" />
        <Picker.Item label="Guazapa" value="Guazapa" />
        <Picker.Item label="Ilopango" value="Ilopango" />
        <Picker.Item label="Mejicanos" value="Mejicanos" />
        <Picker.Item label="Nejapa" value="Nejapa" />
        <Picker.Item label="Panchimalco" value="Panchimalco" />
        <Picker.Item label="Rosario de Mora" value="Rosario de Mora" />
        <Picker.Item label="San Marcos" value="San Marcos" />
        <Picker.Item label="San Martín" value="San Martín" />
        <Picker.Item label="San Salvador" value="San Salvador" />
        <Picker.Item
          label="Santiago Texacuangos"
          value="Santiago Texacuangos"
        />
        <Picker.Item label="Santo Tomás" value="Santo Tomás" />
        <Picker.Item label="Soyapango" value="Soyapango" />
        <Picker.Item label="Tonacatepeque" value="Tonacatepeque" />
      </Picker>
    </View>
  );
}
