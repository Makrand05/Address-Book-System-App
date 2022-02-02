class AddressBook{

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get name(){
        return this._name
    }
    set name(name){
             this._name=name;
    }

    get address(){
        return this._address;
    }
    set address(address){
        this._address=address;
    }
    get phone(){
        return this._phone;
    }
    set phone(phone){
        this._phone=phone
    }
    get state(){
        return this._state;
    }
    set state(state){
        this._state=state
    }
    get city(){
        return this._city;
    }
    set city(city){
        this._city=city;
    }

    get zip(){
        return this._zip;
    }
    set zip(zip){
        this._zip=zip;
    }
    toString(){
        return " name : " + this._name + ", address : " + this._address + ", phone : " + this._phone +
        ", State : " + this._state + ", city : " + this._city + ", zip : " + this._zip;
    }
}