/**
 * SORA Med - Damascus Edge - The Forge
 * https://github.com/relderDE/sora_med_app.git
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Text,
  Image,
  Dimensions,
  View
} from 'react-native';


//Dimensions and Calculated Heights

var {height, width}     = Dimensions.get('window');
var headerHeight        = 85 - 1;
var footerHeight        = 70 - 1;
var calculatedHeight    = height - headerHeight - footerHeight;
var contentHeight       = calculatedHeight;
var divider             = 50;
var paddedWidth         = width - 20;

//Colors and Color Sets

//Color Pallete
var baseColor           = "'rgba(0,159,183,1)'";
var secondaryColor      = "'rgba(39,39,39,1)'";
var tertiaryColor       = "'rgba(254,215,102,1)'";
var light               = "'rgba(239,241,243,1)'";
var dark                = "'rgba(0,54,66,1)'";
var gray                = "'rgba(39,39,39,0.2)'";
var blue                = "'rgba(1,139,207,1)'";
//Dark Set
var baseTextDark        = "'rgba(0,0,0,1)'";
var primaryTextDark     = "'rgba(0,0,0,0.87)'";
var secondaryTextDark   = "'rgba(0,0,0,0.54)'";
var disabledTextDark    = "'rgba(0,0,0,0.38)'";
var dividersDark        = "'rgba(0,0,0,0.12)'";
var iconsActiveDark     = "'rgba(0,0,0,0.54)'";
var iconsInactiveDark   = "'rgba(0,0,0,0.38)'";
//Light Set
var baseTextLight       = "'rgba(255,255,255,1)'";
var primaryTextLight    = "'rgba(255,255,255,1)'";
var secondaryTextLight  = "'rgba(255,255,255,0.7)'";
var disabledTextLight   = "'rgba(255,255,255,0.5)'";
var dividersLight       = "'rgba(255,255,255,0.12)'";
var iconsActiveLight    = "'rgba(255,255,255,1)'";
var iconsInactiveLight  = "''rgba(255,255,255,0.5)'";

//Typography

//Sizes
var p                   = 14;
var h1                  = 30;
var h2                  = 28;
var h3                  = 26;
var h4                  = 22;
var h5                  = 20;
var h6                  = 18;

class Main extends Component {
  
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }
  
  render() {
    return (
    <View style={styles.wrapper}>
        
        <View style={styles.navWrap}>
          
          <View style={styles.buttonWrap}>
            <TouchableHighlight onPress={ this.navigate.bind(this, 'Cardiac') } style={styles.buttonTopLeftCorner}>
                <Image
                  style={styles.icon}
                  source={require('./assets/icons/Cardio.png')}
                />
            </TouchableHighlight>
          </View>
          
          <View style={styles.buttonWrap}>
            <TouchableHighlight onPress={ this.navigate.bind(this, 'Renal') } style={styles.buttonTop}>
                <Image
                  style={styles.icon}
                  source={require('./assets/icons/Renal.png')}
                />
                <Text style={styles.darkText}>Renal</Text>
            </TouchableHighlight>
          </View>
          
          <View style={styles.buttonWrap}>
            <TouchableHighlight onPress={ this.navigate.bind(this, 'Neuro') } style={styles.buttonTopRightCorner}>
                <Image
                  style={styles.icon}
                  source={require('./assets/icons/Neuro.png')}
                />
            </TouchableHighlight>
          </View>
          
        </View>
        
        <View style={styles.navWrap}>
          
          <View style={styles.buttonWrap}>
            <TouchableHighlight onPress={ this.navigate.bind(this, 'HemeONC') } style={styles.buttonLeft}>
                <Image
                  style={styles.icon}
                  source={require('./assets/icons/HemeONC.png')}
                />
            </TouchableHighlight>
          </View>
          
          <View style={styles.buttonWrap}>
            <TouchableHighlight onPress={ this.navigate.bind(this, 'CodeBlue') } style={styles.buttonBlue}>
                <Text style={styles.lightText}>CodeBlue</Text>
            </TouchableHighlight>
          </View>
          
          <View style={styles.buttonWrap}>
            <TouchableHighlight onPress={ this.navigate.bind(this, 'GIEndo') } style={styles.buttonRight}>
                <Image
                  style={styles.icon}
                  source={require('./assets/icons/GIEndo.png')}
                />
            </TouchableHighlight>
          </View>
          
        </View>
        
        <View style={styles.navWrap}>
          
          <View style={styles.buttonWrap}>
            <TouchableHighlight onPress={ this.navigate.bind(this, 'Pulmonary') } style={styles.buttonBottomLeftCorner}>
                <Image
                  style={styles.icon}
                  source={require('./assets/icons/Pulmonary.png')}
                />
            </TouchableHighlight>
          </View>
          
          <View style={styles.buttonWrap}>
            <TouchableHighlight onPress={ this.navigate.bind(this, 'Converter') } style={styles.buttonBottom}>
                <Image
                  style={styles.icon}
                  source={require('./assets/icons/Cardio.png')}
                />
            </TouchableHighlight>
          </View>
          
          <View style={styles.buttonWrap}>
            <TouchableHighlight onPress={ this.navigate.bind(this, 'Search') } style={styles.buttonBottomRightCorner}>
                <Image
                  style={styles.icon}
                  source={require('./assets/icons/Cardio.png')}
                />
            </TouchableHighlight>
          </View>
              
        </View>
      
    </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(250, 243, 223, 1)',
    height: height,
    marginTop: 25,
    padding: 0,
  },
  navWrap: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 0,
    width: width,
  },
  buttonWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBlue: {
    height: height / 3 - 16,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: blue,
    width: width / 3 - 8,
    marginHorizontal: 2,
    marginVertical: 4,
  },
  buttonTopRightCorner: {
    height: height / 3 - 16,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 3 - 8,
    backgroundColor: 'rgba(245, 238, 218, 1)',
    marginLeft: 2,
    marginBottom: 4,
  },
  buttonTopLeftCorner: {
    height: height / 3 - 16,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 3 - 8,
    backgroundColor: 'rgba(245, 238, 218, 1)',
    marginRight: 2,
    marginBottom: 4,
  },
  buttonBottomRightCorner: {
    height: height / 3 - 16,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 3 - 8,
    backgroundColor: 'rgba(245, 238, 218, 1)',
    marginLeft: 2,
    marginTop: 4,
  },
  buttonBottomLeftCorner: {
    height: height / 3 - 16,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 3 - 8,
    backgroundColor: 'rgba(245, 238, 218, 1)',
    marginRight: 2,
    marginTop: 4,
  },
  buttonTop: {
    height: height / 3 - 16,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 3 - 8,
    backgroundColor: 'rgba(250, 243, 223, 1)',
    marginHorizontal: 2,
    marginBottom: 4,
  },
  buttonRight: {
    height: height / 3 - 16,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 3 - 8,
    backgroundColor: 'rgba(250, 243, 223, 1)',
    marginLeft: 2,
    marginVertical: 4,
  },
  buttonBottom: {
    height: height / 3 - 16,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 3 - 8,
    backgroundColor: 'rgba(250, 243, 223, 0.9)',
    marginHorizontal: 2,
    marginTop: 4,
  },
  buttonLeft: {
    height: height / 3 - 16,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 3 - 8,
    backgroundColor: 'rgba(250, 243, 223, 0.9)',
    marginRight: 2,
    marginVertical: 4,
  },
  lightText: {
    color: light,
    fontSize: h4,
  },
  darkText: {
    color: dark,
    fontSize: h4,
  },
});

export default Main
