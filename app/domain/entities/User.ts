export class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };

    constructor(data: any) {
        this.street = data.street;
        this.suite = data.suite;
        this.city = data.city;
        this.zipcode = data.zipcode;
        this.geo = data.geo;
    }
}

export class Company {
    name: string;
    catchPhrase: string;
    bs: string;

    constructor(data: any) {
        this.name = data.name;
        this.catchPhrase = data.catchPhrase;
        this.bs = data.bs;
    }
}

export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.username = data.username;
        this.email = data.email;
        this.address = new Address(data.address);
        this.phone = data.phone;
        this.website = data.website;
        this.company = new Company(data.company);
    }
}
