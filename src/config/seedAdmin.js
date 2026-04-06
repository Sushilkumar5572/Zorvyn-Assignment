// Seeding the default admin user
import User from '../models/User.model.js';
import { createUser } from '../services/user.service.js';

const seedAdmin = async () => {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    try {
        // Check if admin user already exists
        const existingAdmin = await User.findOne({ role: 'ADMIN' });
        if (existingAdmin) {
            console.log('Admin user already exists.');
            return;
        }

        // Check if the email for admin user is already taken
        const emailTaken = await User.findOne({ email: adminEmail });
        if (emailTaken) {
            console.log(`Email ${adminEmail} is already taken. Please choose a different email for the admin user.`);
            return;
        }

        // Create the admin user
        const adminUser = await createUser({
            email: adminEmail,
            password: adminPassword,
            role: 'ADMIN',
            name: 'Admin User'
        });

        console.log('Admin user created successfully.');
    } catch (error) {
        console.error('Error occurred while seeding admin user:', error);
    }
};

export default seedAdmin;