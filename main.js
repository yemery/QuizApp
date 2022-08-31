const data= [
    {
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
function getQst(indexQst) {
    if (indexQst<=data.length) {
        let content=document.getElementById('bodyCont')
        let indexOf=document.getElementById('indexQst')
        let arrLen=document.getElementById('arrLen')
        let titleQst=document.getElementById('title')
        indexOf.innerHTML=indexQst+1
        arrLen.innerHTML=data.length
        titleQst.innerHTML=data[indexQst].qst
        for(i of data[indexQst].options){
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


        }
    
}
function showQst(indexQst) {
    document.getElementById('qstReg').innerHTML=""
    getQst(indexQst)
    countDown(timer)
    // indexQst++
    
}
function goNext() {
    showQst(indexQst++)
}
let timer=20
let interval;
let timerSpan=document.getElementById('timer')
let myBtn=document.getElementById('btn')
let divQst=document.getElementById('qstReg')

// startBtn
let startBtn=document.getElementById('btnStart')
let startCont=document.getElementById('startCont')
let blocApp=document.getElementById('cA')
startBtn.addEventListener('click',()=>{ 
  startCont.style.display='none'
  blocApp.style.display='block'
  goNext()
})

function countDown(timer) {
    if (interval) {
        clearInterval(interval)
        interval=null
    }
    interval=setInterval(() => {
        timerSpan.innerHTML=timer--
        if (timer==0) {
            goNext()

        }


        
    }, 500);
    
}