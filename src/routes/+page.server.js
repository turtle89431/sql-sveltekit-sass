import { DB } from '../lib/server/dbConnect';

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
   let db=DB("example")
   db.setTable("test")

   return{table:db.Select()}
}