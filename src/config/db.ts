// @ts-ignore
import {open} from 'sqlite-async'

export async function getDb() {
   return await open("./db.sqlite")
}