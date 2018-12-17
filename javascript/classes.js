class AplicacionesWeb{

    constructor(nombre, tema, lenguaje, tiempo, autor, dni, id) {

        this.nombre = nombre;
        this.tema = tema;
        this.lenguaje = lenguaje;
        this.tiempo = tiempo;
        this.autor = autor;
        this.dni = dni;
        this.id = id;

    }

    get nombre(){
        return this._nombre;
    }

    get tema(){
        return this._tema;
    }

    get lenguaje(){
        return this._lenguaje;
    }

    get tiempo(){
        return this._tiempo;
    }

    get autor(){
        return this._autor;
    }

    get dni(){
        return this._dni;
    }

    get id(){
        return this._id;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set tema(tema){
        this._tema = tema;
    }

    set lenguaje(lenguaje){
        this._lenguaje = lenguaje;
    }

    set tiempo(tiempo){
        this._tiempo = tiempo;
    }

    set autor(autor){
        this._autor = autor;
    }

    set dni(dni){
        this._dni = dni;
    }

    set id(id){
        this._id = id;
    }
}