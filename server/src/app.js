const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Check if the environment variable is loaded
if (!process.env.MONGODB_URI) {
  console.error('MongoDB URI is not defined in the environment variables.');
  process.exit(1);
}

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  console.log('MongoDB URI:', process.env.MONGODB_URI);
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
// Routes
app.use('/api', apiRoutes);

// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
