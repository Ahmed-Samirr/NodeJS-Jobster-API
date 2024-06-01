require('dotenv').config();
const connectDB = require('./db/connect');
const mockData = require("./MOCK_DATA.json");
const Job = require("./models/Job");

const populateStart = async () => {
    try {
        await connectDB(process.env.MONGOO_URL);
        await Job.create(mockData);
        console.log("success");
        process.exit(0);
    } 
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

populateStart();