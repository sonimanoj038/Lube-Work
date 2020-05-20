import React from 'react';
import { View, Image, StatusBar ,Text,StyleSheet,ImageBackground,ToastAndroid,Dimensions,TouchableOpacity,Modal,} from 'react-native';
import { Avatar,Input,Lebal,Button ,CheckBox,Header} from 'react-native-elements';
import TextField from '../../common/components/input'
import MyButton from '../../common/components/Button'
import Icon from 'react-native-vector-icons/Ionicons';
import Loader from '../../common/components/Loader'
import AsyncStorage from '@react-native-community/async-storage';
import * as API from '../../api/index';
import { Right, Left, Footer,Body,Item} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
const width = Dimensions.get('window').width;
const height =Dimensions.get('window').height;

class AddEmp extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {  
            epassword:'',
            ecpassword:'',
          visible:false,
          clogo:[],
          ename:'',
          emobile:'',
          eemail:'',
          tin:'',
          eid:'',
          id:'',
          token:'',
          isVisible:false,


         
        }     
    }
validateInput = ()=>{
const {epassword}  = this.state ;
const {ecpassword}  = this.state ;
const {ename}  = this.state ;
const {emobile}  = this.state ;
const {eemail}  = this.state ;
const {eid}  = this.state ;
const {clogo}  = this.state ;

if(clogo.length <1){
 this.showToastWithGravity("Upload Profile Image")
return false;
}
else if(eid ===""){
 this.showToastWithGravity("Enter Employee ID")
return false;
}
else if(ename ===""){
    this.showToastWithGravity("Enter Employee Name")
   return false;
   }
else if(eemail ===""){
    this.showToastWithGravity("Enter Email")
   return false;
   }
   else if(emobile===""){
    this.showToastWithGravity("Enter Phone Number")
   return false;
   }
   else if(epassword ===""){
    this.showToastWithGravity("Enter Password")
   return false;
   }
   else if(ecpassword ===""){
    this.showToastWithGravity("Enter Confirm Password")
   return false;
   }
else if(ecpassword !=epassword){
 this.showToastWithGravity("Password not matched")
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
  takePicture() {
    const options = {
      title: 'Select Image',
      // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = response;
        this.setState({ clogo: source });
      }
    });
  }

componentDidMount = async () => {
   AsyncStorage.getItem("user_info").then((value) =>{
     const mydata = JSON.parse(value)
        this.setState({id:mydata.id,token:mydata.token})
    })
    console.warn('enter')
}

