import React, { Component } from 'react';
import {
  StyleSheet,
   Text,
   ImageBackground,
    TextInput,
     View,
     TouchableOpacity,
    } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Spinner } from '../ortak';


 class LoginForm extends Component {


  clickLogin() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
   }

renderButton() {
  if (!this.props.loading) {
    return (<TouchableOpacity onPress={this.clickLogin.bind(this)} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>Kaydol Ve Giriş Yap</Text>
    </TouchableOpacity>);
  }
  return <Spinner size="small" />;
}

render() {
  return (

    <View style={styles.container} >
      <ImageBackground source={require('../img/e1.png')} style={styles.backgroundImage} >
      <View style={styles.content}>
      <Text style={styles.logo}> WELCOME </Text>

      <View style={styles.inputContainer}>
      <TextInput
      underlineColorAndroid='transparent'
      style={styles.input}
      placeholder='E-Mail'
      value={this.props.email}
      onChangeText={email => this.props.emailChanged(email)}
      />

      <TextInput
      underlineColorAndroid='transparent'
      style={styles.input}
      placeholder='Password'
      value={this.props.password}
      secureTextEntry
      onChangeText={password => this.props.passwordChanged(password)}
      />
      {this.renderButton()}

      </View>

      </View>
      </ImageBackground>

    </View>

   );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center'
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: '#252525',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15,
    marginBottom: 20,
  },
  inputContainer: {
    margin: 20,
    marginBottom: 0,
    padding: 20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  input: {
    fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  buttonContainer: {
    alignSelf: 'stretch',
    margin: 20,
    padding: 20,
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }

});

const mapStateToProps = ({ kimlikdogrulamaResponse }) => {
  const { email, password, loading } = kimlikdogrulamaResponse;
  return {
    email,
    password,
    loading
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
