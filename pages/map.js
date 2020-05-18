import React , {Component} from 'react';
import { Text, View, Button } from 'react-native';
export default class Map extends Component{
    render() {
        return(
            <View>
                <Text>Map page</Text>
            </View>
        )
    }
}

function MyBackButton() {
    const navigation = useNavigation();
    return (
        <Button
        title="Back"
        onPress={() => {
            navigation.goBack();
        }}
        />
    );
}