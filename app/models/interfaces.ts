export interface Child{
    id: number,
    firstName: string,
    lastName: string
}

export interface People {
    address: string,
    checkedIn: boolean,
    children: Child[],
    company: string,
    dateOfBirth: number,
    email: string,
    firstName: string,
    id: string,
    lastName: string,
    picture: string,
    phone: string,
    registered: number
}