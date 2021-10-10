
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Image,
} from 'react-native';

export default function App() {

  const [LadoDeImagen, SetLadoDeImage] = useState(styles.imge);


  const Left = () => {
    SetLadoDeImage(styles.imgL)
  }

  const Base = () => {
    SetLadoDeImage(styles.imgA)
  }

  const Right = () => {
    SetLadoDeImage(styles.imgR)
  }

  const imgA = () => {
    SetLadoDeImage(styles.imgA)
  }

  return (
    <View style={styles.container}>

      <View style={{ flex: 2, backgroundColor: "#343434", alignItems: 'center', justifyContent: 'center' }} >

        <Image
          source={require("./img/unknown.png")}
          style={LadoDeImagen}
        />

      </View>

      <View style={{ flex: 1, backgroundColor: 'green' }}>

        <View style={{ flex: 2, backgroundColor: '#343434', flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button title='     <=     ' color='orange' onPress={Left} />

          <Button title='Aparece' color='black' onPress={Base} />

          <Button title='     =>     ' color='orange' onPress={Right} />

        </View>

        <View style={{ flex: 1, backgroundColor: '#343434', alignItems: 'stretch', justifyContent: 'center' }}>
          <Button title='Centrar' color='blue' alignItems='center' onPres={Base} />
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  imge: {
    opacity: 0
  },
  imgL: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    width: 250,
    resizeMode: 'contain'
  },
  imgR: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    width: 250,
    resizeMode: 'contain'
  },
  imgA: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 250,
    resizeMode: 'contain'
  }

});
