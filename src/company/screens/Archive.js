import React from 'react';
import { View, Image, StatusBar ,StyleSheet,ImageBackground,Modal,ToastAndroid,Dimensions,TouchableOpacity,FlatList} from 'react-native';
import { Avatar,Input,Lebal,Button ,CheckBox,Header} from 'react-native-elements';
import TextField from '../../common/components/input'
import MyModal from '../../common/components/Modal'
import Icon from 'react-native-vector-icons/Ionicons';
import { Right, Left, Footer,Body,Item,Card,CardItem,Text, Thumbnail,List,ListItem} from 'native-base';
import ImagePicker from 'react-native-image-picker';
const width = Dimensions.get('window').width;
const height =Dimensions.get('window').height;
import LinearGradient from 'react-native-linear-gradient';
const data = [{"id":"1","path":require('../../img/imagesf.jpeg'),"name":"Service Request","mobile":"852655555","empid":"md1122","email":"xyz@gmail.com","status":"1"},
{"id":"2","path":require('../../img/imagess.jpeg'),"name":"Notifications","name":'Service Request',"mobile":'852655555',"empid":'md1122',"email":'xyz@gmail.com',"status":"1"},
{"id":"3","path":require('../../img/imagest.jpeg'),"name":"Booking","name":'Service Request',"mobile":'852655555',"empid":'md1122',"email":'xyz@gmail.com',"status":"1"},
{"id":"4","path":require('../../img/imagesf.jpeg'),"name":"transactions","name":'Service Request',"mobile":'852655555',"empid":'md1123',"email":'xyz@gmail.com',"status":"0"},
{"id":"5","path":require('../../img/imagess.jpeg'),"name":"Change Password","name":'Service Request',"mobile":'852655555',"empid":'md1124',"email":'xyz@gmail.com',"status":"1"},
{"id":"6","path":require('../../img/imagesf.jpeg'),"name":"Logout","name":'Service Request',"mobile":'852655555',"empid":'md1125',"email":'xyz@gmail.com',"status":"0"},

]
class Archive extends React.Component{

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
          isVisible:true
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
                 centerComponent={{ text: 'Archive', style: { color: '#fff',fontWeight:'bold',fontSize:20 } }}
                 rightComponent={ <View style = {{flexDirection:'row'}}>
                     <Icon name='ios-search'  style={{color:'white',fontSize:30,marginHorizontal:15}} />
                 <Icon name='md-menu'  style={{color:'white',fontSize:30,}} onPress={()=>this.props.navigation.navigate('EMenu')}/>
                 </View>
                }
                 containerStyle={{
                 backgroundColor: '#2aabe4',
                 justifyContent: 'space-around',
                 borderWidth:0,borderBottomColor:'#2aabe4'
                }}
              />
               {/* <MyModal visible = { setInterval(() => {
      this.setState({
        visible: false
      });
    }, 3000)} msg = "Profile updated Successfully!"/> */}
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
      <Text style = {{fontSize:22,color:'#272727',textAlign:'center',alignItems:'center',alignSelf:'center'}}>
              Are you sure  you want to unblock employee?   </Text>
          <Text></Text> 
          <Text></Text> 
          <View style={styles.MainContainer}>


        <TouchableOpacity >

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
            locations={[0, 0.3, 0.9]} >

              <Text style={styles.buttonText}> NO</Text>
                  
            </LinearGradient>
        
        </TouchableOpacity>

      </View>      
    </View>
  </View>
</Modal>
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
export default Archive;