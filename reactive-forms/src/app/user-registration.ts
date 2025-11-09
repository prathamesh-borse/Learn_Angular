export interface UserRegistration {
    userName: string,
    email?: string,
    password: string,
    confirmPassword: string,
    address: {
        city: string,
        state: string,
        postalCode: string
    };
    alternateEmails: string[]
}
