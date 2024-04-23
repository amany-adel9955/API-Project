// postman : for api response from backend   or swagger
// http / ip / domain / port number / api/ controller => json
// request api => take data from backend
// web shared service: aws , microsoft asure : cloud
var request = new XMLHttpRequest();
request.open("get","https://jsonplaceholder.typicode.com/albums")  // fake api (json placeholder)
request.send()
var data = []
request.addEventListener("readystatechange" , function(){
    if(request.readyState == 4)
  data = JSON.parse( request.responseText) 
  addDataInTable()
})

function addDataInTable(){
    var products = ``
    for (var i=0; i<data.length; i++){
products += ` <tr>
<td>${data[i].userId}</td>
<td>${data[i].id}</td>
<td>${data[i].title}</td>
</tr>`
    }
    document.querySelector(".bd").innerHTML = products
}



