import { StyleSheet, Text, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { baseUrl } from '../../shared/baseUrl';

// destructure 'campsite' from props passed en
const RenderCampsite = (props) => {
    const { campsite } = props;

    if (campsite) {
        return (
            <Card containerStyle={styles.commentsTitle}>
                <Card.Image source={{ uri: baseUrl + campsite.image }}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}>

                            {campsite.name}
                        </Text>
                    </View>
                </Card.Image>

                <Text style={{ margin: 20 }}>{campsite.description}</Text>

                <Icon
                    name={props.isFavorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => props.markFavorite()
                        // props.isFavorite
                        //     ? console.log('Already set as a favorite')
                        //     : props.markFavorite()
                    }
                />

            </Card>
        )

        // If no campsite, return empty View
        return <View />;
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        padding: 0,
        margin: 0,
        marginBottom: 20
    }
});

export default RenderCampsite;