import {Document} from 'mongoose'
export interface Category extends Document{
    readonly code:string,
    readonly name:string,
    readonly active:boolean
}