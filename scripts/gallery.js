/*const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const playlist = ['photo1', 'photo2', 'photo3', 'photo4', 'photo5'];
let index = 0;
const names = ['Горина Марина Константиновна', 'Ашкалова Дарья Павловна', 'Конькова Мария Данииловна', 'Шевнин Даниил Михайлович', 'Гофман Омара Ивановна']
const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const text3 = document.querySelector('.text3');
const len = 5;

function next(){
    console.log('next');
    index++;
    if(index==len){
        index = 0;
    } 
    first.src = `img/${playlist[index]}.jpg`;
    second.src = `img/${playlist[(index + 1) % len]}.jpg`;
    third.src = `img/${playlist[(index + 2) % len]}.jpg`;
    text1.innerText = names[index];
    text2.innerText = names[(index + 1) % len];
    text3.innerText = names[(index + 2) % len];
}


function prev(){
    console.log('previous');
    index = index-1;
    if(index==-1){
        index = len-1;
    } 
    first.src = `img/${playlist[index]}.jpg`;
    second.src = `img/${playlist[(index - 1 + len) % len]}.jpg`;
    third.src = `img/${playlist[(index - 2 + len) % len]}.jpg`;
    text1.innerText = names[index];
    text2.innerText = names[(index - 1 + len) % len];
    text3.innerText = names[(index - 2 + len) % len];
}*/





