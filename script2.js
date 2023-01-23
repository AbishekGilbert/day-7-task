// c) Print the following details name, capital, flag using forEach function

       var request= new XMLHttpRequest
       request.open("GET","https://restcountries.com/v3.1/all")
       request.send()
       request.onload=function(){
        var data=request.response
        var result=JSON.parse(data)
        var abi=result.forEach((element)=>console.log(element.name.common,element.flag,element.capital))       
        console.log(abi)
    }