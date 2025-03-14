import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, useWindowDimensions } from 'react-native';
import RmCustomInput from '../components/RmCustomInput';

export default function App(): JSX.Element {
  const { width, height } = useWindowDimensions();
  const rmIsLandscape = width > height; 

  const [rmNotas, setRmNotas] = useState<{ rmN1: string; rmN2: string; rmN3: string }>({ rmN1: '', rmN2: '', rmN3: '' });
  const [rmFaltas, setRmFaltas] = useState<string>('');
  const [rmMensagem, setRmMensagem] = useState<string>('');

  const rmHandleInputChange = (rmField: 'rmN1' | 'rmN2' | 'rmN3', rmValue: string) => {
    const formattedValue = rmValue.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    setRmNotas((prev) => ({ ...prev, [rmField]: formattedValue }));
  };

  const rmHandleValidate = (): void => {
    const rmN1 = parseFloat(rmNotas.rmN1) || 0;
    const rmN2 = parseFloat(rmNotas.rmN2) || 0;
    const rmN3 = parseFloat(rmNotas.rmN3) || 0;
    const rmF = parseInt(rmFaltas) || 0;

    if (rmF > 10) {
      setRmMensagem('Reprovado por falta');
      return;
    }

    const rmNotasArray = [rmN1, rmN2, rmN3].sort((a, b) => a - b);
    const rmMedia = parseFloat(((rmNotasArray[1] + rmNotasArray[2]) / 2).toFixed(2));

    setRmMensagem(rmMedia >= 6 ? ` Aprovado com média de ${rmMedia}` : ' Reprovado por nota');
  };

  const rmHandleReset = (): void => {
    setRmNotas({ rmN1: '', rmN2: '', rmN3: '' });
    setRmFaltas('');
    setRmMensagem('');
  };

  return (
    <View style={[styles.container, rmIsLandscape && styles.containerLandscape]}>
      <TouchableOpacity onPress={rmHandleReset}>
        <Image src={require('../assets/fiap_logo.jpg')} style={styles.logo} />
      </TouchableOpacity>

      <Text style={styles.title}>Validação de Notas</Text>

      <View style={styles.inputsContainer}>
        <RmCustomInput placeholder="Nota 1" value={rmNotas.rmN1} onChangeText={(value) => rmHandleInputChange('rmN1', value)} />
        <RmCustomInput placeholder="Nota 2" value={rmNotas.rmN2} onChangeText={(value) => rmHandleInputChange('rmN2', value)} />
        <RmCustomInput placeholder="Nota 3" value={rmNotas.rmN3} onChangeText={(value) => rmHandleInputChange('rmN3', value)} />
        <RmCustomInput placeholder="Número de faltas" value={rmFaltas} onChangeText={setRmFaltas} />
      </View>

      <TouchableOpacity style={styles.button} onPress={rmHandleValidate}>
        <Text style={styles.buttonText}>Validar</Text>
      </TouchableOpacity>

      {rmMensagem ? <Text style={styles.result}>{rmMensagem}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  containerLandscape: {
    flexDirection: 'column', 
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#d32f2f',
    textAlign: 'center',
  },
  inputsContainer: {
    width: '100%',
    maxWidth: 400,
  },
  button: {
    backgroundColor: '#d32f2f',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    minWidth: 200,
  },
});