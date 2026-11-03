document.getElementById("bill").addEventListener("submit",function(event){
   event.preventDefault()
   let name=document.getElementById("name").value
   let custid=Number(document.getElementById("custid").value)
   let pmread=Number(document.getElementById("pmreading").value)
   let cmread=Number(document.getElementById("cmreading").value)

   let total=cmread-pmread

  document.getElementById("displaynm").innerHTML =("customer name:"+name)
  document.getElementById("displayid").innerHTML =("customer id:"+custid)
  document.getElementById("displaypm").innerHTML =("previous meter reading:"+pmread)
  document.getElementById("displaycm").innerHTML =("current meter reading:"+cmread)
  document.getElementById("display").innerHTML =("unit consumed:"+total+"<br>")

  if(total>0&&total<100){
   document.getElementById("displayun").innerHTML =("total bill:"+total*2)
  }else if(total>101&&total<200){
   document.getElementById("displayun").innerHTML =("total bill:"+total*3)
  }else if(total>201&&total<300){
   document.getElementById("displayun").innerHTML =("total bill:"+total*5)
  }else {
   document.getElementById("displayun").innerHTML =("total bill:"+total*7)
  }

  if(name==""){
    document.getElementById("displaynm").innerHTML =("please enter customer name!")
  }if(cmread<pmread){
   document.getElementById("displaycm").innerHTML =("Invalid meter reading!")
  }if(cmread||pmread<0){
   document.getElementById("display").innerHTML =("Meter reading cannot be negative!")
  }

  localStorage.setItem("Name",name)
}) 

  document.getElementById("Show").addEventListener("submit",function(event){
   event.preventDefault()
   let name=localStorage.getItem("Name")
   document.getElementById("cuname").innerHTML=name+"<br>"


})
document.getElementById("lastnm").addEventListener("submit",function(event){
event.preventDefault()
let name=localStorage.removeItem("Name")
document.getElementById("clear").innerHTML=name

})
  


  



  


  



