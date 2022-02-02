let addressBookList;
window.addEventListener('DOMContentLoaded',()=>{
    createInnerHTML();
    addressBookList= getPersonContactStorage();
});

function getPersonContactStorage(){
    return localStorage.getItem('AddressBookList')? JSON.parse(localStorage.getItem('AddressBookList')):[];
}
const createInnerHTML =()=>{
    const headHtml=`
    <tr>
    <th>Full Name</th>
    <th>Address</th>
    <th>City</th>
    <th>State</th>
    <th>Zip Code</th>
    <th>Phone Number</th>
    <th>Actions</th>
    </tr>
    `;
    let innerHtml = `${headHtml}`;

    let addressBookList= JSON.parse(localStorage.getItem('AddressBookList'))
    for (const addressBookData of addressBookList) {
        innerHtml =`${innerHtml}
        <tr>
            <td>${addressBookData._name}</td>
            <td>${addressBookData._address}</td>
            <td>${addressBookData._city}</td>
            <td>  ${addressBookData._state}
            </td>
            <td>${addressBookData._zip}</td>
            <td>${addressBookData._phone}</td>
            <td>
                <img id="${addressBookData._id}" onclick="remove(this)" alt="delete" src="../assert/icons/delete-black-18dp.svg">
                <img id="${addressBookData._id}" alt="edit" onclick="update(this)" src="../assert/icons/create-black-18dp.svg">
            </td>
        </tr>
    
        `;
    }


    document.querySelector('#display').innerHTML = innerHtml;
}
function remove (data){
    // alert("hello");
    let addressBook=addressBookList.find(addBookData=> addBookData._id==data.id);
    if(!addressBook)
        return;
  
    const index=addressBookList.map(book=>book._id).indexOf(addressBook._id);
    addressBookList.splice(index,1);
    localStorage.setItem('AddressBookList',JSON.stringify(addressBookList));
    createInnerHTML();


}

function update(data){
    let addressBook=addressBookList.find(addBookData=> addBookData._id==data.id);
    if(!addressBook)
        return;
    localStorage.setItem('edit-emp',JSON.stringify(addressBook))
    window.location.replace("../pages/Register.html");
}