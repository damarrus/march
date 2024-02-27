import * as DB from "ts-json-db";

export interface History {
    id: number,
    question: string,
    answer: string,
    date: Date,
}

export interface DBTag {
    name: string,
    value: string | boolean | number
}

export interface DBUser {
    id: number,
    name: string,
    history: History[],
    tags: DBTag[]
}

export interface DBSave {
    userId: number,
    name: string,
    tags: DBTag[]
}

interface ContentDef extends DB.ContentBase {
    paths: {
        '/users': {
            entryType: "array",
            valueType: DBUser
        },
        '/saves': {
            entryType: "array",
            valueType: DBSave
        }
    }
}

let db = new DB.TypedJsonDB<ContentDef>("db.json", undefined, false, true);
db.load();

export default db;