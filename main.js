const data= [
    {
        "id":1,
        "qst":"What bands are classified as the 'Big Four' of thrash metal?",
        "trueAnw":"Metallica, Anthrax, Slayer, Megadeth",
        "options":[
            "Metallica, Anthrax, Slayer, Megadeth",
            "Metallica, Anthrax, Slayer, Disturbed",
            "Anthrax, Pantera, Mötley Crüe, Slayer",
            "Slayer, Lamb of God, Anthrax, Megadeth",       
            "Pantera, Disturbed, Korn, Lamb of God"
        ]
    },
    {
        "id":2,
        "qst":"What year was the first thrash metal album released?",
        "trueAnw":"1983",
        "options":[
            "1991",
            "1986",
            "1976",
            "1981",       
            "1983"
        ]
    },
    {
        "id":3,
        "qst":"Who of these people were kicked out of the thrash band Metallica and later formed the thrash band Megadeth?",
        "trueAnw":"Dave Mustaine",
        "options":[
            "Kirk Hammet",
            "James Hetfield",
            "Dave Mustaine",
            "Kerry King",       
            "Darrel Abbot"
        ]
    },
    {
        "id":4,
        "qst":"Diamond Head and Motorhead were the largest influence to which thrash band?",
        "trueAnw":"Metallica",
        "options":[
            "Anthrax",
            "Megadeth",
            "Lamb of God",
            "Metallica",       
            "Pantera"
        ]

    },
    {
        "id":5,
        "qst":"In the 'Clash of the Titan's' Tour in the 90's, which one of the 'Big Four' of thrash bands was noticably not touring?",
        "trueAnw":"Metallica",
        "options":[
            "Anthrax",
            "Megadeth",
            "Lamb of God",
            "Metallica",       
            "Pantera"
        ]

    },
    {
        "id":6,
        "qst":"Thrash Metal is defined by:",
        "trueAnw":"The speed and intensity of the songs.",
        "options":[
            "How low the guitars are tuned.",
            "How fast the lead singer sings the lyrics",
            "The speed and intensity of the songs.",
            "The \"Death Metal Grunt\" of the singers.",       
            "The percussionist of the band consistantly playing blast beats."
        ]

    }
  
]
// console.log(data)
let indexQst=0
console.log(data.length)
function showQst(indexQst) {
    if (indexQst<data.length) {
        document.getElementById('qstReg').innerHTML=""
        let content=document.getElementById('bodyCont')
        let indexOf=document.getElementById('indexQst')
        let arrLen=document.getElementById('arrLen')
        let titleQst=document.getElementById('title')
        indexOf.innerHTML=indexQst+1
        arrLen.innerHTML=data.length
        titleQst.innerHTML=data[indexQst].qst
        for(i of data[indexQst].options){
          let divContainer=document.createElement('div')
          var radioElm=document.createElement('input')
          radioElm.setAttribute('type','radio')
          radioElm.name=data[indexQst].id
          radioElm.value=i
          let lableElm=document.createElement('label')
          lableElm.append(i)
          divContainer.appendChild(radioElm)
          divContainer.appendChild(lableElm)
          divQst.appendChild(divContainer)
          content.appendChild(divQst)
        }
    

        }else{
            // alert('hhh',trueAnsw)
            document.getElementById('timerCont').style.display="none"
            document.getElementById('bodyCont').style.display='none'
            document.getElementById('footer').style.display='none'
            document.getElementById('outRes').style.display='block'
            document.getElementById('outRes').addEventListener('click',()=>{
                document.getElementById('output').innerHTML=`your final score: ${trueAnsw} of ${data.length}`
            })
            console.log(trueAnsw)
        }
}


function goNext() {
    if (indexQst<=data.length) {
    checkedAnw()
    showQst(indexQst++)
    countDown(timer)
    }
   
}
let timer=20
let interval;
let timerSpan=document.getElementById('timer')
let myBtn=document.getElementById('btn')
let divQst=document.getElementById('qstReg')
let startBtn=document.getElementById('btnStart')
let startCont=document.getElementById('startCont')
let blocApp=document.getElementById('cA')
var trueAnsw=0
function start() {
    startCont.style.display='none'
    blocApp.style.display='block'
    goNext()
    
}

function countDown(timer) {
    if (interval) {
        clearInterval(interval)
        interval=null
    }
    interval=setInterval(() => {
        if (timer==0) {
            goNext()
        }
        timerSpan.innerHTML=timer--
    }, 500);
}


let finalScore=""


function checkedAnw() {
    // console.log(document.querySelectorAll(`input[name="${data[indexQst].id}"]:checked`))
    // console.log(indexQst-1)
    var boolCheck=false
    var checked=document.querySelectorAll(`input`)
    for(let i of checked){
        // console.log(i,i.value)
        if(i.checked==true){
            boolCheck=true
            // console.log(i.value,data[indexQst-1],indexQst)
            if (i.value==data[indexQst-1]['trueAnw']) {
                trueAnsw++
                console.log(i.value,'True',data[indexQst-1]['trueAnw'])


              }  
            // else{
            //     console.log(i.value,'False',data[indexQst-1]['trueAnw'])
            // }

        }
    }
    return boolCheck


}

