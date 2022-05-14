function provPt(){
     fetch("https://www.abibliadigital.com.br/api/verses/kjv/pv/1")
     .then((response) => response.json())
     .then((obj) => console.log(obj))
}

function provEn() {
    fetch("https://www.abibliadigital.com.br/api/verses/kjv/pv/1")
.then((response) => response.json())
.then((obj) => console.log(obj))
}


function ramdonSalm() {
    fetch("https://www.abibliadigital.com.br/api/verses/kjv/sl/random")
.then((response) => response.json())
.then((obj) => console.log(obj))
}