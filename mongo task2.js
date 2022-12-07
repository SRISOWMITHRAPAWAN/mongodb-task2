
/////creating user details/////////
use day38
db.createCollection("users")
db.users.insertMany([
     {
        "userId": "1",
        "Student_name": "aakash",
        "Gender": "Male",
        "Contact_number": 9987875645,
        "Email": "aakash@gmail.com",
        "Course_Name": "Full Stack Developer",
        "Course_Duration": "3 months - Weekdays",
        "NumberOfProblemssolved":250
    },
     {
        "userId": "2",
        "Student_name": "Arun",
        "Gender": "Male",
        "Contact_number": 97584654646,
        "Email": "arun@gmail.com",
        "Course_Name": "Full Stack Developer",
        "Course_Duration": "3 months - Weekdays",
        "NumberOfProblemssolved":300
    },
     {
        "userId": "3",
        "Student_name": "geetha",
        "Gender": "Female",
        "Contact_number": 9874561234,
        "Email": "geetha@gmail.com",
        "Course_Name": "Full Stack Developer",
        "Course_Duration": "3 months - Weekdays",
        "NumberOfProblemssolved":400
    },
     {
        "userId": "4",
        "Student_name": "Nisha",
        "Gender": "Female",
        "Contact_number": 6465465632,
        "Email": "nisha@gmail.com",
        "Course_Name": "Full Stack Developer",
        "Course_Duration": "3 months - Weekdays",
        "NumberOfProblemssolved":510
    },
     {
        "userId": "5",
        "Student_name": "shifana",
        "Gender": "Female",
        "Contact_number": 6355754658,
        "Email": "shifana@gmail.com",
        "Course_Name": "Full Stack Developer",
        "Course_Duration": "3 months - Weekdays",
        "NumberOfProblemssolved":300
    },
    {
        "userId": "6",
        "Student_name": "Aadhi",
        "Gender": "Male",
        "Contact_number": 9466563243,
        "Email": "aadhi@gmail.com",
        "Course_Name": "Full Stack Developer",
        "Course_Duration": "3 months - Weekdays",
        "NumberOfProblemssolved":380
    },
      {
        "userId": "7",
        "Student_name": "bharathi",
        "Gender": "Female",
        "Contact_number": 6367246546,
        "Email": "bharathi@gmail.com",
        "Course_Name": "Full Stack Developer",
        "Course_Duration": "3 months - Weekdays",
        "NumberOfProblemssolved":420
    },
       {
        "userId": "8",
        "Student_name": "Karan",
        "Gender": "Male",
        "Contact_number": 6855445545,
        "Email": "karan@gmail.com",
        "Course_Name": "Full Stack Developer",
        "Course_Duration": "3 months - Weekdays",
        "NumberOfProblemssolved":500
    },
       {
        "userId": "9",
        "Student_name": "Harish",
        "Gender": "Male",
        "Contact_number": 9784576546,
        "Email": "harish@gmail.com",
        "Course_Name": "Full Stack Developer",
        "Course_Duration": "3 months - Weekdays",
        "NumberOfProblemssolved":520
    },
       {
        "userId": "10",
        "Student_name": "Meera",
        "Gender": "Female",
        "Contact_number": 9853547645,
        "Email": "meera@gmail.com",
        "Course_Name": "Full Stack Developer",
        "Course_Duration": "3 months - Weekdays",
        "NumberOfProblemssolved":450
    }
])
//////creating attendence//////////////////////
db.attendance.insertMany([
    {
       "Date":new Date("2020-10-15"),
       "TotalNumberOfStudents":10,
       "NoOfStudentsPresent":10,
       "NoOfStudentsAbsent":0
    },
     {
       "Date":new Date("2020-10-16"),
       "TotalNumberOfStudents":10,
       "NoOfStudentsPresent":9,
       "NoOfStudentsAbsent":1
    },
     {
       "Date":new Date("2020-10-19"),
       "TotalNumberOfStudents":10,
       "NoOfStudentsPresent":8,
       "NoOfStudentsAbsent":2
    },
     {
       "Date":new Date("2020-10-20"),
       "TotalNumberOfStudents":10,
       "NoOfStudentsPresent":9,
       "NoOfStudentsAbsent":1
    },
     {
       "Date":new Date("2020-10-21"),
       "TotalNumberOfStudents":10,
       "NoOfStudentsPresent":10,
       "NoOfStudentsAbsent":0
    },
     {
       "Date":new Date("2020-10-22"),
       "TotalNumberOfStudents":10,
       "NoOfStudentsPresent":7,
       "NoOfStudentsAbsent":3
    },
     {
       "Date":new Date("2020-10-23"),
       "TotalNumberOfStudents":10,
       "NoOfStudentsPresent":8,
       "NoOfStudentsAbsent":2
    },
     {
       "Date":new Date("2020-10-26"),
       "TotalNumberOfStudents":10,
       "NoOfStudentsPresent":10,
       "NoOfStudentsAbsent":0
    },
    {
       "Date":new Date("2020-10-27"),
       "TotalNumberOfStudents":10,
       "NoOfStudentsPresent":7,
       "NoOfStudentsAbsent":3
    },
     {
       "Date":new Date("2020-10-28"),
       "TotalNumberOfStudents":10,
       "NoOfStudentsPresent":8,
       "NoOfStudentsAbsent":2
    },
     {
       "Date":new Date("2020-10-29"), 
       "TotalNumberOfStudents":10,
       "NoOfStudentsPresent":5,
       "NoOfStudentsAbsent":5
    },
    {
       "Date":new Date("2020-10-30"),
       "TotalNumberOfStudents":10,
       "NoOfStudentsPresent":7,
       "NoOfStudentsAbsent":3
    }
])
////////////creating topics/////////////////
use day38
db.createCollection("topics")
db.topics.insertMany([
    {
        "S_No":1,
        "Topics": "HTML",
        "Tasks": "task from HTML",
        "Month": "August"
    },
      {
        "S_No":2,
        "Topics": "CSS",
        "Tasks": "task from CSS",
        "Month": "August"
    },
      {
        "S_No":3,
        "Topics": "Javascript",
        "Tasks": "task from Javascript",
        "Month": "August"
    },
     {
        "S_No":4,
        "Topics": "DOM",
        "Tasks": "task from DOM",
        "Month": "September"
    },
    {
        "S_No":5,
        "Topics": "React JS",
        "Tasks": "task from React JS", 
        "Month": "September"
    },
    {
        "S_No":6,
        "Topics": "MySQL",
        "Tasks": "task from MySQL",
        "Month": "September"
    },
     {
        "S_No":7,
        "Topics": "MongoDB",
        "Tasks": "task from MongoDB",
        "Month": "October"
    },
    {
        "S_No":8,
        "Topics": "NodeJS",
        "Tasks": "task from NodeJS",
        "Month": "October"
    },
    {
        "S_No":9,
        "Topics": "AWS",
        "Tasks": "task from AWS",
        "Month": "October"
    },
    {
        "S_No":10,
        "Topics": "System Design",
        "Tasks": "task from System Design",
        "Month": "October"
    }
])
/////////creating task///////////////////////
db.createCollection("tasks")
db.tasks.insertMany([
    {
        "S_No":1,
        "Month": "August"
        "TotalNumberOfTasks":10,
        "NoOfPendingTasks":3
    },
     {
        "S_No":2,
        "Month": "September"
        "TotalNumberOfTasks":12,
        "NoOfPendingTasks":5
    },
     {
        "S_No":3,
        "Month": "October",
        "TotalNumberOfTasks":10,
        "NoOfPendingTasks":1
    }
])
/////creating company drives////////////////////////
db.createCollection("company_drives")
db.company_drives.insertMany([
    {
        "userId":1,
        "Date": new Date("2020-10-13"),
        "CompanyName":"Juspay",
        "PlacedStudentUserId":10
    },
      {
        "userId":2,
        "Date":new Date("2020-10-15"),
        "CompanyName":"OneDPO",
        "PlacedStudentUserId":8
    },
      {
        "userId":3,
        "Date":new Date("2020-10-19"),
        "CompanyName":"Stackup",
        "PlacedStudentUserId":2
    },
      {
        "userId":4,
        "Date":new Date("2020-10-22"),
        "CompanyName":"Flipkart",
        "PlacedStudentUserId":3
    },
     {
        "userId":5,
        "Date":new Date("2020-10-23"),
        "CompanyName":"TCL",
        "PlacedStudentUserId":6
    },
      {
        "userId":6,
        "Date":new Date("2020-10-26"),
        "CompanyName":"TATA COMMUNICATIONS",
        "PlacedStudentUserId":1
    },
          {
        "userId":7,
        "Date":new Date("2020-10-28"),
        "CompanyName":"innive",
        "PlacedStudentUserId":5
    },
          {
        "userId":8,
        "Date":new Date("2020-10-30"),
        "CompanyName":"Clayfin",
        "PlacedStudentUserId":7
    },
          {
        "userId":9,
        "Date":new Date("2020-11-03"), 
        "CompanyName":"Orcaso",
        "PlacedStudentUserId":4
    },
          {
        "userId":10,
        "Date":new Date("2020-11-06"),
        "CompanyName":"ZOHO",
        "PlacedStudentUserId":9
    },
    
])
//////creating mentor/////////////////
db.createCollection("mentors")
db.mentors.insertMany([
    {
        "MentorID":1,
        "MentorName": "Mr.Sai",
        "MentorTeachingLanguage":"Tamil",
        "NoOfStudentsForMentor":10
    },
    {
        "MentorID":2,
        "MentorName": "Miss.sivaranjini",
        "MentorTeachingLanguage":"Tamil",
        "NoOfStudentsForMentor":28
    },  
    {
        "MentorID":3,
        "MentorName": "Mr.rupan",
        "MentorTeachingLanguage":"Tamil",
        "NoOfStudentsForMentor":30
    },
       {
        "MentorID":4,
        "MentorName": "Mr.sunny",
        "MentorTeachingLanguage":"Tamil",
        "NoOfStudentsForMentor":15
    },
       {
        "MentorID":5,
        "MentorName": "Miss.dhivya",
        "MentorTeachingLanguage":"Tamil",
        "NoOfStudentsForMentor":20
    }
])

