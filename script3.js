// D) Print the total population of countries using reduce function

      var request= new XMLHttpRequest
      request.open("GET","https://restcountries.com/v3.1/all")
      request.send()
      request.onload=function(){
        var data=request.response
        var result=JSON.parse(data)
        //console.log(result)
        var abi=result.reduce((acc,element)=>acc+element.population,0)     
        console.log(abi)
    }