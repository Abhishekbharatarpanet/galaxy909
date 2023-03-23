// to get full year

function getYear() {
    let current_year = document.getElementById('current-year')
  const year_now = new Date();
  current_year.innerHTML=year_now.getFullYear();
  }
  getYear();


let header = document.querySelector('.background-transprenet')
function getWith(e){
    let scrollTop = this.scrollY;
    

    if(scrollTop >= 200){
        header.setAttribute('id','sticky_header')
      
    }else{
        header.removeAttribute('id','sticky_header')
    }

}




let dataIPL = [{"id":"4bb61b6e2cc625d2cd84d51fe98137f2","sport_key":"cricket_ipl","sport_title":"IPL","commence_time":"2023-03-31T14:00:00Z","home_team":"Gujarat Titans","away_team":"Chennai Super Kings","bookmakers":[{"key":"fanduel","title":"FanDuel","last_update":"2023-03-23T10:12:15Z","markets":[{"key":"h2h","last_update":"2023-03-23T10:12:15Z","outcomes":[{"name":"Chennai Super Kings","price":114},{"name":"Gujarat Titans","price":-138}]}]},{"key":"bovada","title":"Bovada","last_update":"2023-03-23T10:11:28Z","markets":[{"key":"h2h","last_update":"2023-03-23T10:11:28Z","outcomes":[{"name":"Chennai Super Kings","price":105},{"name":"Gujarat Titans","price":-125}]}]},{"key":"barstool","title":"Barstool Sportsbook","last_update":"2023-03-23T10:14:27Z","markets":[{"key":"h2h","last_update":"2023-03-23T10:14:27Z","outcomes":[{"name":"Chennai Super Kings","price":110},{"name":"Gujarat Titans","price":-148}]}]},{"key":"draftkings","title":"DraftKings","last_update":"2023-03-23T10:12:15Z","markets":[{"key":"h2h","last_update":"2023-03-23T10:12:15Z","outcomes":[{"name":"Chennai Super Kings","price":110},{"name":"Gujarat Titans","price":-140}]}]}]},{"id":"5077b7651a7b187e8ca386feb31166f9","sport_key":"cricket_ipl","sport_title":"IPL","commence_time":"2023-04-01T10:00:00Z","home_team":"Punjab Kings","away_team":"Kolkata Knight Riders","bookmakers":[{"key":"fanduel","title":"FanDuel","last_update":"2023-03-23T10:12:15Z","markets":[{"key":"h2h","last_update":"2023-03-23T10:12:15Z","outcomes":[{"name":"Kolkata Knight Riders","price":100},{"name":"Punjab Kings","price":-122}]}]},{"key":"barstool","title":"Barstool Sportsbook","last_update":"2023-03-23T10:14:27Z","markets":[{"key":"h2h","last_update":"2023-03-23T10:14:27Z","outcomes":[{"name":"Kolkata Knight Riders","price":100},{"name":"Punjab Kings","price":-134}]}]},{"key":"draftkings","title":"DraftKings","last_update":"2023-03-23T10:12:15Z","markets":[{"key":"h2h","last_update":"2023-03-23T10:12:15Z","outcomes":[{"name":"Kolkata Knight Riders","price":100},{"name":"Punjab Kings","price":-130}]}]}]},{"id":"01a5be1220dc158ed8052b26578ce060","sport_key":"cricket_ipl","sport_title":"IPL","commence_time":"2023-04-01T14:00:00Z","home_team":"Lucknow Super Giants","away_team":"Delhi Capitals","bookmakers":[{"key":"fanduel","title":"FanDuel","last_update":"2023-03-23T10:12:15Z","markets":[{"key":"h2h","last_update":"2023-03-23T10:12:15Z","outcomes":[{"name":"Delhi Capitals","price":-116},{"name":"Lucknow Super Giants","price":-106}]}]},{"key":"bovada","title":"Bovada","last_update":"2023-03-23T10:11:28Z","markets":[{"key":"h2h","last_update":"2023-03-23T10:11:28Z","outcomes":[{"name":"Delhi Capitals","price":-125},{"name":"Lucknow Super Giants","price":105}]}]},{"key":"barstool","title":"Barstool Sportsbook","last_update":"2023-03-23T10:14:27Z","markets":[{"key":"h2h","last_update":"2023-03-23T10:14:27Z","outcomes":[{"name":"Delhi Capitals","price":-118},{"name":"Lucknow Super Giants","price":-112}]}]},{"key":"draftkings","title":"DraftKings","last_update":"2023-03-23T10:12:15Z","markets":[{"key":"h2h","last_update":"2023-03-23T10:12:15Z","outcomes":[{"name":"Delhi Capitals","price":-120},{"name":"Lucknow Super Giants","price":-105}]}]}]},{"id":"73163dafa1b7670992ede30072afd085","sport_key":"cricket_ipl","sport_title":"IPL","commence_time":"2023-04-02T10:00:00Z","home_team":"Sunrisers Hyderabad","away_team":"Rajasthan Royals","bookmakers":[{"key":"fanduel","title":"FanDuel","last_update":"2023-03-23T10:12:15Z","markets":[{"key":"h2h","last_update":"2023-03-23T10:12:15Z","outcomes":[{"name":"Rajasthan Royals","price":-138},{"name":"Sunrisers Hyderabad","price":114}]}]},{"key":"bovada","title":"Bovada","last_update":"2023-03-23T10:11:28Z","markets":[{"key":"h2h","last_update":"2023-03-23T10:11:28Z","outcomes":[{"name":"Rajasthan Royals","price":-115},{"name":"Sunrisers Hyderabad","price":-105}]}]},{"key":"barstool","title":"Barstool Sportsbook","last_update":"2023-03-23T10:14:27Z","markets":[{"key":"h2h","last_update":"2023-03-23T10:14:27Z","outcomes":[{"name":"Rajasthan Royals","price":-118},{"name":"Sunrisers Hyderabad","price":-112}]}]},{"key":"draftkings","title":"DraftKings","last_update":"2023-03-23T10:12:15Z","markets":[{"key":"h2h","last_update":"2023-03-23T10:12:15Z","outcomes":[{"name":"Rajasthan Royals","price":-120},{"name":"Sunrisers Hyderabad","price":-105}]}]}]},{"id":"eabfdd152e4692df758008810816cb17","sport_key":"cricket_ipl","sport_title":"IPL","commence_time":"2023-04-02T14:00:00Z","home_team":"Royal Challengers Bangalore","away_team":"Mumbai Indians","bookmakers":[{"key":"fanduel","title":"FanDuel","last_update":"2023-03-23T10:12:15Z","markets":[{"key":"h2h","last_update":"2023-03-23T10:12:15Z","outcomes":[{"name":"Mumbai Indians","price":-110},{"name":"Royal Challengers Bangalore","price":-110}]}]},{"key":"bovada","title":"Bovada","last_update":"2023-03-23T10:11:28Z","markets":[{"key":"h2h","last_update":"2023-03-23T10:11:28Z","outcomes":[{"name":"Mumbai Indians","price":-110},{"name":"Royal Challengers Bangalore","price":-110}]}]},{"key":"draftkings","title":"DraftKings","last_update":"2023-03-23T10:12:15Z","markets":[{"key":"h2h","last_update":"2023-03-23T10:12:15Z","outcomes":[{"name":"Mumbai Indians","price":-110},{"name":"Royal Challengers Bangalore","price":-110}]}]}]}]


console.log(dataIPL)

let Ipl_schedule = document.getElementById('Ipl_schedule')



let textnode = '';
dataIPL.forEach(element => {

    const date = new Date(element.commence_time);
const formattedDate = date.toLocaleString(); 
let myDateTime= formattedDate.split(' ')
let myDate= myDateTime[0].split('/')



    textnode+= `<div class="col-lg-6">
    <div class="inner_iplcard">
      <div class="left-team">
        <img src="/images/${element.home_team}.png" alt="">
        <p>${element.home_team}</p>
      </div>
      <div class="Mid-teamDetail">

        <h2>${element.sport_title}</h2>
        <p>${myDateTime[1]+" "+myDateTime[2]}</p>
        <p>${myDate[0].padStart(2, '0')+" : "+myDate[1].padStart(2, '0')+" : "+myDate[2].slice(0,-1)}</p>
      </div>
      <div class="Right-team"> <img src="/images/${element.away_team}.png" alt="">
      <p>${element.away_team}</p>
      </div>
    </div>
  </div>`
 
// console.log(textnode)
});
Ipl_schedule.innerHTML=textnode;
