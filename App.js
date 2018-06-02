import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  Button, 
  View,
  ImageBackground, 
  Image, 
  TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './AppStyles';

export default class App extends React.Component {
  state = {
    text: "",
    todo: []
  };

  addTodo = () => {
    var newTodo = this.state.text;
    if(newTodo) {
      var arr = this.state.todo;
      if(arr.indexOf(newTodo) === -1) {
        arr.push(newTodo);
        this.setState({todo: arr, text: ""});
      } else {
        alert('Todo already exists.');
      }
    } else {
      alert('Field empty.');
    }
  };

  deleteTodo = (t) => {
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos, 1);
    this.setState({todo: arr});
  };

  renderTodos = () => {
    return this.state.todo.map(t=>{
      return (
        <View style={styles.todoStyle} key={t}>
          <Text style={styles.todoText}>{t}</Text>
          <TouchableHighlight onPress={() => {this.deleteTodo(t)}}>
          <Image 
          source={require('./assets/delete.png')}
          style={{
            height: 20,
            width: 20
          }}></Image>
          </TouchableHighlight>
        </View>
      )
    })
  };

  render() {
    return (
      <ImageBackground 
        style={{
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }} 
        imageStyle={{ resizeMode: 'stretch' }}
        source={require('./assets/bg-img.png')} >
        <View style={styles.viewStyle}>
          <Icon 
            name='delete'
            color="#991111"
            type="material-community"
          />
          <Text style={styles.header}>Notes App</Text>
          <TextInput 
            value={this.state.text}
            style={styles.inputStyle} 
            onChangeText={(text) => this.setState({text})}
          />
          <Button
            title="Add Todo"
            onPress={this.addTodo}
          />
          <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
            {this.renderTodos()}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

