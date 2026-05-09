import { MongoClient, ObjectId } from "mongodb";

// const oid1 = new ObjectId("69f4781da309158912452868");
// const oid2 = new ObjectId("6796bc22459d4e1388c361e9");

// console.log(oid1.equals(oid2));

// const oid = new ObjectId()
// console.log(oid);

// console.log(oid1.buffer.toString());
// console.log(ObjectId);     // class method
console.log(ObjectId.isValid('69f4781da309158912452868')); 
// const client = new MongoClient("mongodb://localhost:27017/storageApp");

// await client.connect();

// const db = client.db();
// const collection = db.collection("users");
// const data = await collection.findOne();
// console.log(data);
// client.close();
