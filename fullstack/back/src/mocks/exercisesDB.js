let exercisesDB = [
  {
    id: 1,
    name: "Bench Press",
    muscle: "Chest",
    level: "Intermediate",
    description: "Lie back on a flat bench and press the barbell up from chest level.",
    videoUrl: "https://www.youtube.com/shorts/0SJy6gPw_Ik",
    alternatives: [
      { name: "Push Up", imageUrl: "https://training.fit/wp-content/uploads/2020/02/liegestuetze.png"},
      { name: "Dumbbell Press", imageUrl: "https://weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Bench-Press-resized.png" },
      { name: "Incline Bench Press", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BzR44t9KAVu7r9S_Xk5HmudaZwJZMzRj1A&s" }
    ]
  },
  {
    id: 2,
    name: "Barbell Squat",
    muscle: "Quadriceps",
    level: "Advanced",
    description: "Place the barbell on your upper back and squat down keeping your back straight.",
    videoUrl: "https://www.youtube.com/shorts/dW3zj79xfrc",
    alternatives: [
      { name: "Dumbbell Squat", imageUrl: "https://training.fit/wp-content/uploads/2020/03/kniebeugen-kurzhanteln.png" },
      { name: "Leg Press", imageUrl: "https://www.powertec.eu/2506-large_default/leg-press.jpg" }
    ]
  },
  {
    id: 3,
    name: "Deadlift",
    muscle: "Lower Back",
    level: "Advanced",
    description: "Lift the barbell from the floor to hip level while keeping your back straight.",
    videoUrl: "https://www.youtube.com/shorts/qyzWSrLC2jU",
    alternatives: [
      { name: "Romanian Deadlift", imageUrl: "https://training.fit/wp-content/uploads/2020/03/kreuzheben-gestreckte-beine-kurzhantel.png" }
    ]
  },
  {
    id: 4,
    name: "Pull-Ups",
    muscle: "Back",
    level: "Intermediate",
    description: "Hang from a bar and pull yourself up until your chin is above the bar.",
    videoUrl: "https://www.youtube.com/shorts/bxguzp1DCFw",
    alternatives: [
      { name: "Chin-Ups", imageUrl: "https://www.shutterstock.com/image-illustration/chin-up-back-exercise-male-600nw-2329918143.jpg" },
      { name: "Lat Pulldown", imageUrl: "https://liftmanual.com/wp-content/uploads/2023/04/cable-wide-grip-lat-pulldown.jpg" }
    ]
  },
  {
    id: 5,
    name: "Dips",
    muscle: "Triceps",
    level: "Intermediate",
    description: "Support yourself on parallel bars and lower your body by bending the elbows, then push up.",
    videoUrl: "https://www.youtube.com/shorts/Zh5xZnL1WzI",
    alternatives: [
      { name: "Bench Dips", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThClI9pby-BRNcg1MTbX6lCADvokWGuaKzLw&s" }
    ]
  },
  {
    id: 6,
    name: "Military Press",
    muscle: "Shoulders",
    level: "Intermediate",
    description: "Press the barbell overhead while standing straight.",
    videoUrl: "https://www.youtube.com/shorts/4LBVP2Oe7fg",
    alternatives: [
      { name: "Dumbbell Shoulder Press", imageUrl: "https://gymgeek.com/wp-content/uploads/2024/02/seated-dumbbell-shoulder-press.png" }
    ]
  },
  {
    id: 7,
    name: "Barbell Row",
    muscle: "Back",
    level: "Intermediate",
    description: "Bend over with a barbell and pull it towards your abdomen.",
    videoUrl: "https://www.youtube.com/shorts/phVtqawIgbk",
    alternatives: [
      { name: "Dumbbell Row", imageUrl: "https://training.fit/wp-content/uploads/2020/02/rudern-kurzhantel.png" }
    ]
  },
  {
    id: 8,
    name: "Barbell bicep curl",
    muscle: "Biceps",
    level: "Easy",
    description: "Curl the barbell up to your shoulders while keeping elbows close to your body.",
    videoUrl: "https://www.youtube.com/shorts/54x2WF1_Suc",
    alternatives: [
      { name: "Dumbbell Curl", imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2023/04/dumbbell-curl-benefits.png" }
    ]
  },
  {
    id: 9,
    name: "Triceps Cable Extension",
    muscle: "Triceps",
    level: "Easy",
    description: "Extend your arms downward using a cable machine with rope or bar attachment.",
    videoUrl: "https://www.youtube.com/shorts/1FjkhpZsaxc",
    alternatives: [
      { name: "Overhead Dumbbell Extension", imageUrl: "https://training.fit/wp-content/uploads/2020/03/trizepsdruecken-beidarmig-kurzhantel.png" }
    ]
  },
  {
    id: 10,
    name: "Leg Press",
    muscle: "Quadriceps",
    level: "Easy",
    description: "Push the platform away from you using your legs while seated.",
    videoUrl: "https://www.youtube.com/shorts/MXaqAyXGwAs",
    alternatives: [
      { name: "Hack Squat", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6eDPMGI56h0vzCa4TkZ0ATKOsdp0Hw2gizg&s" }
    ]
  },
  {
    id: 11,
    name: "Lateral Raises",
    muscle: "Shoulders",
    level: "Easy",
    description: "Lift dumbbells sideways to shoulder height to work your deltoids.",
    videoUrl: "https://www.youtube.com/shorts/Kl3LEzQ5Zqs",
    alternatives: [
      { name: "Cable Lateral Raise", imageUrl: "https://images.squarespace-cdn.com/content/v1/5ffcea9416aee143500ea103/1637827181733-NPUTRFI232QP33JVOD85/Standing%20One%20Arm%20Cable%20Lateral%20Raises.jpeg" }
    ]
  },
  {
    id: 12,
    name: "Crunch",
    muscle: "Abs",
    level: "Easy",
    description: "Lie on your back and lift your shoulders towards your knees.",
    videoUrl: "https://www.youtube.com/shorts/FJKp9gxE5jQ",
    alternatives: [
      { name: "Sit-Up", imageUrl: "https://hips.hearstapps.com/hmg-prod/images/v-sit-crunch-1585734647.jpg?resize=980:*" }
    ]
  },
  {
    id: 13,
    name: "Hip Thrust",
    muscle: "Glutes",
    level: "Intermediate",
    description: "Push your hips upward against a bench or barbell placed on your hips.",
    videoUrl: "https://www.youtube.com/shorts/WUDVZPTHUhU",
    alternatives: [
      { name: "Glute Bridge", imageUrl: "https://www.mensjournal.com/.image/t_share/MTk2MTM2Mjk5ODUwNzA0Mzg5/6-barbell-glute-bridge.jpg" }
    ]
  },
  {
    id: 14,
    name: "Lat Pulldown",
    muscle: "Back",
    level: "Easy",
    description: "Pull the bar down to your chest while seated, keeping back straight.",
    videoUrl: "https://www.youtube.com/shorts/bNmvKpJSWKM",
    alternatives: [
      { name: "Assisted Pull-Up", imageUrl: "https://training.fit/wp-content/uploads/2020/02/klimmzuege-maschine-unterstuetzt.png" }
    ]
  },
  {
    id: 15,
    name: "Lunges",
    muscle: "Glutes",
    level: "Intermediate",
    description: "Step forward and lower your back knee toward the ground, then push back.",
    videoUrl: "https://www.youtube.com/shorts/mJilHWIBWO8",
    alternatives: [
      { name: "Walking Lunge", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs-0OI6LE79BmulFb5wRHm9ba_DJVCew5K9A&s" }
    ]
  },
  {
    id: 16,
    name: "Burpees",
    muscle: "Chest",
    level: "Advanced",
    description: "From standing, drop into a push-up position, do a push-up, jump back up.",
    videoUrl: "https://www.youtube.com/shorts/gYiE_2BtSTg",
    alternatives: [
      { name: "Jumping Burpees", imageUrl: "https://hips.hearstapps.com/hmg-prod/images/travellingburpee-1609935517.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*" }
    ]
  },
  {
    id: 17,
    name: "Box Jumps",
    muscle: "Quadriceps",
    level: "Intermediate",
    description: "Jump onto a sturdy box or platform from a standing position.",
    videoUrl: "https://www.youtube.com/watch?v=NBY9-kTuHEk",
    alternatives: [
      { name: "Step-Up Jumps", imageUrl: "https://www.fitnessphysio.com/client_images/1935452.jpg" }
    ]
  },
  {
    id: 18,
    name: "Sprints",
    muscle: "Legs",
    level: "Intermediate",
    description: "Run as fast as possible for a short distance.",
    videoUrl: "https://www.youtube.com/shorts/4Drt3-MMpvI",
    alternatives: [
      { name: "High Knee Sprints", imageUrl: "https://liftmanual.com/wp-content/uploads/2023/04/high-knee-sprints.jpg" }
    ]
  },
  {
    id: 19,
    name: "Jumping Jacks",
    muscle: "Shoulders",
    level: "Easy",
    description: "Jump with legs apart and arms overhead, then return to standing.",
    videoUrl: "https://www.youtube.com/shorts/FJDZrSZQLiY",
    alternatives: [
      { name: "Star Jumps", imageUrl: "https://liftmanual.com/wp-content/uploads/2023/04/star-jump.jpg" }
    ]
  },
  {
    id: 20,
    name: "Mountain Climbers",
    muscle: "Abs",
    level: "Intermediate",
    description: "From push-up position, alternate bringing knees toward chest quickly.",
    videoUrl: "https://www.youtube.com/shorts/dOcAOjpFweM",
    alternatives: [
      { name: "Plank Knee Drives", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPAkEBtJUwYa4VHzDNA-gtLih0dVMym3P-Dw&s" }
    ]
  },
  {
    id: 21,
    name: "High Knees",
    muscle: "Legs",
    level: "Easy",
    description: "Run in place lifting your knees as high as possible.",
    videoUrl: "https://www.youtube.com/shorts/0X0Q8wKLEfo",
    alternatives: [
      { name: "Butt Kicks", imageUrl: "https://liftmanual.com/wp-content/uploads/2023/04/butt-kicks.jpg" }
    ]
  },
  {
    id: 22,
    name: "Kettlebell Swings",
    muscle: "Glutes",
    level: "Intermediate",
    description: "Swing a kettlebell between your legs and up to shoulder height.",
    videoUrl: "https://www.youtube.com/watch?v=1cVT3ee9mgU",
    alternatives: [
      { name: "Dumbbell Swings", imageUrl: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-swing.jpg" }
    ]
  },
  {
    id: 23,
    name: "Battle Ropes",
    muscle: "Shoulders",
    level: "Intermediate",
    description: "Move the ropes rapidly in waves for a full-body workout.",
    videoUrl: "https://www.youtube.com/shorts/JwepS5QiAzs",
    alternatives: [
      { name: "Single Rope Waves", imageUrl: "https://i.ytimg.com/vi/uAX9YMgupM4/maxresdefault.jpg" }
    ]
  },
  {
    id: 24,
    name: "Jump Rope",
    muscle: "Legs",
    level: "Easy",
    description: "Jump continuously over a rope swinging beneath your feet.",
    videoUrl: "https://www.youtube.com/shorts/VLC6YO9w5iU",
    alternatives: [
      { name: "Speed Rope", imageUrl: "https://your-gear.de/media/39/5b/11/1711043459/8ec39be1fd4822cf4eabb151ff68947a.png" }
    ]
  },
  {
    id: 25,
    name: "Box Jump Burpees",
    muscle: "Chest",
    level: "Advanced",
    description: "Combine a burpee with a jump onto a box or platform.",
    videoUrl: "https://www.youtube.com/watch?v=CJTG76102Ks",
    alternatives: [
      { name: "Jumping Burpee Box", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rPZTibwL23zj2vAUlBWOWGcaYBKuQgXFEQ&s" }
    ]
  }
];

module.exports = exercisesDB;

