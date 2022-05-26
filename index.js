
const token = " "

const submitButton = document.getElementById("read")
const date = document.getElementById("date")
const textArea = document.getElementById("txt")
const presentation = document.querySelector("#presentation")
const enButton = document.getElementById("en")
const ptButton = document.getElementById("pt")
const esButton = document.getElementById("es")

let version = "kjv/pv"

english()

ptButton.addEventListener("click", () => {
    version = "nvi/pv"
    presentation.innerText = "O livro de Provérbios foi escrito pelo Rei Salomão para transmitir conhecimento e sabedoria. Neste plano de leitura você poderá ler o livro inteiro em 31 dias (um capítulo por dia). Como o conteúdo deste livro pode ser aplicado independente de sua ordem, simplesmente selecione o dia de hoje e aproveite a leitura!"
    submitButton.value = "Ler"
})

esButton.addEventListener("click", () => {
    version = "rvr/pv"
    presentation.innerText = "El libro de Proverbios fue escrito por el rey Salomón para ofrecer instrucción, sabiduría y entendimiento. En este plan de lectura vas a ser capaz de leer el libro completo en 31 días (un capítulo por día). como el el contenido de Proverbios es independiente de su orden, simplemente elija la fecha de hoy en el cuadro a continuación, y lo resolveremos por usted. ¡Disfrutar!"
    submitButton.value = "Leer"

})

enButton.addEventListener("click", () => {document.location.reload()})




function english(){ //added everything into a function as I'm trying to implement multiple languages
    submitButton.addEventListener("click", () => {
        const day = parseInt(date.value.slice(-2), 10)
        console.log(day)
        document.addEventListener("DOMContentLoaded", provEn(day))
    })
    
    function provEn(n) {
        const enData = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
         return fetch(`https://www.abibliadigital.com.br/api/verses/${version}/${n}`, enData)
            .then((response) => response.json())
            .then((obj) => {
                console.log(obj)

                const verses = obj.verses
    
                const h1 = document.createElement("h1")
                h1.innerText = `Proverbs ${obj.chapter.number}`
                textArea.appendChild(h1)
    
                verses.forEach(verse => {
                    const p = document.createElement("p")
                    p.innerHTML = `${verse.number}. ${verse.text}`
                    textArea.appendChild(p)
                });
            })
            .then(() => {
                let refBtn = document.createElement("button") //trying to create a refresh button
                refBtn.innerText = "Refresh page"
                refBtn.id = "refresh"
                textArea.appendChild(refBtn)
                refBtn.addEventListener("click", () => {
                    document.location.reload()
                })
            })
            .catch((error) => {
                console.log(error)
                
                        
                if(error == "TypeError: Cannot read properties of undefined (reading 'number')"){
                    window.alert("Please enter today's date")
                }
                
            }
        )

        
    }
    
}

