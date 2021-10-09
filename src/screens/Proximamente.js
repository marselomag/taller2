import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
export default function Proximamente() {
  return (
    <View style={styles.fondo}>
      <View style={styles.title_div}>
        <Text style={styles.titulo}>Proximamente</Text>
      </View>
      <ScrollView>
        <View style={styles.img}>
          <YoutubePlayer
            horizontal
            height={200}
            play={false}
            videoId={'8g18jFHCLXk'}
          />
        </View>
        <Text style={styles.categoria}>Dune</Text>
        <Text style={styles.categoria}>
          Arrakis, también denominado "Dune", se ha convertido en el planeta más
          importante del universo. A su alrededor comienza una gigantesca lucha
          por el poder que culmina en una guerra interestelar.
        </Text>
        <View style={styles.img}>
          <YoutubePlayer
            horizontal
            height={200}
            play={false}
            videoId={'9ix7TUGVYIo'}
          />
        </View>
        <Text style={styles.categoria}>Matrix 4</Text>
        <Text style={styles.categoria}>
          Cuarta entrega de la franquicia "Matrix" en la que Neo y Trinity se
          embarcarán en una nueva misión.
        </Text>
        <View style={styles.img}>
          <YoutubePlayer
            horizontal
            height={200}
            play={false}
            videoId={'sdKSnELUVl8'}
          />
        </View>
        <Text style={styles.categoria}>Marvel Eternals</Text>
        <Text style={styles.categoria}>
          Los Eternos son una raza de seres inmortales con poderes sobrehumanos
          que han vivido en secreto en la Tierra durante miles de años. Aunque
          nunca han intervenido, ahora una amenaza se cierne sobre la humanidad.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 220,
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
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
