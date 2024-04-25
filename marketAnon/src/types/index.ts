// TYPES
export type UserBuyerType = {
  id: number,
  firstName: string,
  lastName: string,
  username: string,
  email:string
}

export type VendorType = {
  id: number,
  name: string
}

export type ReviewType = {
    id: number,
    title: string,
    body: string,
    date_created: string,
    author: UserBuyerType,
    vendor_id: number
  }
  
  
export type ReviewFormDataType = {
    title: string,
    body: string,
}

export type UserFormDataType = {
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  company: string,
  title: string,
  password: string,
  confirmPassword: string
}

export type CategoryType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'

export type TokenType = {
    token: string,
    tokenExpiration: string
}