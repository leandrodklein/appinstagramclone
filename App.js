
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

import Lista from './src/Lista';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      feed: [
        {
          id: '1', 
          nome: 'João', 
          descricao: 'Mais um dia de muitos bugs :)', 
          imgperfil: '', 
          imgPublicacao: '',  
          likeada: true, 
          likers: 1
         },
        {
          id: '2', 
          nome: 'Maria', 
          descricao: 'Isso sim é ser raiz!!!!!', 
          imgperfil: '', 
          imgPublicacao: '', 
          likeada: false, 
          likers: 0
        },
        {
          id: '3', 
          nome: 'José', 
          descricao: 'Bora trabalhar Haha', 
          imgperfil: '', 
          imgPublicacao: '',  
          likeada: false, 
          likers: 3
        },
        {
          id: '4', 
          nome: 'Ana', 
          descricao: 'Isso sim que é TI!', 
          imgperfil: '', 
          imgPublicacao: '', 
          likeada: false, 
          likers: 1
        },
        {
          id: '5', 
          nome: 'Angélica', 
          descricao: 'Boa tarde galera do insta...', 
          imgperfil: '', 
          imgPublicacao: '',
          likeada: false, 
          likers: 32
        }
      ]
     };
 
  }

  render() {
    return (
      <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
          source={require('./src/img/logo.png')}
          style={styles.logo}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
          source={require('./src/img/send.png')}
          style={styles.send}
          />
        </TouchableOpacity>
      </View>

      <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      data={this.state.feed}
      renderItem={ ({item}) => <Lista data={item} /> }
      />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
  send:{
    width: 23,
    height: 23
  }

});

export default App;