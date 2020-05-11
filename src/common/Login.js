 import React from 'react';
import { View, Image, StatusBar ,Text,StyleSheet,ImageBackground,ToastAndroid,Dimensions,TouchableOpacity} from 'react-native';
import { Avatar,Input,Lebal,Button ,CheckBox} from 'react-native-elements';
import TextField from './components/input'
import MyButton from './components/Button'
import Loader from './components/Loader'
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import * as API from '../api/index';
const width = Dimensions.get('window').width;
const height =Dimensions.get('window').height;
class Login extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {  

          userError:'' ,
          passError:'',
          user:'',
          password:'5eb54a7c8e3bd',
          checked:true,
          visible:false
        }     
    }
validateInput = ()=>{
  const {user}  = this.state ;
  const { password }  = this.state ;
 
if(user ===""){
 this.showToastWithGravity("Enter your Employe Id/Comonay Id")
return false;
}

else if (password ==="")
{
  this.showToastWithGravity("Enter your Password")
  return false;
}


else
this.setState({visible:true,disabled:false})
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
 
  signinSimple=()=>{
  if(this.validateInput()){
      const mydata = this.state
      const data = {username:mydata.user,password:mydata.password}
     
      API.login(data)
       .then(res => {
         console.warn('logindetail',res);
         this.setState({visible:false})

         console.warn(res.status)
        if(res.error===undefined){
          if (res.status ==="Success") {
           let response = res['data']
            const userInfo = {
              'email':response.email,
              'username':response.username,
              'id':response.id,
              'role':response.role,
              'token':response.token
            } 
            console.warn(response.token);
            
            AsyncStorage.setItem('user_info', JSON.stringify(userInfo));
            let profileStatus = response['details']
            console.warn(profileStatus)
           if(response.role ==='1'){
           if( profileStatus.length<1){
            this.props.navigation.navigate('Profile',{data:userInfo})
         

           }else
           {
            this.props.navigation.navigate('EMenu')
           }

          } else {
            alert("error")
          }
          }
        }
         else {
          this.setState({loader:false})
          alert(res.error);
          console.log('error');
        }
      })
  }
}


    render(){

        return(
             <ImageBackground source = {require('../img/loginback.png')} style = {{flex:1}}>
                <StatusBar backgroundColor="#2aabe4" barStyle="light-content" />
                <View style = {{flex:1,alignItems:'center',PaddingHorizontal:10,justifyContent:'space-evenly' }}>

<Loader visible ={this.state.visible}/>
 <Image  source = {require('../img/logo.png')}  style = {{
  resizeMode:'contain'}}/>
  <Text style = {{fontSize:24,color:'#f1f1f1',fontWeight:'bold'}}>
  LOGIN
  </Text>
   </View>
 <View style = {{flex:1.1,backgroundColor:'transparent',margin:30}}>

<TextField
onChangeText={user => this.setState({user})}
placeholder ='COMPONAY ID/EMPLOYEE ID'
   />
<Text></Text>
<TextField
onChangeText={password => this.setState({password})}
secureTextEntry={true}
placeholder ="PASSWORD"
maxLength={10}

   />
<Text></Text>
<View style = {{flexDirection:'row',justifyContent:'space-between'}}>
<View style = {{flexDirection:'row'}}>
<CheckBox 
  checked={this.state.checked}
  containerStyle = {{padding:0,alignItems:'flex-start'}}
  size = {18}
/>
<Text style = {{fontSize:12,color:'#373737',paddingVertical:5}}>
Remember Me
</Text>
</View>
<TouchableOpacity onPress = {()=>this.props.navigation.navigate('ForgotPassword')}>
<Text style = {{fontSize:12,color:'#373737',paddingVertical:5}}>
Forgot Password?
</Text>
</TouchableOpacity>
</View>
<Text></Text>
<Text></Text>
<MyButton
  title="LOGIN"
  onPress = {this.signinSimple}
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
export default Login;