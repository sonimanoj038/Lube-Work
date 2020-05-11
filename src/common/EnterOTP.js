 import React from 'react';
import { View, Image, StatusBar ,Text,StyleSheet,ImageBackground,ToastAndroid,Dimensions,TouchableOpacity} from 'react-native';
import { Avatar,Input,Lebal,Button ,CheckBox} from 'react-native-elements';
import TextField from './components/input'
import MyButton from './components/Button'
import Icon from 'react-native-vector-icons/Ionicons';
const width = Dimensions.get('window').width;
const height =Dimensions.get('window').height;

class EnterOTP extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {  
            otp:'',
          loading:true
        }     
    }
validateInput = ()=>{
const {otp}  = this.state ;
const {cpassword}  = this.state ;
if(otp ===""){
 this.showToastWithGravity("Enter OTP")
return false;
}
else
this.props.navigation.navigate('NewPassSet')
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
          <View style = {{flex:1.1,alignItems:'center',PaddingHorizontal:10,justifyContent:'space-evenly' }}>
 <Image  source = {require('../img/logo.png')}  style = {{
  resizeMode:'contain'}}/>
  <Text style = {{fontSize:24,color:'#f1f1f1',fontWeight:'bold',}}>
 ENTER OTP
  </Text>

   </View>
 <View style = {{flex:1.2,backgroundColor:'transparent',margin:30}}>
<TextField
onChangeText={otp => this.setState({otp})}
placeholder ='ENTER OTP'
secureTextEntry={true}
rightIcon = {
    <Text style = {{color:'#2aabe4',fontWeight:'bold',}}>RESEND?</Text>
}
   />
   <Text></Text>
   <Text style = {{fontSize:15,color:'#373737',paddingVertical:5,textAlign:'center',alignItems:'center'}}>
OTP has been sent to your email
</Text>
   <Text></Text>
   <Text></Text>
<MyButton
  title="SUBMIT"
  onPress = {this.validateInput}
/>
 </View>
 </ImageBackground>   
   )}
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
export default EnterOTP;