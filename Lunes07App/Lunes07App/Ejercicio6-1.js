class Factura {
    constructor() {
        this.empresa = new Company();
        this.client = new Client();
        this.listProducts = new Array();
        this.iva;
        this.totalCost;
        this.paymentMethod;
    }

    calculteTotalCost() {

    }

}

class Client {
    constructor() {
        this.clientName;
        this.phoneNum;
        this.nif;
        this.address;
    }
}

class Company {
    constructor() {
        this.companyName = "Wayne Tech";
        this.phoneNum = "555-674-412";
        this.nif = "85115114W";
        this.address = "Wayne Tower, Gotham City";
    }
}

class Producto {
    constructor() {
        this.productName;
        this.description;
        this.price;
        this.quantity;
    }
}

let fac1 = new Factura();
