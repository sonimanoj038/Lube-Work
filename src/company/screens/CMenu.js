import React from 'react';
import { View, Image, StatusBar ,Text,StyleSheet,FlatList,ImageBackground,ToastAndroid,Dimensions,TouchableOpacity,Modal} from 'react-native';
import { Avatar,Input,Lebal,Button ,CheckBox,Header} from 'react-native-elements';
import TextField from '../../common/components/input'
import MyButton from '../../common/components/Button'
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Ionicons';
import { Right, Left, Footer,Body,Item} from 'native-base';
import ImagePicker from 'react-native-image-picker';
const width = Dimensions.get('window').width;
const height =Dimensions.get('window').height;

class CMenu extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {  
            password:'',
            cpassword:'',
          loading:true,
          clogo:'',
          cname:'',
          cmobile:'',
          cemail:'',
          tin:'',
          cid:'',
          cperson:'',
          Vehicles:'',
          caddress:'',
          count:1,
          isVisible:false
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

  getVehicles=()=>{
      
let mycount = this.state.count +1

for(let i = 0;i<=2;i++){
 return(<View  key = { i }>
<Item style ={{flexDirection:'row',borderColor: 'transparent',width:'100%'}}>
 <Left>
    <Input
      onChangeText={bname => this.setState({bname})}
      placeholder ='Brand Name'
      inputStyle={{color:'#242424',fontSize:15,fontWeight:'bold',padding: 0}}
      inputContainerStyle = {{borderBottomColor:'#2aabe4',padding: 0}}
   />
 </Left>
     <Right>
     <Input
      onChangeText={ctype => this.setState({ctype})}
      placeholder ='Catogory Type'
      inputStyle={{color:'#242424',fontSize:15,fontWeight:'bold',padding: 0}}
      inputContainerStyle = {{borderBottomColor:'#2aabe4',padding: 0}}
     />
    </Right>
</Item> 
<Text></Text> 
<Item style ={{flexDirection:'row',borderColor: 'transparent',width:'100%'}}>
 <Left>
    <Input
      onChangeText={vin => this.setState({vin})}
      placeholder ='VIN No'
      inputStyle={{color:'#242424',fontSize:15,fontWeight:'bold',padding: 0}}
      inputContainerStyle = {{borderBottomColor:'#2aabe4',padding: 0}}
   />
 </Left>
     <Right>
     <Input
      onChangeText={vehicleno => this.setState({vehicleno})}
      placeholder ='Vehicle No'
      inputStyle={{color:'#242424',fontSize:15,fontWeight:'bold',padding: 0}}
      inputContainerStyle = {{borderBottomColor:'#2aabe4',padding: 0}}
     />
    </Right>
</Item> 
</View>)

}
     
  }
  openMenu = (item)=>{
    if(item.id ==='5'){
      this.props.navigation.navigate('ChangePass')
    }
   
    else if(item.id ==='6'){
      this.setState({isVisible:true})
      
    }
       }
    render(){
const data = [{"id":"1","path":require('../../img/Service.png'),"name":'Service Request'},
{"id":"2","path":require('../../img/Notifications.png'),"name":"Notifications"},
{"id":"3","path":require('../../img/booking.png'),"name":"Booking"},
{"id":"4","path":require('../../img/transactions.jpg'),"name":"transactions"},
{"id":"5","path":require('../../img/password.png'),"name":"Change Password"},
{"id":"6","path":require('../../img/logout.png'),"name":"Logout"},

]
        return(
             <ImageBackground source = {require('../../img/back3.png')} style = {{flex:1}}>
                 <Header
                 statusBarProps={{ barStyle: 'light-content' ,backgroundColor:"#2aabe4",translucent: true,}}
                 leftComponent={ <Icon name='ios-arrow-back'  style={{color:'white',fontSize:25}}/>}
                 centerComponent={{ text: 'Menu Options', style: { color: '#fff',fontWeight:'bold',fontSize:20 } }}
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
            marginHorizontal:30,
            height: height/3.5,backgroundColor:'white',alignItems:'center',borderRadius:7,padding:20}}>
      
      
     <Text></Text>
      <Text style = {{fontSize:23,color:'#272727',textAlign:'center',alignItems:'center',alignSelf:'center'}}>
              Are you sure  you want to logout?   </Text>
          <Text></Text> 
          <Text></Text> 
          <View style={styles.MainContainer}>


        <TouchableOpacity  onPress = {()=> this.props.navigation.navigate('Login')}>

            <LinearGradient  colors={['#1282c1', '#01c0dc']} style={styles.LinearGradientStyle} >

                  <Text style={styles.buttonText}>YES</Text>
                  
            </LinearGradient>
        
        </TouchableOpacity>



        <TouchableOpacity  onPress={()=>this.setState({isVisible:false})}>

            <LinearGradient 
            colors={['#b29d1c', '#d2b500']}
            style={styles.LinearGradientStyle}  
            start={{x: 0, y: 1}} 
            end={{x: 1, y: 0.9}}
            locations={[0, 0.3,]} >

              <Text style={styles.buttonText}> NO</Text>
                  
            </LinearGradient>
        
        </TouchableOpacity>

      </View>      
    </View>
  </View>
</Modal>         
    <View style = {{flex:1,alignItems:'center',PaddingHorizontal:10,paddingVertical:30,marginBottom:-50}}>
<Item  style ={{flexDirection:'row',borderColor: 'transparent',width:'100%',alignItems:'center',PaddingHorizontal:10,justifyContent:'space-evenly'}}>

<View style ={{flexDirection:'column',marginTop:'4%'}}>
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
  <View style = {{flex:3,backgroundColor:'transparent',margin:20,}}>
  <FlatList
          data={data}
        showsHorizontalScrollIndicator ={false}
        showsVerticalScrollIndicator = {false}
          renderItem={({ item }) => (
            <View style={{ flex:1/2,height:150,margin:20 ,justifyContent: 'center',
            alignItems: 'center', backgroundColor:'white',borderColor:'grey',borderWidth:0.3,borderRadius:10}}>
               <TouchableOpacity onPress = {()=>this.openMenu(item)}>
              <Image style={styles.imageThumbnail2} source={item.path} />
              </TouchableOpacity>
          <Text style = {{fontWeight:'bold'}}>{item.name}</Text>
            </View>
          )}
          //Setting the number of column
          numColumns={2}
          columnWrapperStyle={{justifyContent:'space-between'}}
          keyExtractor={(item, index) => index.toString()}
        />
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
      imageThumbnail2: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        resizeMode:'contain',
        padding:10
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
export default CMenu;