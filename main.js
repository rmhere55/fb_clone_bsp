const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
// Gender select
if (window.location.pathname === '/'){
    const radiobtn1 = document.querySelector("#flexRadioDefault1")
    const radiobtn2 = document.querySelector("#flexRadioDefault2")
    const radiobtn3 = document.querySelector("#flexRadioDefault3")
    const GenderSelect = document.querySelector("#GenderSelect")
    
    radiobtn1.addEventListener("change" ,()=>{
        GenderSelect.classList.add('d-none')
    })
    radiobtn2.addEventListener("change" ,()=>{
        GenderSelect.classList.add('d-none')
    })
    radiobtn3.addEventListener("change" ,()=>{
        
        GenderSelect.classList.remove('d-none')
    })


}