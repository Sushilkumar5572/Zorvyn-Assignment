import app from './src/app.js';
import connectDB from './src/config/db.js';
import dotenv from 'dotenv';
import seedAdmin from './src/config/seedAdmin.js';

dotenv.config();


// Connect to MongoDB
connectDB();

// Seed the default admin user
seedAdmin();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
