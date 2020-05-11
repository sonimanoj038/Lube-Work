import React from 'react';
import { View, Image, StatusBar ,StyleSheet,ImageBackground,Modal,ToastAndroid,Dimensions,TouchableOpacity,FlatList} from 'react-native';
import { Avatar,Input,Lebal,Button ,CheckBox,Header} from 'react-native-elements';
import TextField from '../../common/components/input'
import MyButton from '../../common/components/Button'
import Icon from 'react-native-vector-icons/Ionicons';
import { Right, Left, Footer,Body,Item,Card,CardItem,Text, Thumbnail,List,ListItem} from 'native-base';
import ImagePicker from 'react-native-image-picker';
const width = Dimensions.get('window').width;
const height =Dimensions.get('window').height;

const data = [{"id":"1","path":require('../../img/imagesf.jpeg'),"name":"Service Request","mobile":"852655555","empid":"md1122","email":"xyz@gmail.com","status":"1"},
{"id":"2","path":require('../../img/imagess.jpeg'),"name":"Notifications","name":'Service Request',"mobile":'852655555',"empid":'md1122',"email":'xyz@gmail.com',"status":"1"},
{"id":"3","path":require('../../img/imagest.jpeg'),"name":"Booking","name":'Service Request',"mobile":'852655555',"empid":'md1122',"email":'xyz@gmail.com',"status":"1"},
{"id":"4","path":require('../../img/imagesf.jpeg'),"name":"transactions","name":'Service Request',"mobile":'852655555',"empid":'md1123',"email":'xyz@gmail.com',"status":"0"},
{"id":"5","path":require('../../img/imagess.jpeg'),"name":"Change Password","name":'Service Request',"mobile":'852655555',"empid":'md1124',"email":'xyz@gmail.com',"status":"1"},
{"id":"6","path":require('../../img/imagesf.jpeg'),"name":"Logout","name":'Service Request',"mobile":'852655555',"empid":'md1125',"email":'xyz@gmail.com',"status":"0"},

]
class  Employees2 extends React.Component{

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
          count:1
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

  renderSeparator = () => (
    <View
      style={{
        backgroundColor: 'grey',
        height: 0.3,
      }}
    />
  );
     
  
    render(){
        
        return(
             <ImageBackground source = {require('../../img/back3.png')} style = {{flex:1}}>
                 <Header
                 statusBarProps={{ barStyle: 'light-content' ,backgroundColor:"#2aabe4",translucent: true,}}
                 leftComponent={ <Icon name='ios-arrow-back'  style={{color:'white',fontSize:25}}/>}
                 centerComponent={{ text: 'Employees', style: { color: '#fff',fontWeight:'bold',fontSize:20 } }}
                 rightComponent={ <View style = {{flexDirection:'row'}}>
                      <Icon name='ios-search'  style={{color:'white',fontSize:28,marginHorizontal:15}} />
                     <Icon name='ios-add'  style={{color:'white',fontSize:30,right:8}} onPress={()=>this.props.navigation.navigate('AddEmp')}/>
                 <Icon name='md-menu'  style={{color:'white',fontSize:30,right:2}} onPress={()=>this.props.navigation.navigate('EMenu')}/>
                 </View>
                }
                 containerStyle={{
                 backgroundColor: '#2aabe4',
                 justifyContent: 'space-around',
                 borderWidth:0,borderBottomColor:'#2aabe4'
                }}
              />
               
               {/* <Modal transparent={true}
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
</Modal>      */}
    <View style = {{flex:0.5,alignItems:'center',PaddingHorizontal:10,paddingVertical:30,marginBottom:-50}}>
    


  </View>
  <View style = {{flex:3.2,backgroundColor:'white',borderWidth:0.5,borderColor:'grey',opacity:0.8}}>
  <FlatList
          data={data}
        showsHorizontalScrollIndicator ={false}
        showsVerticalScrollIndicator = {false}
        ItemSeparatorComponent={this.renderSeparator}
          renderItem={({ item }) => (
            <List >
            <ListItem noBorder avatar>
              <Left>
              <Thumbnail source={item.path} />
              </Left>
              <Body>
              <Text style = {{color:'#373737',fontSize:12}} >{item.empid}</Text>
              <Text style = {{color:'#373737',fontSize:12}} >{item.name}</Text>
                <Text style = {{color:'#373737',fontSize:12}}>{item.email}</Text>
                <Text style = {{color:'#373737',fontSize:12}}>{item.mobile}</Text>
              </Body>
              <Right>
                <View style ={{width: 50,
    height: 50,
    borderRadius: 50/2,backgroundColor:'#2aabe4',alignItems:'center',justifyContent:'center'}}>
<Icon name='ios-mail'  style={{color:'white',fontSize:25}}/>

    </View>
              </Right>
            </ListItem>
</List>
          
          )}
       
          keyExtractor={(item, index) => index.toString()}
        />
   <View footer style = {{justifyContent:'space-between',paddingHorizontal:10,flexDirection:'row',padding:10}}>
              <Text style = {{fontSize:13,color:'#2aabe4',fontWeight:'bold'}}>XLS Sample</Text>
              <Text style = {{fontSize:13,color:'#2aabe4',fontWeight:'bold'}}>Upload Employees</Text>
            </View>
           
 </View>
 <View style = {{flex:0.8}}>


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
export default Employees2;