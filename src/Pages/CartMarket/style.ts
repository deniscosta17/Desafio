import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerContainer: {
    backgroundColor: '#4aa54a',
    marginTop: '8%',
    width: '95%',
    height: 42,
    borderRadius: 5
  },
  textHeader: {
    color: '#fff',
    fontWeight: 'bold',
    padding: 5,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageLogo: {
    width: 180,
    height: 180,
    opacity: 0.6,
    marginTop: '5%',
  },
  hrContainer: {
    width: '100%',
    borderWidth: 1.2,
    marginTop: 5,
    borderColor: '#a6ce3a',
  },
  listContainer: {
    width: '100%',
  },
  imgeFruits: {
    width: 55,
    height: 55,
    marginTop: 5,
    marginLeft: 5,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#a6ce3a',
  },
  textFruitContainer: {
    alignItems: 'baseline',
    justifyContent: 'center',
    marginTop: -27,
    marginLeft: '20%'
  },
  textFruitInfo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  Add: { 
    marginTop: -45,
    marginLeft: '85%'
  },
  cartIcon: {
    marginBottom: '-45%',
    marginLeft: '85%'
  }
});
