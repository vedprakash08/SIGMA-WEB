use('SigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
    {
      "name": "Python Programming",
      "Price": "1500",
      "Instructor": "Sarah"
    },
    {
      "name": "Web Development",
      "Price": "2500",
      "Instructor": "Alex"
    },
    {
      "name": "Data Science",
      "Price": "3000",
      "Instructor": "Emily"
    },
    {
      "name": "Machine Learning",
      "Price": "2800",
      "Instructor": "Jake"
    },
    {
      "name": "JavaScript Basics",
      "Price": "1200",
      "Instructor": "Ava"
    },
    {
      "name": "Android App Development",
      "Price": "2700",
      "Instructor": "Max"
    },
    {
      "name": "Database Management",
      "Price": "2000",
      "Instructor": "Lily"
    },
    {
      "name": "Cybersecurity Fundamentals",
      "Price": "3200",
      "Instructor": "Ethan"
    },
    {
      "name": "UI/UX Design",
      "Price": "1800",
      "Instructor": "Olivia"
    },
    {
      "name": "Artificial Intelligence",
      "Price": "3500",
      "Instructor": "Noah"
    }
  ]
  );
  console.log("Insertion successful")