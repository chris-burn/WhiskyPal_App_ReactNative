import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class SplashScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
     <View style={styles.container}>
     <Text>Welcome to WhiskyPal!</Text>
     <Button
     onPress={() => navigate('Collection')}
     title="My Collection"
     />
     </View>
     );
  }
}

class CollectionScreen extends React.Component {
  static navigationOptions = {
    title: 'My Collection',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>My Collection Details here...</Text>
      </View>
    );
  }
}

const WhiskyPal = StackNavigator({
  Splash: { screen: SplashScreen },
  Collection: {screen: CollectionScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WhiskyPal;

AppRegistry.registerComponent('WhiskyPal', () => WhiskyPal);