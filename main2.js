function getData() {
    let xhttp = new XMLHttpRequest(); 
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            let myDataArr=JSON.parse(this.responseText)
            console.log(myDataArr)
            
          
        };
        xhttp.open("GET", "data.json", true);
        xhttp.send();

    
}
    
}

getData()
