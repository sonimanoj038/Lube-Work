import React from 'react';
import { View, Image, StatusBar ,Text,StyleSheet,ImageBackground,ToastAndroid,Dimensions,TouchableOpacity,Modal} from 'react-native';
import { Avatar,Input,Lebal,Button ,CheckBox,Header} from 'react-native-elements';
import TextField from '../../common/components/input'
import MyButton from '../../common/components/Button'
import Icon from 'react-native-vector-icons/Ionicons';
import { Right, Left, Footer,Body,Item} from 'native-base';
import ImagePicker from 'react-native-image-picker';
const width = Dimensions.get('window').width;
const height =Dimensions.get('window').height;

class AddEmp extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {  
            epassword:'',
            ecpassword:'',
          loading:true,
          clogo:'',
          ename:'',
          emobile:'',
          eemail:'',
          tin:'',
          eid:'',

         
        }     
    }
validateInput = ()=>{

const {ename}  = this.state ;
const {emobile}  = this.state ;
const {eemail}  = this.state ;
const {eid}  = this.state ;
const {clogo}  = this.state ;

if(clogo ===""){
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
else
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
        const source = response.uri;
        this.setState({ clogo: source });
      }
    });
  }

  
    render(){

        return(
             <ImageBackground source = {require('../../img/login_back.png')} style = {{flex:1}}>
                 <Header
                 statusBarProps={{ barStyle: 'light-content' ,backgroundColor:"#2aabe4",translucent: true,}}
                 leftComponent={ <Icon name='ios-arrow-back'  style={{color:'white',fontSize:25}}/>}
                 centerComponent={{ text: 'Edit Employee', style: { color: '#fff',fontWeight:'bold',fontSize:20 } }}
                 containerStyle={{
                 backgroundColor: '#2aabe4',
                 justifyContent: 'space-around',
                 borderWidth:0,borderBottomColor:'#2aabe4'
                }}
              />
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
            marginHorizontal:20,
            height: height/3.5,backgroundColor:'white',justifyContent:'center',borderRadius:7}}>
      
      <Text style ={{textAlign:'center',alignItems:'center',alignSelf:'center',fontWeight:'bold',fontSize:25,color:'green'}}>Profile Updated Successfully!</Text>
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
              source={this.state.clogo != '' ? { uri: this.state.clogo} : require('../../img/profile.png')}
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
      value ={this.state.eid}
      inputStyle={{color:'#242424',fontSize:15,fontWeight:'bold',padding: 0}}
      inputContainerStyle = {{borderBottomColor:'#2aabe4',padding: 0}}
   />

<Text></Text>
     <Input
      onChangeText={ename => this.setState({ename})}
      placeholder ='Employee Name'
      value ={this.state.ename}
      inputStyle={{color:'#242424',fontSize:15,fontWeight:'bold',padding: 0}}
      inputContainerStyle = {{borderBottomColor:'#2aabe4',padding: 0}}
     />
   
<Text></Text>

    <Input
      onChangeText={eemail => this.setState({eemail})}
      placeholder =' Email'
      value ={this.state.eemail}
      inputStyle={{color:'#242424',fontSize:15,fontWeight:'bold',padding: 0}}
      inputContainerStyle = {{borderBottomColor:'#2aabe4',padding: 0}}
   />
 <Text></Text>
 
     <Input
      onChangeText={emobile => this.setState({emobile})}
      placeholder ='Phone Number(with country code)'
      value ={this.state.emobile}
      inputStyle={{color:'#242424',fontSize:15,fontWeight:'bold',padding: 0}}
      inputContainerStyle = {{borderBottomColor:'#2aabe4',padding: 0}}
     />
  <Text></Text>
   <Text></Text>
   <MyButton title="UPDATE" onPress = {this.validateInput}/>
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

  });
export default AddEmp;