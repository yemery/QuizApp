function getData() {
    let xhttp = new XMLHttpRequest(); 
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText)
            let myDataArr=JSON.parse(this.responseText)
            // console.log(myDataArr)
            // console.log(JSON.parse(myDataArr))
            pullData(myDataArr)

        }
        };
        xhttp.open("GET", "data.json", true);
        xhttp.send();
        

    
}
getData()
function pullData(arr) {
    let content=document.getElementById('bodyCont')
    let myTitle=document.createElement('h5')
    myTitle.append(arr[0])
    // for(let i=0;i<arr.length;i++){
    //     console.log()
        

    // }
    
}