/* eslint-disable react/self-closing-comp */
import React, {useState} from 'react';
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
import infor from '../data/peliculas.data';
export default function Peliculas() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');
  const openModal = videoId => {
    setSelectedVideo(videoId);
    setModalVisible(true);
    console.log(videoId, modalVisible);
  };
  return (
    <View style={styles.fondo}>
      <View style={styles.title_div}>
        <Text style={styles.titulo}>Peliculas</Text>
      </View>
      {infor.map((section, index) => {
        return (
          <View key={index}>
            <Text style={styles.categoria}>{section.title}</Text>
            <ScrollView horizontal style={styles.first_cat}>
              {section.peliculas.map((img, index2) => {
                return (
                  <TouchableHighlight
                    key={index2}
                    onPress={() => openModal(img.url)}>
                    <View style={styles.img}>
                      <Image style={styles.image} source={img.img} />
                    </View>
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          </View>
        );
      })}
      <Modal transparent={true} animationType="slide" visible={modalVisible}>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <YoutubePlayer
              horizontal
              height={300}
              play={false}
              videoId={selectedVideo}
            />
            <Button
              title="Cerrar"
              onPress={() => {
                setModalVisible(false);
              }}></Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 115,
    width: 200,
    backgroundColor: 'black',
  },
  image: {
    height: null,
    width: null,
    flex: 1,
    resizeMode: 'contain',
  },
  fondo: {
    height: '100%',
    backgroundColor: '#000',
  },
  titulo: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    fontFamily: 'Century gothic',
  },
  first_cat: {
    backgroundColor: 'black',
    maxHeight: 130,
    paddingBottom: 0,
    marginBottom: 0,
  },
  categoria: {
    color: 'white',
    paddingBottom: 10,
    paddingTop: 10,
  },
  title_div: {
    backgroundColor: '#191919',
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
});
