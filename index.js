
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik1vbiBNYXkgMDkgMjAyMiAxNTozNDowNSBHTVQrMDAwMC5kZXZwcm8ubGVvQGdtYWlsLmNvbSIsImlhdCI6MTY1MjExMDQ0NX0.d6VZ2uDcKzO3xlisNnyn9DgRd6bwrA42kBb4UBW16qc"
const submitButton = document.getElementById("read")
const date = document.getElementById("date")
const textArea = document.getElementById("txt")


english()

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
         return fetch(`https://www.abibliadigital.com.br/api/verses/kjv/pv/${n}`, enData)
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
