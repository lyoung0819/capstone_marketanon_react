// TYPES
export type UserBuyerType = {
  id: number,
  firstName: string,
  lastName: string,
  username: string,
  email:string
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