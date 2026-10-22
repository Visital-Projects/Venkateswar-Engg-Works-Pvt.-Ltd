const mongoose = require('mongoose');
require('dotenv').config();

const EngineeringInAction = require('./src/models/EngineeringInAction');

const images = [
  { imageUrl: "/images/a_wide_high_resolution_industrial_interior_scene.png", caption: "FURNACE OPERATIONS", title: "Furnace Operations", order: 1 },
  { imageUrl: "/images/vew-furnace-operations.png", caption: "METALLURGICAL ENGINEERING", title: "Metallurgical Engineering", order: 2 },
  { imageUrl: "/images/vew-metal-breaking.png", caption: "INDUSTRIAL OPERATIONS", title: "Industrial Operations", order: 3 },
  { imageUrl: "/images/vew-mrp-material-recovery.png", caption: "MATERIAL RECOVERY", title: "Material Recovery", order: 4 },
  { imageUrl: "/images/vew-about-engineering.png", caption: "FURNACE OPERATIONS", title: "Furnace Operations", order: 5 }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
    
    // Clear existing
    await EngineeringInAction.deleteMany({});
    
    // Insert new
    await EngineeringInAction.insertMany(images);
    
    console.log('Successfully inserted Engineering In Action images.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
