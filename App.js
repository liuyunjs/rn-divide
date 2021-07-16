import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Divide } from './library';

export default function App() {
  return (
    <SafeAreaView>
      <View style={{ height: 50 }}>
        <Text style={{ fontSize: 20 }}>divide1</Text>
        <Divide
        // float={Divide.Float.top}
        />
      </View>
      <Divide
        size={10}
        tintColor="#000"
        float={Divide.Float.left}
        style={{ height: 50 }}>
        <Text style={{ fontSize: 20 }}>divide2</Text>
      </Divide>
    </SafeAreaView>
  );
}
