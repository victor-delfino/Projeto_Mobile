import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0B1D2E',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    paddingTop: 48,
    paddingBottom: 32,
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    marginBottom: 22,
    borderWidth: 3,
    borderColor: '#93c5fd',
    backgroundColor: '#222b38',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  input: {
    backgroundColor: '#192841',
    color: '#F1F5F9',
    width: width * 0.88,
    minWidth: 260,
    maxWidth: 400,
    padding: 14,
    borderRadius: 10,
    marginBottom: 18,
    borderWidth: 1.5,
    borderColor: '#26344d',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.10,
    shadowRadius: 2,
    elevation: 1,
  },
});