function configureazaButon(buton){
    const numarApasari=Number(buton.dataset.numarApasari)
    let apasari=0
    buton.onclick=()=>{
        apasari++;
        if(apasari>=numarApasari){
            buton.disabled=true
        }
    }
}

const butoane = document.querySelectorAll(".butonuSpecial")

for(const btn of butoane){
    configureazaButon(btn)
}

