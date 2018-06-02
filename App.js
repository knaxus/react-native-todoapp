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

  editTodo = (t) => {
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    var newText = this.refs.t;
    var editedTodo = newText;
    arr[pos] = editedTodo;
    this.setState({todo: arr});
  };
  
  renderTodos = () => {
    return this.state.todo.map(t=>{
      return (
        <View style={styles.todoStyle} key={t}>
          <Text style={styles.todoText} id={t}>{t}</Text>
          <TouchableHighlight style={{margin: 0}}>
          <Icon 
            name='edit'
            color="#11bb11"
            type="font-awesome"
            onPress={() => {this.editTodo.bind(t)}}
          />
          </TouchableHighlight>
          <TouchableHighlight style={{margin: 0}}>
          <Icon 
            name='delete'
            color="#bb1111"
            type="material-community"
            onPress={() => {this.deleteTodo(t)}}
          />
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
          <Image 
          source={require('./assets/icon.png')}
          style={{
            height: 50,
            width: 50
          }}></Image>
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

