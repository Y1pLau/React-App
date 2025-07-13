const { client, connectDB } = require('./db'); // adjust path as needed

async function startServer() {
  await connectDB();

  const db = client.db('admin');
  const collection = db.collection('admin');

  // Example: Insert a document
  await collection.insertOne({ name: 'John', age: 30 });

  // Example: Find documents
  const users = await collection.find({}).toArray();
  console.log(users);

  // Don't forget to close the connection when done
  await client.close();
}

startServer();