//// 1.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company_drives.find({"Date":{$gte:new ISODate("2020-10-15T05:30:00.000+05:30"),$lte:new ISODate("2020-10-30T05:30:00.000+05:30")}})

////2.Find all the company drives and students who are appeared for the placement
db.users.aggregate([
    {
      $lookup: {
        from: "company_drives",
        localField: "userId",
        foreignField:"userId",
        as: "company_drives"
      }
    }
   ])

   ////////3. Find all the mentors with who has the mentor's count more than 15
   db.mentors.find({NoOfStudentsForMentor:{$gt:15}})

   /////4.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
   db.tasks.aggregate([
    {
      $lookup: {
        from: "attendance",
        localField: "Date",
        foreignField:"S_No",
        as: "Attendence_drives"
      }
    },
    {
        $match: { "Month":"October" }
    }
   ])
   //////5.Find all the topics and tasks which are thought in the month of October
   db.tasks.aggregate([
    {
      $lookup: {
        from: "attendance",
        localField: "Date",
        foreignField:"S_No",
        as: "Attendence_drives"
      }
    },
    {
        $match: { "Month":"October" }
    }
   ])
   //////////6.Find the number of problems solved by the user in codekata
   db.users.aggregate([
    {
      $lookup: {
        from: "codekata",
        localField: "userId",
        foreignField:"userId",
        as: "codekatatask"
      }
    }
   ])


