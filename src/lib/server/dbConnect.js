import Database from 'better-sqlite3';
export const DB = (Dbname = "example") => {
    const options = {}
    const db = new Database(`${Dbname}.db`, options);

    db.pragma('journal_mode = WAL');
    let Table="test"
    let def = `CREATE TABLE IF NOT EXISTS "${Table}" (
	"pk"	INTEGER NOT NULL,
	"tag"	TEXT NOT NULL,
	"classes"	TEXT,
	"html"	INTEGER,
	PRIMARY KEY("pk" AUTOINCREMENT)
);`
    const setTable = (table) =>{

        Table =table
        Query(def)
    }
    const Select = (fields="*",where) => {
        let query = `SELECT ${fields} FROM ${Table} ${where?`WHERE ${where}`:""}`
        return db.prepare(query).all()
    }
    const Query = query => db.prepare(query).run()
    return {
        Select, Query,setTable
    }
}