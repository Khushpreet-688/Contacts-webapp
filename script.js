/* This file is where all your work should go for Assignment 2.  Please remove this comment. */

let contactList = [  
	{ 
		name: "Oliver Queen", 
		phone: "778-555-1234", 
		address: "101 Main St, Star City, USA",    
		email: "greenarrow@watchtower.com",  
	},   
	{    
		name: "Jessica Cruz",    
		phone: "123-555-5555",    
		address: "Portland Oregon",    
		email: "greenlantern@watchtower.com",  
	}
]

function cleanUpIndex(){
    const element = document.querySelector(".main")
    element.remove()
}


function trigger_contct_card(evt){
    contct_name = evt.target.textContent
    contactList.forEach(elemnt => {
        if (elemnt.name == contct_name){
            cleanUpIndex()
            renderView(elemnt)
        }
    })
}

function createSingleIndex(given_obj){
    let contact_div = document.createElement('div')
    contact_div.className = 'contact'
    contact_div.innerHTML += `<p>${given_obj.name}</p>`

    contact_div.addEventListener("click", trigger_contct_card)
    
    return contact_div
}

function renderIndex(contact_array){
    let main_div = document.createElement('div')
    main_div.className = 'main'
    document.body.appendChild(main_div)
    
    contact_array.forEach(element => {
        main_div.appendChild(createSingleIndex(element))
    })
}

function cleanUpView(){
    const element = document.querySelector(".contactinfo")
    element.remove()
}

function renderView(contact_obj){
    contact_node = `
    <div class="contactinfo">
            <div class="contactname">
                ${contact_obj.name}
                <img src="./img/profile.jpg" class="profilepic" alt="Profile picture">
            </div>
            <div class="contactemail">email: ${contact_obj.email}</div>
            <div class="contactphone">cell: ${contact_obj.phone}</div>
            <div class="contactaddress">address: ${contact_obj.address}</div>
            <div class="buttons">
                <button class="button edit" value="Edit">Edit</button>
                <button class="button close" value="Close">Close</button>
            </div>
        </div>
    `
    
    main = document.createElement('div')
    main.className = 'main'
    document.body.appendChild(main)
    main.innerHTML += contact_node
    close_butn = document.querySelector(".close")
    close_butn.addEventListener("click", trigger_contact)
}

function cleanUpCreate(){
    const element = document.querySelector(".contactedit")
    element.remove()
}

function renderCreate(){
    single_node = `
        <div class="contactedit">
            <div class="contactimg">
                <img src="./img/profile.jpg" class ="profilepic" alt="Profile picture">
            </div>
            <div class="form">
                <form>
                    <div class="inputcontainer">
                        <input type="text" id="contactname" name="contactname" placeholder="Contact Name" >
                        <button class="extrafield" id="extranamefield" name="extranamefield">+</button>
                    </div>

                    <div class="inputcontainer">
                        <input type="tel" id="contactphone" name="contactphone" placeholder="Contact Phone">
                        <button class="extrafield" id="extraphonefield" name="extraphonefield">+</button>
                    </div>

                    <div class="inputcontainer">
                        <input type="text" id="contactaddress" name="contactaddress" placeholder="Contact Address">
                        <button class="extrafield" id="extraaddressfield" name="extraaddressfield">+</button>
                    </div>
                    
                    <div class="inputcontainer">
                        <input type="email" id="contactemail" name="contactemail" placeholder="Contact Email">
                        <button class="extrafield" id="extraemailfield" name="extraemailfield">+</button>
                    </div>

                    <div class="buttons">
                        <button type="submit" class="button save" id="savecontact" name="savecontact">Save Contact</button>
                        <button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    `
    
    main = document.createElement('div')
    main.className = 'main'
    document.body.appendChild(main)
    main.innerHTML += single_node
    cancel_butn = document.querySelector('.cancel')
    cancel_butn.addEventListener("click", trigger_contact)
    save_butn = document.querySelector('.save')
    save_butn.addEventListener("click", saving)

}

contact = document.querySelector('.nav-home')
function trigger_contact(){
    cleanUpIndex()
    renderIndex(contactList)
}
contact.addEventListener('click', trigger_contact)

create_contact = document.querySelector('.nav')
function trigger_create(){
    cleanUpIndex()
    renderCreate()
}
create_contact.addEventListener('click', trigger_create)

contact_card = document.querySelector(".contact")
  

function saving(e){
    c_name = document.querySelector('#contactname')
    c_phone = document.querySelector('#contactphone')
    c_address = document.querySelector('#contactaddress')
    c_email = document.querySelector('#contactemail')
    let new_contact =
    {
        name: `${c_name.value}`,
        phone: `${c_phone.value}`,
        address: `${c_address.value}`,
        email: `${c_email.value}`
        
    }
    console.log(new_contact)
    contactList.push(new_contact)
    cleanUpIndex()
    renderView(new_contact)
    e.preventDefault()
}

document.addEventListener("DOMContentLoaded", trigger_contact)