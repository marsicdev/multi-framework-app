export type UserResponse = {
    users: User[]
    total: number
    skip: boolean
    limit: number
}

export type User = {
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: string
    email: string
    phone: string
    username: string
    password: string
    birthDate: Date
    image: string
    bloodGroup: string
    height: number
    weight: number
    eyeColor: string
    hair: Hair
    domain: string
    ip: string
    address: Address
    macAddress: string
    university: string
    bank: Bank
    company: Company
    ein: string
    ssn: string
    userAgent: string
}

export type Address = {
    address: string
    city: string
    coordinates: Coordinates
    postalCode: string
    state: string
}

export type Coordinates = {
    lat: number
    lng: number
}

export type Bank = {
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: string
    iban: string
}

export type Company = {
    address: Address
    department: string
    name: string
    title: string
}

export type Hair = {
    color: string
    type: string
}
