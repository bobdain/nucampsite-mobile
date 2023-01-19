import { FlatList, View, Text } from 'react-native';
import { Tile } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const DirectoryScreen = ({ navigation }) => {
    const campsites = useSelector((state) => state.campsites);

    // destructure the 'item' property from the input parameter, and rename it to 'campsite'
    const renderDirectoryItem = ({ item: campsite }) => {
        return (
            <Tile
                title={campsite.name}
                caption={campsite.description}
                featured
                onPress={() =>
                    navigation.navigate('CampsiteInfo', { campsite })
                }
                imageSrc={{ uri: baseUrl + campsite.image }}
            />
        );
    }

    return <FlatList
        data={campsites.campsitesArray}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id.toString()}
    />
}

export default DirectoryScreen;