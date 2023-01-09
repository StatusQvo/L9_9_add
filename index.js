const goals = [8, 1, 1, 3, 2, -1, 5]

const GetSortedArray = function (){
    let sortedGoals =  [...goals].sort((a,b)=>{
        return a-b
    })
        .filter((val)=> val>=0)
    return sortedGoals
}


function mostGoals(srtAr){
    let numberOfGoals = srtAr[srtAr.length -1]
    let number = 1 + goals.indexOf(numberOfGoals)
    alert(`Самый результативный матч был под номером ${number}. В нем было забито ${numberOfGoals} гол(ов).`)
}

function lessGoals(srtAr){
let numberOfGoals = srtAr[0]
let numbers = goals.map((val,i)=>
  val === numberOfGoals ? i+1 : -1
  )
    .filter((val)=>val>=0)
    .join(', ')
alert(`Самые не результативные матчи были под номерами ${numbers}. В каждом из них было забито по ${numberOfGoals} мячу(а).`)
}

function autoLoss (){
    let autoFall = goals.some(val=>{return val<0})
    autoFall = autoFall?'да':'нет'
    alert(`Были автоматические поражения: ${autoFall}.`)
}

function allGoals (srtAr){
    let numberOfGoals = srtAr.reduce((acc,val)=>{return acc+val },0)
    alert(`Общее количество голов за сезон равно ${numberOfGoals}.`)
    return numberOfGoals
}

function averageGoals (allGoals,srtArLength){
    let numberOfGoals = Math.floor(allGoals/srtArLength)
    alert(`Среднее количество голов за матч равно ${numberOfGoals}.`)}


function srtArMSG(srtArr){
    alert(`Статистика матчей по возрастанию голов: ${srtArr.join(', ')}.`)
}


const getGoalsStatistic = ()=>{
    const srtAr = GetSortedArray()

    mostGoals(srtAr)
    lessGoals(srtAr)
    const allGoalsNum = allGoals (srtAr)
    autoLoss ()
    averageGoals(allGoalsNum,srtAr.length)
    srtArMSG(srtAr)
}

getGoalsStatistic()

