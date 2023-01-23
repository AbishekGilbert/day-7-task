
// E)Print the country which uses US Dollars as currency.

var request= new XMLHttpRequest
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function(){
 var data=request.response
 var result=JSON.parse(data)
 var countries4=result.filter((element) => element?.currencies?.USD)
     console.log(countries4);
     var countries5=result.filter((element) => element?.currencies?.USD)
     console.log(countries5);
}
