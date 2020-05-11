 import React from 'react';
import { View, Image, StatusBar ,Text,StyleSheet,ImageBackground,ToastAndroid,Dimensions,TouchableOpacity} from 'react-native';
import { Avatar,Input,Lebal,Button ,CheckBox} from 'react-native-elements';
import TextField from './components/input'
import MyButton from './components/Button'
import Icon from 'react-native-vector-icons/Ionicons';
const width = Dimensions.get('window').width;
const height =Dimensions.get('window').height;

class NewPassSet extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {  
            password:'',
            cpassword:'',
          loading:true
        }     
    }
validateInput = ()=>{
const {password}  = this.state ;
const {cpassword}  = this.state ;
if(password ===""){
 this.showToastWithGravity("Enter new password")
return false;
}
else if(cpassword ===""){
 this.showToastWithGravity("Enter confirm new password")
return false;
}
else if(cpassword !=password){
 this.showToastWithGravity("Password not matched")
return false;
}
else
this.props.navigation.navigate('Login')
this.setState({loading:true,disabled:false})
return true;
}
  showToastWithGravity = (msg) => {
    ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );(
      msg,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };
 
    render(){

        return(
          <ImageBackground source = {require('../img/loginback.png')} style = {{flex:1}}>
          <StatusBar backgroundColor="#2aabe4" barStyle="light-content" />
          <View style = {{flex:1,alignItems:'center',PaddingHorizontal:10,justifyContent:'space-evenly' }}>
 <Image  source = {require('../img/logo.png')}  style = {{
  resizeMode:'contain'}}/>
  <Text style = {{fontSize:24,color:'#f1f1f1',fontWeight:'bold',}}>
 ENTER NEW PASSWORD
  </Text>

   </View>
 <View style = {{flex:1,backgroundColor:'transparent',margin:30}}>

<TextField
onChangeText={password => this.setState({password})}
placeholder ='NEW PASSWORD'
secureTextEntry={true}
   />
<Text></Text>
<TextField
onChangeText={cpassword => this.setState({cpassword})}
placeholder ='CONFIRM PASSWORD'
secureTextEntry={true}
   />
   <Text></Text>
   <Text></Text>
<MyButton
  title="UPDATE"
  onPress = {this.validateInput}
/>
 </View>
 </ImageBackground>   
        )
    }

}

const styles = StyleSheet.create({
    splash: {
        width: '100%',
        height: '100%',
      },
      red: {
        color:'red'
      },  
      imageThumbnail:{
        borderWidth:1,
        width:'100%',
        flex:1,
      },

  });
export default NewPassSet;