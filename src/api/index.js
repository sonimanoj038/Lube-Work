
const BaseUrl = 'https://lubeatwork.markupdesigns.org/api/';


export const imageUrl = 'http://test.bidraves.com:3000/';

export const login= (data) => {
    let formdata = new FormData();
    formdata.append("username",data.username);
    formdata.append("password",data.password);
	const url = `${BaseUrl}login`;
	return fetch(url, {
        method: 'POST',
        headers: {
         'Content-Type': 'multipart/form-data',
        },
        body:formdata
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const changePassword= (data) => {
    console.warn(data.token);
    
    let formdata = new FormData();
    formdata.append("OldPassword",data.OldPassword);
    formdata.append("Password",data.password);
      formdata.append("ConfirmPassword",data.cpassword);
          formdata.append("id",data.id);
          
	const url = `${BaseUrl}changePassword`;
	return fetch(url, {
        method: 'POST',
        headers: {
         'Content-Type': 'multipart/form-data',
          'Apiauthorization':data.token,
        },
        body:formdata
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}
export const submitProfile= (data) => {
    let formdata = new FormData();
    formdata.append("timing",JSON.stringify(timing))
    formdata.append("id",data.id);
    formdata.append("companyname",data.cname);
    formdata.append("contactemail",data.cemail);
    formdata.append("contactmobile",data.cmobile);
    formdata.append("tin",data.tin);
    formdata.append("vehicles", parseInt(data.Vehicles));
    formdata.append("address",data.caddress);
    formdata.append("contactperson",data.cperson);
    const newFile1 = {
    uri:data.clogo.uri, type: data.clogo.type,
    name:data.clogo.fileName
  }
  const newFile2 = {
    uri:data.cphoto.uri, type: data.cphoto.type,
    name:data.cphoto.fileName
  }
  
  formdata.append("avatar",newFile1);
   formdata.append("pic",newFile2);
 
	const url = `${BaseUrl}companyRegistration`;
	return fetch(url,{
        method: 'POST',
        headers: {
         'Content-Type': 'multipart/form-data',
         'Accept': 'application/json',
          'Apiauthorization':data.token,
        },
        body:formdata
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const submitEditProfile= (data) => {
    let formdata = new FormData();
    formdata.append("timing",JSON.stringify(data.timing))
    formdata.append("id",data.id);
    formdata.append("companyname",data.cname);
    formdata.append("contactemail",data.cemail);
    formdata.append("contactmobile",data.cmobile);
    formdata.append("tin",data.tin);
    formdata.append("vehicles", parseInt(data.Vehicles));
    formdata.append("address",data.caddress);
    formdata.append("contactperson",data.cperson);
  
   
 
  if(data.clogo.length !=0){
       console.warn(data.clogo.length,data.cphoto.length);
   const newFile1 = {
    uri:data.clogo.uri, type: data.clogo.type,
    name:data.clogo.fileName
  }
  formdata.append("avatar",newFile1);
}
 if(data.cphoto.length !=0){
      const newFile2 = {
    uri:data.cphoto.uri, type: data.cphoto.type,
    name:data.cphoto.fileName
  }
   formdata.append("pic",newFile2);
 }
	const url = `${BaseUrl}editCompanyProfile`;
	return fetch(url,{
        method: 'POST',
        headers: {
         'Content-Type': 'multipart/form-data',
         'Accept': 'application/json',
          'Apiauthorization':data.token,
        },
        body:formdata
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const EditCProfile= (data) => { 
    let formdata = new FormData();
          formdata.append("id",data.id);
          
	const url = `${BaseUrl}viewCompany`;
	return fetch(url, {
        method: 'POST',
        headers: {
         'Content-Type': 'multipart/form-data',
          'Apiauthorization':data.token,
        },
        body:formdata
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}