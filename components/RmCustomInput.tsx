import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface rmCustomInputProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const RmCustomInput: React.FC<rmCustomInputProps> = ({ placeholder, value, onChangeText, keyboardType = 'numeric', ...rest }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});

export default RmCustomInput;
