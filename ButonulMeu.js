class ButonulMeu extends HTMLButtonElement{
    constructor(){
        super()
        console.log("YAy")
        this.numarApasari=0
    }

    connectedCallback(){
        console.log("Gata")
        this.onclick=()=>{
            this.numarApasari++
            if(this.numarApasari>=this.getAttribute("limita-apasari")){
                this.disabled=true
            }
        }
    }
    
    static get observedAttributes() {
        return ["limita-apasari"];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name, oldValue, newValue)
    }
}

customElements.define("butonul-meu",ButonulMeu,{extends:"button"})