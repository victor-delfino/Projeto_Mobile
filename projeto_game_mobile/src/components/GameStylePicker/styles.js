import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#0b1d2e',
    padding: 20,
    borderRadius: 12,
    marginBottom: 22,
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 3,
  },
  label: {
    color: '#f1f5f9',
    marginBottom: 10,
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.2,
  },
  picker: {
    color: '#fff',
    backgroundColor: '#192841',
    borderRadius: 8,
    height: 48,
    fontSize: 16,
    width: '100%',
    paddingHorizontal: 8,
  },
  pickerItem: {
    color: '#93c5fd',
    backgroundColor: '#192841',
  },
});