import { Image, Text, Platform, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import DirectoryScreen from './DirectoryScreen';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import { Icon } from 'react-native-elements';
import logo from '../assets/images/logo.png';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// These are the thunk action creators from our slice reducer files:
import { fetchPartners } from '../features/partners/partnersSlice';
import { fetchCampsites } from '../features/campsites/campsitesSlice';
import { fetchPromotions } from '../features/promotions/promotionsSlice';
import { fetchComments } from '../features/comments/commentsSlice';

const Drawer = createDrawerNavigator();


const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: '#5637DD'
    }
}

const HomeNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={({ navigation }) => ({
                    title: 'Home',
                    headerLeft: () => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    )
}

const AboutNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='About' // options.title defaults to the value of name
                component={AboutScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Icon
                            name='info-circle'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    )
}

const ContactNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Contact'
                component={ContactScreen}
                options={({ navigation }) => ({
                    title: 'Contact Us',
                    headerLeft: () => (
                        <Icon
                            name='address-card'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    )
}

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Directory'
            screenOptions={screenOptions}>

            <Stack.Screen
                name='Directory'
                component={DirectoryScreen}
                options={({ navigation }) => ({
                    title: 'Campsite Directory',
                    headerLeft: () => (
                        <Icon
                            name='list'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />

            <Stack.Screen
                name='CampsiteInfo'
                component={CampsiteInfoScreen}
                options={({ route }) => ({
                    title: route.params.campsite.name
                })} />

        </Stack.Navigator>
    );
}

const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
            
            <View style={{ flex: 1 }}>
                <Image source={logo} style={styles.drawerImage} />
            </View>

            <View style={{ flex: 2 }}>
                <Text style={styles.drawerHeaderText}>Nucamp</Text>
            </View>
        </View>

        <DrawerItemList {...props} labelStyle={{fontWeight: 'bold'}} />
    </DrawerContentScrollView>
)

const Main = () => {
    const dispatch = useDispatch();

    // When the app loads, the main component is mounted and this useEffect hook is called.
    // All of our data is fetched and loaded into the Redux store so that it's available for all 
    // components to access and modify
    useEffect(() => {
        dispatch(fetchCampsites()); // Make the calls here because they return actions
        dispatch(fetchPromotions());
        dispatch(fetchPartners());
        dispatch(fetchComments());
    }, [dispatch]); // best practice to send this, even if it isn't used. (it's not, in this case)

    return (
        // Flex: 1 makes it fill the space vertically
        <View style={{
            flex: 1,
            paddingTop:
                Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
        }}>

            <Drawer.Navigator
                initialRouteName='Home'
                drawerContent={CustomDrawerContent}
                drawerStyle={{ backgroundColor: '#cec8ff' }}>

                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{
                        title: 'Home',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='home'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Directory'
                    component={DirectoryNavigator}
                    options={{
                        title: 'Campsite Directory',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='list'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='About'
                    component={AboutNavigator}
                    options={{
                        title: 'About',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='info-circle'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Contact'
                    component={ContactNavigator}
                    options={{
                        title: 'Contact Us',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='address-card'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />

            </Drawer.Navigator>

        </View>
    );
}

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    },
    drawerHeader: {
        backgroundColor: '#5637DD',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    }
});

export default Main;