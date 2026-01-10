const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Table = require('./models/Table');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const seedTables = async () => {
    try {
        await Table.deleteMany(); // Clear existing

        const tables = [
            { name: 'Table 1', capacity: 2, location: { x: 0, y: 0 }, status: 'Available' },
            { name: 'Table 2', capacity: 2, location: { x: 1, y: 0 }, status: 'Available' },
            { name: 'Table 3', capacity: 4, location: { x: 0, y: 1 }, status: 'Available' },
            { name: 'Table 4', capacity: 4, location: { x: 1, y: 1 }, status: 'Available' },
            { name: 'Table 5', capacity: 6, location: { x: 2, y: 0 }, status: 'Available' },
            { name: 'Table 6', capacity: 8, location: { x: 2, y: 1 }, status: 'Available' },
        ];

        await Table.insertMany(tables);
        console.log('Tables Seeded!');
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedTables();
