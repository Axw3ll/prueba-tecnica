import { StyleSheet } from 'react-native';

const CardStyle = StyleSheet.create({
  card: {
    padding: 50,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 350,
    marginBottom: 10,
  },
  character: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  pressable: {
    backgroundColor: '#1f75fe',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  pressableText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CardStyle;
