document.getElementById('securityInfo').style.display="none";

var getLocation=()=>{
    var country =document.getElementById('ECountry');
    var countryValue=country.value;
    console.log( countryValue);


    countryValue=countryValue.toUpperCase();
    console.log( countryValue);

    countryValue=countryValue.trim();
    
    console.log( countryValue);




    var state=document.getElementById('EState');
    var stateValue=state.value;
    stateValue=stateValue.toUpperCase();
    stateValue=stateValue.trim();




    var region=document.getElementById('ERegion');
    var  regionValue=region.value;
    regionValue=regionValue.toUpperCase();
    regionValue=regionValue.trim();
    



    
    var locality=document.getElementById('ELocality');
    var localityValue=locality.value;
    localityValue=localityValue.toUpperCase();
    localityValue=localityValue.trim();
    
    


    var location={
        country:countryValue,
        state:stateValue,
        region:regionValue,
        locality:localityValue
    }
    return location;

}

  var Submitbtn =document.getElementById('EGetLocationData')
  Submitbtn.addEventListener( "click",()=>{

   var data=getLocation();

   if(data.country==""||data.state==""||data.region==""||data.locality=="")
   {
     alert("fill the location ");
   }
   else{
    
   // readData();

   
  var firestore=firebase.firestore();

  const ref=firestore.doc(`${data.country}/${data.state}/${data.region}/${data.locality}`);

  ref.get().then(function(doc){
    if(doc&&doc.exists){
      console.log("enter doc");
      const mydata=doc.data();
     // console.log( mydata);
     
     var object=mydata;
     
     var count= Object.keys(object).length;
     var noOfImages=count-4;
     var hostedImage=[];


     for(var i=1;i<=noOfImages;i++){
       var name="image"+i;
      

     console.log(object[name]);
     hostedImage[i-1]=object[name];

     }
     console.log(hostedImage);
    // 
    hostedImage.forEach((element)=>{
document.getElementById('hostedimgesbyurl').innerHTML+=`


<div class="card" style="width: 44rem;">
  <img src="${element}" style="border-radius:15px"  class="card-img-top" alt="...">
  <div class="card-body">
  
  </div>
</div>

`

    })

    document.getElementById('securityInfo').style.display="block";

    ///answer of question one
     var QAnwerOne=document.getElementById("crimeQOneAnswer");
     QAnwerOne.innerHTML=`
     
     <h4 class="header" style="margin-bottom: 50px;margin-top: 30px;color: navy;">
              ${object.Past_Crime_Activity_record} :</h4>
     `

    ///answer of question two
    var QAnwerTwo=document.getElementById("crimeQTwoAnswer");
    QAnwerTwo.innerHTML=`
    
    <h4 class="header" style="margin-bottom: 50px;margin-top: 30px;color: navy;">
             ${object.Security_gaurd_Availability} :</h4>
    `

    ///answer of question three
    var QAnwerThree=document.getElementById("crimeQThreeAnswer");
    QAnwerThree.innerHTML=`
    
    <h4 class="header" style="margin-bottom: 50px;margin-top: 30px;color: navy;">
             ${object.Social_Peoples_Environment} :</h4>
    `

    ///answer of question four
    var QAnwerFour=document.getElementById("crimeQFourAnswer");
    QAnwerFour.innerHTML=`
    
    <h4 class="header" style="margin-bottom: 50px;margin-top: 30px;color: navy;">
             ${object.Safety_percentage} % :</h4>
    `




    document.getElementById("LocationInfo").style.display="none";
    
    


    }
   
    else{
    alert("No Data Found")  
    
    }
  }).catch((e)=>{
    console.log(e);
  })





   }

})





var readData=()=>{



  var data =getLocation();


 }
 