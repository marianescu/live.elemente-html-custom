class Persoana extends HTMLElement{
    constructor(){
        super()
        console.log("facut persoana")
    }
    connectedCallback(){
        console.log("Gata persoana")
        const continut=this.attachShadow({mode:"open"})
        const imagine=document.createElement("img")
        imagine.src=this.getAttribute("poza")
        imagine.width="48"
        continut.appendChild(imagine)
        const nume=document.createElement("h3")
        nume.textContent=this.getAttribute("nume")
        continut.appendChild(nume)
        
    }
}

customElements.define("x-persoana", Persoana)