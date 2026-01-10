const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const seedAdmin = async () => {
    try {
        // Delete any existing owner to ensure clean state with new password
        await User.deleteOne({ email: 'owner@mail.com' });

        await User.create({
            name: 'Owner',
            email: 'owner@mail.com',
            password: 'owner123',
            role: 'admin'
        });

        console.log('Owner Admin Created (owner@mail.com / owner123)');
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedAdmin();