profileSubmit=()=>{
  
}
  AddEmp = ()=>{
if(this.validateInput()){
      const mydata = this.state
       const data = { clogo:mydata.clogo,
          epassword:mydata.epassword,
          ename:mydata.ename,
          emobile:mydata.emobile,
          eemail:mydata.eemail,                                               
          eid:mydata.eid,
          id:this.state.id,
          token:this.state.token
          
          }
     this.setState({visible:true})
      API.AddEmp(data)
       .then(res => {
         this.setState({visible:false,isVisible:true})
         console.warn('logindetail',res);
           this.props.navigation.navigate('Employees2')
      
   })
  }
  }
    render(){

        return(
             <ImageBackground source = {require('../../img/login_back.png')} style = {{flex:1}}>
                 <Header
                 statusBarProps={{ barStyle: 'light-content' ,backgroundColor:"#2aabe4",translucent: true,}}
                   leftComponent={ <Icon name='ios-arrow-back'  style={{color:'white',fontSize:25,left:5}}  onPress = {()=>this.props.navigation.goBack()}/>}
                 centerComponent={{ text: 'Add Employee', style: { color: '#fff',fontWeight:'bold',fontSize:20 } }}
                 containerStyle={{
                 backgroundColor: '#2aabe4',
                 justifyContent: 'space-around',
                 borderWidth:0,borderBottomColor:'#2aabe4'
                }}
              />
                    <Loader visible ={this.state.visible}/> 
                      <Modal transparent={true}
       visible={this.state.isVisible}
       onRequestClose={this.closeModal}>
  <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
    <View style={{
            width: '90%',
            marginHorizontal:30,
            height: height/3,backgroundColor:'white',alignItems:'center',borderRadius:7,padding:20}}>
      <Text style ={{textAlign:'center',alignItems:'center',alignSelf:'center',fontWeight:'bold',fontSize:20,color:'green'}}>Profile Updated Successfully!</Text>
     <Text></Text>
      <Text style = {{fontSize:15,color:'green',textAlign:'center',alignItems:'center',alignSelf:'center'}}>
                If you want to send app invitation link to the added employee then click on send link else click Back button to move to the employees screen                </Text>
          <Text></Text> 
          <Text></Text> 
          <View style={styles.MainContainer}>
        <TouchableOpacity >

            <LinearGradient  colors={['#1282c1', '#01c0dc']} style={styles.LinearGradientStyle} >
                  <Text style={styles.buttonText}> SEND LINK </Text>
            </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>this.setState({isVisible:false})}>

            <LinearGradient 
            colors={['#b29d1c', '#d2b500']}
            style={styles.LinearGradientStyle}  
            start={{x: 0, y: 1}} 
            end={{x: 1, y: 0.9}}
            locations={[0, 0.3, 0.9]} >

              <Text style={styles.buttonText}> BACK </Text>
                  
            </LinearGradient>
        
        </TouchableOpacity>

      </View>      
    </View>
  </View>
</Modal>
                
    <View style = {{flex:0.7,alignItems:'center',PaddingHorizontal:10,paddingVertical:30,marginBottom:-50}}>
<Item  style ={{flexDirection:'row',borderColor: 'transparent',width:'100%',alignItems:'center',PaddingHorizontal:10,justifyContent:'space-evenly'}}>

<View style ={{flexDirection:'column',marginTop:'15%'}}>
<Avatar
              size={130}
              onEditPress={this.takePicture.bind(this)}
              overlayContainerStyle={{ backgroundColor: '#FFF',borderColor: '#2aabe4', }}          
              rounded
              containerStyle={{ borderColor: '#2aabe4', borderWidth: 1, alignSelf: 'center',backgroundColor:'white'}}
              source={this.state.clogo.length<1  ?  require('../../img/profile.png'):{ uri: this.state.clogo.uri}}
              imageProps={{ resizeMode: 'cover' ,borderColor: 'black'}}
              showEditButton
              iconStyle = {{backgroundColor:'#2aabe4'}}
              editButton = {{ name: 'mode-edit', type: 'material', color: '#2aabe4',size:25,containerStyle:{backgroundColor:'white',borderColor:'#2aabe4',borderRadius:12} }}
            />
             
</View>
</Item>
  </View>
  <View style = {{flex:1.8,backgroundColor:'transparent',margin:20,}}>

    <Input
      onChangeText={eid => this.setState({eid})}
      placeholder ='Employee ID'
      inputStyle={{color:'#242424',fontSize:15,fontWeight:'bold',padding: 0}}
      inputContainerStyle = {{borderBottomColor:'#2aabe4',padding: 0}}
   />

<Text></Text>
     <Input
      onChangeText={ename => this.setState({ename})}
      placeholder ='Employee Name'
      inputStyle={{color:'#242424',fontSize:15,fontWeight:'bold',padding: 0}}
      inputContainerStyle = {{borderBottomColor:'#2aabe4',padding: 0}}
     />
   
<Text></Text>

    <Input
      onChangeText={eemail => this.setState({eemail})}
      placeholder =' Email'
      inputStyle={{color:'#242424',fontSize:15,fontWeight:'bold',padding: 0}}
      inputContainerStyle = {{borderBottomColor:'#2aabe4',padding: 0}}
   />
 <Text></Text>
 
     <Input
      onChangeText={emobile => this.setState({emobile})}
      placeholder ='Phone Number(with country code)'
      inputStyle={{color:'#242424',fontSize:15,fontWeight:'bold',padding: 0}}
      inputContainerStyle = {{borderBottomColor:'#2aabe4',padding: 0}}
     />
   

      <Text></Text>


    <Input
      onChangeText={epassword => this.setState({epassword})}
      placeholder ='password'
      inputStyle={{color:'#242424',fontSize:15,fontWeight:'bold',padding: 0}}
      inputContainerStyle = {{borderBottomColor:'#2aabe4',padding: 0}}
   />
<Text></Text>
     <Input
      onChangeText={ecpassword => this.setState({ecpassword})}
      placeholder ='Confirm Password'
      inputStyle={{color:'#242424',fontSize:15,fontWeight:'bold',padding: 0}}
      inputContainerStyle = {{borderBottomColor:'#2aabe4',padding: 0}}
     />
  <Text></Text>
   <Text></Text>
   <MyButton title="ADD" onPress = {this.AddEmp }/>
 </View>
 </ImageBackground>   
        )}}

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
      MainContainer :{

        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%'
        
    
      },
    
      LinearGradientStyle: {
        height: 50,
        
        borderRadius: 5,
        marginBottom: 20,
        width:150,
        margin:10
      },
    
      buttonText: {
       fontSize: 18,
       textAlign: 'center',
       margin: 12,
       fontWeight:'bold',
       color : '#fff',
       backgroundColor: 'transparent' 
     
     },

  });
export default AddEmp;