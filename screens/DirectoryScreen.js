import { FlatList, View, Text } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const DirectoryScreen = (props) => {
    
    // destructure the 'item' property from the input parameter, and rename it to 'campsite'
    const renderDirectoryItem = ({item: campsite}) => {
        return (
            <ListItem>
                <Avatar source={campsite.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{campsite.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {campsite.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    }

    // return (
    //     <View >
    //         <Text>Hi bob!</Text>
    //         <Text>Hi bob!</Text>
    //         <Text>{props.campsites[0].name}</Text>
    //         <Text>Hi bob!</Text>
    //         <Text>Hi bob!</Text>
    //     </View>
    // )

    return <FlatList
        data={props.campsites}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id.toString()}
    />
}

export default DirectoryScreen;