/*{
    margin: 0;
    padding: 0;
    text-decoration: none;
}


.div-header{
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 2;
}

header{
    z-index: 999;
    position: relative;
}

.header_1{
    background-color: white;
    
}

.container{
    max-width: 1110px;
    margin: 0 auto;
}

.container_header{
    display: flex;
    align-items: center;
    padding: 36px 0;
    justify-content: space-between;
}



.logo{
    display: flex;
    align-items: center;
    margin-right: 100px;
}

.h1_header{
    color: rgb(5, 95, 116);
font-family: cursive;
font-size: 35px;
font-weight: 900;
line-height: 40px;
letter-spacing: 0%;
text-align: left;
}

.nav_list{
    display: flex;
    list-style: none ;
}

.nav_item{
    margin-right: 32px;
    color: rgb(5, 95, 116);
font-family: cursive;
font-size: 20px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0%;
text-align: left;
cursor: pointer;
transition: .3s;
}

.nav_item:hover{
    color: rgb(145, 218, 235);
}
a{
    color: rgb(5, 95, 116);
}
a:hover{
    color: rgb(145, 218, 235);
}




.header_2{
    background-color: rgb(5, 95, 116);
    z-index: 998;
}

.container_header_2{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header_text_div{
    margin-right: 32px;
    color: rgb(255, 255, 255);
font-family: cursive;
font-size: 20px;
font-weight: 400;
line-height: 17px;
letter-spacing: 0%;
text-align: center;
cursor: pointer;
transition: .3s;
}


.header_list{
list-style: none;
display: flex;
}

.header_item{
    margin-right: 8px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.header_img{
   max-width: 30px;
}

.header_img:hover{
    filter: brightness(80%);
}





.hero-block{
    background: rgb(193,215,229);
}
.container_hero-block{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 66px 0 90px;
}

.text_section_1{
    margin-right: 32px;
    color: rgb(0, 38, 255);
font-family: American Typewriter, serif;
font-size: 30px;
font-weight: 700;
line-height: 44px;
letter-spacing: 0%;
text-align: left;
cursor: pointer;
transition: .3s;
margin-bottom: 29px;
}
.strong{
    color: rgb(24, 9, 160);
    font-weight: 600;
}

.main_img{
    max-width: 600px;
    align-items: center;
    justify-content: right;
}

.table__div{
    margin-bottom: 70px;
}






 .container_section_2{
    justify-content: space-between;
    align-items: center;
    padding: 47px 0 90px;
 }


.yslugi-list{
    list-style: none;
    
}

.s2{
    display: flex;
}

.u_div1{
    width: 500px;
    height: 230px;
    background: rgb(193,215,229);
    margin-bottom: 300px;
    border-radius: 10px;
    padding: 20px 20px 20px;
    margin-right: 100px;
    margin-top: 20px;
}

.u_div1:hover{
    -webkit-box-shadow: 11px 10px 8px 0px rgba(11, 82, 137, 0.33);
-moz-box-shadow: 11px 10px 8px 0px rgba(11, 82, 137, 0.33);
box-shadow: 11px 10px 8px 0px rgba(11, 82, 137, 0.33);
}

.u_list{
    list-style: none;
}

.u_div2{
    width: 500px;
    height: 230px;
    background: rgba(240, 245, 166, 0.863);
    margin-bottom: 30px;
    border-radius: 10px;
    padding: 20px 20px 20px;
    margin-top: 300px;
}

.u_div2:hover{
    -webkit-box-shadow: 11px 10px 8px 0px rgba(88, 82, 2, 0.33);
-moz-box-shadow: 11px 10px 8px 0px rgba(88, 82, 2, 0.33);
box-shadow: 11px 10px 8px 0px rgba(88, 82, 2, 0.33)ж
}

.u_zag{
    
    color: rgb(5, 95, 116);
font-family: cursive;
font-size: 27px;
font-weight: 400;
line-height: 50px;
letter-spacing: 0%;
text-align: left;
cursor: pointer;
}

.zoom-effect {
    transition: transform 0.5s;
}
  
  .zoom-effect:hover {
    transform: scale(1.1);
    z-index: 1;
}


.collectiv{
    background-color:  rgb(193,215,229);
}
.div_s3{
    padding-top: 30px;
}
.collectiv__title{
    color: rgb(5, 95, 116);
font-family: cursive;
font-size: 35px;
font-weight: 500;
line-height: 44px;
letter-spacing: 0%;
text-align: left;
cursor: pointer;
transition: .3s;
margin-bottom: 29px;
}
.collectiv__d{
    display: flex;
    justify-content: center;
}
.collectiv__img{
    width: 300px;
}
.collectiv_div{
    max-width: 300px;
}
.collectiv__text{
    color: rgb(5, 95, 116);
font-family: Andale Mono, monospace;
font-size: 27px;
font-weight: 500;
line-height: 44px;
letter-spacing: 0%;
text-align: center;
cursor: pointer;
transition: .3s;
margin-bottom: 29px;
}
.photo1{
   margin-left: 15px;
   margin-right: 30px;
}
.photo3{
    margin-left: 30px;
    margin-right: 15px;
}


.triangle-left {
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-right: 40px solid #035661;
    border-left: 1px solid transparent;
    margin-top: 170px;
    background-color: rgb(193,215,229);
    
}

.triangle-right {
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 40px solid #035661;
    margin-top: 170px;
    border-right: 1px solid transparent;
    background-color: rgb(193,215,229);
}




.contacts__title{
    color: rgb(5, 95, 116);
    font-family: cursive;
    font-size: 75px;
    font-weight: 500;
    line-height: 80px;
    letter-spacing: 0%;
    text-align: center;
    cursor: pointer;
    transition: .3s;
    margin-top: 29px;
}
.contacts__text{
    color: rgb(5, 95, 116);
    font-family: cursive;
    font-size: 30px;
    font-weight: 500;
    line-height: 44px;
    letter-spacing: 0%;
    text-align: left;
    cursor: pointer;
    transition: .3s;
    margin-top: 29px;
}



.is-active{
    display: block;
}
.burger{
    width: 60px;
    height: 50px;
    background-color: transparent;
    border: none;
    display: none;
    margin-right: 10px;
}
.burger__line{
    width: 100%;
    height: 10px;
    background-color:  rgb(5, 95, 116);
    margin-bottom: 10px;
}
.active .burger__line1{
    transform: translate(2px,20px) rotate(45deg);
}
.active .burger__line2{
    opacity: 0;
}
.active .burger__line3{
    transform: translate(2px,-20px) rotate(-45deg);
}


@media (max-width:600px) {
    .container{
        max-width: 580px;
    }
    .nav_list{
        flex-direction: column;
    }
    .nav_item{
        margin-bottom: 30px;
        margin-left: 20px;
        margin-top: 10px;
    }
    .nav{
        flex-direction: column;
        position: absolute;
        height: 350px;
        background-color: rgb(255, 255, 255);
        width: 250px;
        padding: 5px;
        top: 50px;
        right: 20px;
        transform: translate(300%, 100%);
        transition: 1s;
        z-index: 1000;
      
    }
    .burger{
        display: block;
        z-index: 1001;
     }
    .container_hero-block{
        flex-direction: column;
        align-items: center;
    }
    .text_section_1{
       text-align: center;
    }
    .hero-block_title{
        text-align: center;
        margin-top: 35px;
    }
    .header_text{
        margin-right: 32px;
        color: rgb(255, 255, 255);
        font-family: cursive;
        font-size: 16px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0%;
        text-align: center;
        cursor: pointer;
        transition: .3s;
    }
    .main_img{
        max-width: 500px;
    }
    .u_div1{
        width: 480px;
    height: 210px;
    background: rgb(193,215,229);
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 20px 20px 20px;
    margin-left: 20px;
    }
    .u_div2{
        width: 480px;
    height: 210px;
    background: rgba(240, 245, 166, 0.863);
    border-radius: 10px;
    padding: 20px 20px 20px;
    margin-bottom: 10px;
    margin-top: 15px;
    margin-left: 20px;
    }
    .s2{
        display: block;
    }
    .div_s3{
        flex-direction: column;
        align-items: center;
    }
    .photo3{
        display: none;
    }
    .photo2{
        display: none;
    }
    .burger{
        display: block;
    }
    .nav-active{
        transform: translateX(40px) translateY(40px);
    }
    .u2{
        background:rgba(240, 245, 166, 0.863);
    }
    .u4{
        background:rgba(240, 245, 166, 0.863);
    }
    .u5{
        background:rgb(193,215,229);
    }

    .line-blocks{
        display: flex;
        width: 100%;
        margin: 10px 0;
     }
     .p-i-t{
        width: 90%;
    }
    .i-p{
        width: 10%;
    }
    .price__table{
        width: 600px;
    }
    }










.table__title{
    color: rgb(5, 95, 116);
font-family: cursive;
font-size: 34px;
font-weight: 500;
line-height: 44px;
letter-spacing: 0%;
text-align: center;
cursor: pointer;
transition: .3s;
margin-bottom: 29px;
margin-top: 30px;
}
.tit{
    background-color: rgb(5, 95, 116);
    width: 100%;
    height: 40px;
}


.titles__p{
    
    color: rgb(248, 250, 250);
font-family: cursive;
font-size: 20px;
font-weight: 500;
line-height: 44px;
letter-spacing: 0%;
text-align: left;
justify-content: center;
cursor: pointer;
transition: .3s;
margin-left: 10px;
}

.price__list{
    list-style: none;
}

.prices-item-titles{
    color: rgb(5, 95, 116);
font-family:  Andale Mono, monospace;
font-size: 20px;
font-weight: 500;
line-height: 25px;
letter-spacing: 0%;
text-align: left;
cursor: pointer;
transition: .3s;
margin-left: 0;
}
.p-i-t{
    width: 90%;
}
.item-price{
    color: rgb(5, 95, 116);
font-family:  Andale Mono, monospace;
font-size: 20px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0%;
text-align: right;
cursor: pointer;
transition: .3s;
}
.i-p{
    width: 10%;
}
.line-blocks{
   display: flex;
   width: 100%;
   margin: 10px 0;
}
.price__table{
    width: 1110px;
}*/
