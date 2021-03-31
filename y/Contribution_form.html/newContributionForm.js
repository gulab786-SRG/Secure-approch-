// // // // // // // // // // // // // // // // // // // // // // // 

var uploadFile=()=>{
    var data=Locationvalue();
    
    let files=document.getElementById('files').files[0];
    if(files){
      
      //ref().child('images/space.jpg')
  //    `${data.Country}/${data.State}/${data.Region}/${data.locality}`
  //files.name
      firebase.storage().ref(`${data.Country}/${data.State}/${data.Region}/${data.locality}`).child(files.name).put(files).then(()=>{
      alert("File added successfully")
      getDownloadUrl();
  
      }).catch((e)=>{
      console.log(e);
        })
  
  
  }
  }
  // // // // // // // // // // // // // // // // // // // // // // 
  ///////////////////////////////////////////////////////////// 
  // var uploadFilePromise= new Promise (function(resolve,reject){
  //   var data=Locationvalue();
    
  //   let files=document.getElementById('files').files[0];
  //   if(files){
        
  //     firebase.storage().ref(`${data.Country}/${data.State}/${data.Region}/${data.locality}`)
  //     .child(files.name).put(files).then(()=>{
  //     alert("File added successfully")
  //     }).catch((e)=>{
  //     console.log(e);
  //       })
  
  
  // }
  
  // resolve(" File Adding Done ");
  // reject(" File Not Added ")
  
  // }) 
  //////////////////////////////////////////////////////////////////////
  
  
   
  
  // function getAllFiles(){
  
  //   firebase.storage().ref(`${data.Country}/${data.State}/${data.Region}/${data.locality}`).listAll().then( (fileRef)=>{
    
  //     console.log(fileRef.items)  ;
  //     fileRef.items.forEach(element => {
  //       console.log(element);
  //       getAllFilesFromRef(element);
  //     });
    
  //   })
  
  
  // }
  
  
  
  
    // function  getAllFilesFromRef(ref){
    //   ref.getDownloadURL().then((url)=>{
    //     console.log(url);
    //   })
    //   }
  
  
    function CrimeRecordValues(){
     
      
      
      var Crime_Activity_record=document.getElementById('Crime_Activity_record');
      var Crime_Activity_recordValue=Crime_Activity_record.value;
  
      var Security_gaurd=document.getElementById('Security_gaurd');
      var Security_gaurdValue=Security_gaurd.value;
  
      var Peoples_Environment=document.getElementById('Peoples_Environment');
  var Peoples_EnvironmentValue=Peoples_Environment.value;
      
  var Safety_percentage=document.getElementById('Safety_percentage');
  var Safety_percentageValue=Safety_percentage.value;
      
      
      var CrimeRecord={
        
        Past_Crime_Activity_record:Crime_Activity_recordValue,
  
        Security_gaurd_Availability:Security_gaurdValue,
  
        Social_Peoples_Environment:Peoples_EnvironmentValue,
  
        Safety_percentage:Safety_percentageValue
      
      } 
      return CrimeRecord
     }
  
     function Locationvalue(){
        
      var country= document.getElementById('locationCountry');
      var countryValue=country.value;
     
           var state=document.getElementById('State');
           var statValue=state.value;
      
           var region=document.getElementById('Region');
           var regionValue=region.value;
     
           var locality=document.getElementById('Locality');
     var localityValue=locality.value;
     
           var Location={
             Country:countryValue,
             State:statValue,
             Region:regionValue,
             Locality:localityValue
           } 
          
           return Location
     
     
        }
  
        function uploadData(){
          var data=Locationvalue();
          var crimeRecord=CrimeRecordValues();
     
          
     
          // action of Uploading data 
          firebase.firestore().collection(data.Country).doc(data.State)
          .collection(data.Region).doc(data.Locality)
          .set( crimeRecord).then(() => {
            alert("Data Written")
           
         })
         .catch((error) => {
             console.error("Error writing document: ", error);
         });
     
        }
        
        // send the images url to  database 
        ////
  // function sendUrlOfImagesToDatabase(){
  //   var data=Locationvalue();
    
  //   firebase.storage().ref(`${data.Country}/${data.State}/${data.Region}/${data.locality}`)
  //   .listAll().then( (fileRef)=>{
    
  //     console.log(fileRef.items)  ;
  
  
      
  //     var i=1;
  //     fileRef.items.forEach(element => {
  //       console.log(element);
  //      var url =  sendUrlfromFromRef(element);
  //      var mainUrl={
  //        url:url
  //      }
  
  //      firebase.firestore().collection(data.Country).doc(data.State)
  //      .collection(data.Region).doc(data.Locality)
  //      .collection('images').doc(`image${i++}`).set(mainUrl).then(() => {
  //       alert("url Written")
       
  //    })
  //    .catch((error) => {
  //        console.error("Error writing document: ", error);
  //    });
  
  
  
  
  
  
  //     });
    
  //   })
  
  // }
  // function  sendUrlfromFromRef(ref){
  //   ref.getDownloadURL().then((url)=>{
  //    return url
  //   })
  //   }
  
     
  
  
  
  
  function getDownloadUrl(){
    var Ldata=Locationvalue();
  var Cdata =CrimeRecordValues();
  /////////////////
  var newdata={
    Past_Crime_Activity_record:Cdata.Past_Crime_Activity_record,
    Security_gaurd_Availability:Cdata.Security_gaurd_Availability,
    Social_Peoples_Environment:Cdata.Social_Peoples_Environment,
    Safety_percentageValue:Cdata.Safety_percentage
  }
  /////////////////////////
  //ref().child('images/space.jpg')
  
  firebase.storage().ref(`${Ldata.Country}/${Ldata.State}/${Ldata.Region}/${Ldata.locality}`).listAll().then( ref=>{
  
      var i=1;
  
      //
  
      ref.items.forEach(fileref=>{
        console.log(fileref);
  
        var url =getlinkfromurl(fileref ,i,Cdata)
        i++;
        
  
  
     
     
      })
  
     }).catch(e=>{
       console.log(e);
     })
  }
  
  function getlinkfromurl(ref, i,Cdata){
  
    var Ldata=Locationvalue();
    ref.getDownloadURL().then(url=>{
      console.log(url);
  
  
      // if(i==1){
      //   Cdata[`image${i}`] =  `${url}`
      //   console.log(` url written :${i}` );
  
      //   // Cdata.imageOne=url
      // }
      //  else if(i==2){
      //   Cdata[`image${i}`] =  `${url}`
      //   console.log(` url written :${i}` );
      //   // Cdata.imageTwo=url
        
      // }
      // else if(i==3){
      //   Cdata[`image${i}`] = `${url}`
      //   console.log(` url written :${i}` );
      //   // Cdata.imageThree=url
      // }
      
      // else if(i==4){
      //   Cdata[`image${i}`] = `${url}`
      //   console.log(` url written :${i}` );
      //   // Cdata.imageFour=url
      // }
      // else{
      //   Cdata[`image${i}`] = `${url}`
      //   console.log(` url written :${i}` );
        
      // }
  
      Cdata[`image${i}`] = `${url}`
      console.log(` url written :${i}` );
  
      // var mainUrl={
      //   url:url
      // }
  
  
  
      firebase.firestore().collection(Ldata.Country).doc(Ldata.State)
      .collection(Ldata.Region).doc(Ldata.Locality)
    .set(Cdata).then(() => {
      // alert("url Written")
      
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
  
  
      
  
      return url;
    })
  
  }
  
  document.getElementById('sendData').addEventListener("click",()=>{
    console.log("calling  data button");
    uploadData();
  
  })
  
  
  
  
    document.getElementById('sendImages').addEventListener('click',()=>{
      console.log("Sending Image");
      uploadFile();
      console.log("Calling send Images")
      callSendfiles();
  
    })
    //function  call everythinf to send  images 
  
  var callSendfiles= async()=>  {
  // var message=  await  uploadFile();
  //  uploadFilePromise.then((resp)=>{
  // console.log(resp);
  // })
  
  // sendUrlOfImagesToDatabase()
    getDownloadUrl()
  }
    