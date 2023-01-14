import { useState } from 'react';
import { CAMPSITES } from '../shared/campsites.js';
import DirectoryScreen from './DirectoryScreen';
import { StyleSheet, Text, View } from 'react-native';

const Main = () => {
    const [campsites, setCampsites] = useState(CAMPSITES);

    // return (
    //     <View >
    //         <Text>Hi Holly!</Text>
    //         <Text>Hi Holly!</Text>
    //         <Text>Hi Holly!</Text>
    //     </View>
    // )

    return <DirectoryScreen campsites={campsites} />;

}

export default Main;