import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    viewStyle: {
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
    },
    header: {
      fontSize: 30,
      color: '#fdfdfd',
      fontWeight: 'bold',
      fontFamily: 'sans-serif-thin',
    },
    inputStyle: {
      height: 40,
      width: 200,
      fontSize: 15,
      color: '#f2f2f2',
      fontFamily: 'serif',
      alignContent: 'center',
      borderColor: '#228899',
    }, 
    todoStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingTop: 8,
      width: 350,
      height: 40,
      backgroundColor: "#f9f9f930",
      borderBottomWidth: 0.8,
    },
    todoText: {
      alignContent: 'center',
      color: '#f2f2f2',
      fontFamily: 'Roboto',
      fontSize: 16,
      fontWeight: 'bold'
    }
  });

export default styles;