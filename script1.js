// B) Get all the countries with a population of less than 2 lakhs using Filter function
        
         var request= new XMLHttpRequest
         request.open("GET","https://restcountries.com/v3.1/all")
         request.send()
         request.onload=function(){
        var data=request.response
        var result=JSON.parse(data)
        var abi=result.filter((element)=>element.population<200000)
        console.log(abi)
    }