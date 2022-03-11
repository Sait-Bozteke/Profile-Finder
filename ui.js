class UI{
    constructor(){
        this.profileContainer=document.querySelector("#profileContainer")
        this.alert=document.querySelector("#alert")
    }
    showProfile(profile){
        this.profileContainer.innerHTML=`<div class="card card-body">
        <div class="row">
        <div class="col-md-3">
             



        <img src="https://via.placeholder.com/150.png/09f/fff" class="img-thumbnail">

      

        </div>
        <div class="col-md-9">
        <h4>Contact</h4>
        <ul class="list-group">
        <li class="list-group-item>
        naem: ${profile.name}
        </li>
        <li class="list-group-item>
        username: ${profile.username}
        </li>
        <li class="list-group-item>
        adress: ${profile.address.street}
                ${profile.address.city}
                ${profile.address.zipcode}
                ${profile.address.suite}
        </li>
        <li class="list-group-item>
        website: ${profile.website}
        </li>
        <li class="list-group-item>
        company: ${profile.company.name}
        </li>
        <li class="list-group-item>
        phone: ${profile.phone}
        </li>
        </div>
        </div>
        </div>`
    }
    showAlert(text){
this.alert.innerHTML=`${text} is not found`
    }
clear(){
    this.profileContainer.innerHTML=""
    this.alert.innerHTML=""
}
}