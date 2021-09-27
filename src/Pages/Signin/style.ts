import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width:180,
    height:180,
    marginBottom: -2
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4aa54a', 
    marginTop: -8,
    marginBottom: 1
  },
  input: {
    width: '90%',
    height: 42,
    borderRadius: 5,
    backgroundColor: '#f4f3f3',
    marginBottom: 20,
    padding: 8
  },
  forgotContainer:{
    width: '90%',
    alignItems: 'flex-end',
  },
  forgotText: {
    color: '#4aa54a',
    fontWeight: 'bold',
  },
  loginButton: {
    marginTop: '5%',
    backgroundColor: '#4aa54a',
    width: '90%',
    height: 42,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }

});
