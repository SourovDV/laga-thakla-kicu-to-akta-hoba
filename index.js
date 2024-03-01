const phoneHandler =async(search,showAll)=>{
    const load = await fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`)
    const data =await load.json()
    const phones = data.data;
    // console.log(phones)
    displayPhones(phones,showAll)
}
const displayPhones = (phone,showAll)=>{
    //bake kaj ta akana saray dita hoba.
    const showALlbtn = document.getElementById('showALlbtn')
    if(phone.length>12 && !showAll){
        showALlbtn.classList.remove('hidden')
    }else{
        showALlbtn.classList.add('hidden')
    }

 

    // console.log('show sdfdsdsf',showAll)
    if(!showAll){
        phone = phone.slice(0,12)
    }
    


 

    //phone model ar kaj kora holo akana
    const cardContainer = document.getElementById('card-container')
    cardContainer.textContent = ''
    phone.forEach((phone)=>{
        // console.log(phone)
    const div = document.createElement('div')
    div.classList =` card w-96 bg-gray-300 p-5 shadow-xl`
    div.innerHTML = `
    <figure><img src="${phone.image}" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-center">
                <button onclick="details('${phone.slug}')" class="btn w-full btn-primary">More details</button>
              </div>
            </div>
    `
    cardContainer.appendChild(div)


    })  
    togoBtns(false)
}

 const details = async(id)=>{
    console.log('asfsdf',id)
    const load =await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await load.json()
    // console.log(data.data)
    const fine = data.data;
    ok(fine)
 }
 

 const ok =(id)=>{
    console.log(id)
    const kicuToHoba = document.getElementById('kicuToHoba')
    kicuToHoba.classList.add('ok-fine')
    kicuToHoba.innerHTML = `
    <h1>${id.slug }</h1>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    <p><span  class="font-extrabold">Stroge:</span> <span>${id.mainFeatures.storage}</span></p>

    <p><span  class="font-extrabold">Display Size:</span> <span>${id.releaseDate}</span></p>
    <p><span  class="font-extrabold">Name:</span> <span>${id.brand}</span></p>
    
    `



  show_details_modal.showModal()
  
 }
 
 
 
//see all btn ar kaj ta kora holo akana
const showALlBtns = ()=>{
    searchBtn(true)
}

 
 
//searchFiled ar kaj ta kora holo
const searchBtn = (showAll)=>{
    togoBtns(true)
    const inputText = document.getElementById('inputText')
    const conver = inputText.value;
    phoneHandler(conver,showAll)
    
}

//togol btn ar kaj kora holo 
const togoBtns =(istogol) =>{
    const togol = document.getElementById('togoBtn')
    if(istogol){
        togol.classList.remove('hidden')
    }else{
        togol.classList.add('hidden')
    }
}

//aitar apatoto kaj nai lagla nibo ne 
phoneHandler()