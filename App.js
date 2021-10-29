/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View, 
  Image,
  TextInput,
} from 'react-native';
import EmployeeList from './src/assets/components/employee/employeeList';
import EmployeeList2 from './src/assets/components/employee/employeeList2';
import EmployeeList3 from './src/assets/components/employee/employeeList3';

const App = () => {
  return (
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.text}>SIGN UP</Text>
          <EmployeeList />
          <EmployeeList2 />
          <EmployeeList3 />
          </ScrollView>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text:{
    margin: 15,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: -3,
    color: '#001d3d'
  },
});

export default App;
