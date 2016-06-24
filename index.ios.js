/**
 * SORA Med - Damascus Edge - The Forge
 * https://github.com/relderDE/sora_med_app.git
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

import Main from './Main';
import Cardiac from './Cardiac';
import Renal from './Renal';
import Neuro from './Neuro';
import HemeONC from './HemeONC';
import CodeBlue from './CodeBlue';
import GIEndo from './GIEndo';
import Pulmonary from './Pulmonary';
import Converter from './Converter';
import Search from './Search';



class soraMed extends Component {
  
  renderScene(route, navigator){
    if (route.name == 'Main') {
        return <Main navigator={navigator} />
    }
    if (route.name == 'Cardiac') {
        return <Cardiac navigator={navigator} />
    }
    if (route.name == 'Renal') {
        return <Renal navigator={navigator} />
    }
    if (route.name == 'Neuro') {
        return <Neuro navigator={navigator} />
    }
    if (route.name == 'HemeONC') {
        return <HemeONC navigator={navigator} />
    }
    if (route.name == 'CodeBlue') {
        return <CodeBlue navigator={navigator} />
    }
    if (route.name == 'GIEndo') {
        return <GIEndo navigator={navigator} />
    }
    if (route.name == 'Pulmonary') {
        return <Pulmonary navigator={navigator} />
    }
    if (route.name == 'Converter') {
        return <Converter navigator={navigator} />
    }
    if (route.name == 'Search') {
        return <Search navigator={navigator} />
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{name: 'Main'}}
          renderScene={this.renderScene.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

AppRegistry.registerComponent('soraMed', () => soraMed);
