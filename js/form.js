let isUpdate=false;
let addressBookDataObj={};
window.addEventListener("DOMContentLoaded", (event) => {
    //addHTML();
   // validateName();
    checkForUpdate();
});

function validateName(){

    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        const nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}[ ]{1,}[A-Z]{1}[a-z]{0,}$');
        if (nameRegex.test(name.value)) {
            textError.textContent = "";
        } else {
            textError.textContent = "Name is incorrect";
        }
    });


}
const save=()=>{
    try{
    let AddressBookData= addDataInAddressBook();
  // alert(AddressBookData);
   createLocalStorage(AddressBookData);
    }
    catch(e){
        console.log(e);
    }
}

const addDataInAddressBook =()=>{
    let addressBookData = new AddressBook();

    //read name 
    
    addressBookData.name=document.querySelector('#name').value;
    addressBookData.address=document.querySelector('#address').value;
    addressBookData.phone=document.querySelector('#phone').value;
    addressBookData.state= document.querySelector('#state').value;
    addressBookData.city=document.querySelector('#city').value;
    addressBookData.zip=document.querySelector('#zip').value;
    addressBookData.id=new Date().getTime()+1;

   return addressBookData;
}
function createLocalStorage(addressBookInfo){

  
        let dataList=JSON.parse(localStorage.getItem("AddressBookList"));
        if(dataList!=undefined){
            dataList.push(addressBookInfo);
        }
        else{
            dataList=[addressBookInfo]
        }
        localStorage.setItem('AddressBookList',JSON.stringify(dataList));
        alert("Data stored with name "+addressBookInfo.name)
    

}

const checkForUpdate =()=>{
    let jsonData=localStorage.getItem('edit-emp')
    isUpdate = jsonData ? true : false;
    if(!isUpdate)
        return;
    addressBookDataObj=JSON.parse(jsonData)
    setForm();
}

const setForm=()=>{
    setValue('#name', addressBookDataObj._name);
    setValue('#address', addressBookDataObj._address);
    setValue('#phone', addressBookDataObj._phone);
    setValue('#state', addressBookDataObj._state);
    setValue('#city', addressBookDataObj._city);
    setValue('#zip', addressBookDataObj._zip);
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}