
const {MongoClient} = require('mongodb');

async function main(){
    // const URI = process.env.MONGODB_URI
    const URI = "mongodb+srv://vithushan:vithu123@cluster0.lq7ul.mongodb.net/?retryWrites=true&w=majority"

    const client = new MongoClient(URI);


    try{
        await client.connect();
        await listDatabases(client);    

    } catch(e) {
        console.error(e);

    // Close the connection
    } finally {
        await client.close();
        
    }

}

main().catch(console.error);


// Enter the data
async function createList(){
    
}

// fetching the databases from the cluster
async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases");
    databasesList.databases.forEach(db => {
        console.log(`-${db.name}`);
    });
}