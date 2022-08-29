function getData() {
    let xhttp = new XMLHttpRequest(); 
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText)
            let myDataArr=JSON.parse(this.responseText)
            // console.log(myDataArr)
            // console.log(myDataArr[0].options.length)
            let myBtn=document.getElementById('btn')
            let indexQst=0
            pullData(myDataArr,0)
            myBtn.addEventListener('click',()=>{
              if(indexQst<myDataArr.length){
                divQst.innerHTML=""
                pullData(myDataArr,indexQst)
                indexQst++

              }
              
            })

        }
        };
        xhttp.open("GET", "data.json", true);
        xhttp.send();

    
}

getData()
let divQst=document.getElementById('qstReg')

function pullData(arr,index) {
    let content=document.getElementById('bodyCont')
    let indexOf=document.getElementById('indexQst')
    let arrLen=document.getElementById('arrLen')
    let timer=document.getElementById('timer')
    let titleQst=document.getElementById('title')
    indexOf.innerHTML=index+1
    arrLen.innerHTML=arr.length
    titleQst.innerHTML=arr[index].qst
    // console.log(arr[index].qst)
    for(i of arr[index].options){
      let divContainer=document.createElement('div')
      let radioElm=document.createElement('input')
      radioElm.setAttribute('type','radio')
      let lableElm=document.createElement('label')
      lableElm.append(i)
      // console.log(radioElm)
      divContainer.appendChild(radioElm)
      divContainer.appendChild(lableElm)
      divQst.appendChild(divContainer)
      content.appendChild(divQst)

    }
  // for(i of arr[index].options){
  //   let div=$('#bodyCont').append('<div><div>')

  //   $(div).append(`<input type='radio'>`)
  //   // console.log(`<input type='radio>' ${i}`)
  //   $(div).append(`<lable>${i}<label>`)

  //   }


 

   
    
}

