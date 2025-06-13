import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  pickerContainer: {
    marginBottom: 28,
    width: '100%',
  },
  label: {
    color: '#93c5fd',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 17,
    letterSpacing: 0.2,
  },
  pickerWrapper: {
    backgroundColor: '#192841',
    borderRadius: 12,
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#282f3e',
    overflow: 'hidden',
  },
  picker: {
    color: '#fff',
    fontSize: 16,
    height: 48,
    width: '100%',
    paddingHorizontal: 12,
    backgroundColor: '#192841',
  },
  pickerItem: {
    color: '#93c5fd',
    backgroundColor: '#192841',
  },
});