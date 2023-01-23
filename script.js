// A) Get all the countries from the Asia continent /region using the Filter function

       var request= new XMLHttpRequest
       request.open("GET","https://restcountries.com/v3.1/all")
       request.send()
       request.onload=function(){
        var data=request.response
        var result=JSON.parse(data)
        var abi=result.filter((element)=>element.continents=="Asia"|| element.region=="Asia")
        console.log(abi)
       }