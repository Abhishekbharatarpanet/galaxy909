// to get full year

function getYear() {
    let current_year = document.getElementById('current-year')
  const year_now = new Date();
  current_year.innerHTML=year_now.getFullYear();
  }
  getYear();

//   sticky header
// background-transprenet

let header = document.querySelector('.background-transprenet')
function getWith(e){
    let scrollTop = this.scrollY;
    

    if(scrollTop >= 200){
        header.setAttribute('id','sticky_header')
        console.log(scrollTop)
    }else{
        header.removeAttribute('id','sticky_header')
    }

}