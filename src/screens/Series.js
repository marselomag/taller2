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
import infor from '../data/series.data';
import YoutubePlayer from 'react-native-youtube-iframe';
export default function Series() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');
  const openModal = videoId => {
    setSelectedVideo(videoId);
    setModalVisible(true);
    console.log(videoId, modalVisible);
  };
  return (
    <ScrollView style={styles.fondo}>
      <View style={styles.title_div}>
        <Text style={styles.titulo}>Series</Text>
      </View>
      {infor.map((section, index) => {
        return (
          <View key={index}>
            <Text style={styles.categoria}>{section.title}</Text>
            <ScrollView>
              {section.peliculas.map((img, index2) => {
                return (
                  <View key={index2} style={styles.flex_cont}>
                    <TouchableHighlight onPress={() => openModal(img.url)}>
                      <View style={styles.img}>
                        <Image style={styles.image} source={img.img} />
                      </View>
                    </TouchableHighlight>
                    <View style={styles.side_text}>
                      <Text style={styles.datos}>{img.title}</Text>
                      <Text style={styles.datos}>{img.temp}</Text>
                    </View>
                  </View>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 110,
    width: 150,
    backgroundColor: 'black',
    flexBasis: '49%',
  },
  image: {
    height: null,
    width: null,
    flex: 1,
    resizeMode: 'contain',
  },
  side_text: {
    flex: 2,
    backgroundColor: 'black',
    flexBasis: '49%',
    paddingLeft: 10,
  },
  flex_cont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
  datos: {
    color: 'white',
  },
  categoria: {
    color: 'white',
    paddingBottom: 10,
    paddingTop: 10,
  },
});
