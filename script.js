


// Student Form Submission
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Fetch values from form fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cnic = document.getElementById('cnic').value;
    const userType = document.getElementById('userType').value;
  
    
    const studentData = {
      firstName,
      lastName,
      email,
      password,
      cnic,
      userType
    };
    localStorage.setItem(cnic, JSON.stringify(studentData));
    console.log('Student added:', studentData);
  
 
    document.getElementById('studentForm').reset();
    alert('Student added successfully!');

    document.getElementById('addStudentForm').style.display = 'none';
    document.getElementById('uploadMarksForm').style.display = 'block';
  });
  
  // Marks Form Submission
  document.getElementById('marksForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Fetch values from form fields
    const course = document.getElementById('course').value;
    const studentId = document.getElementById('studentId').value;
    const marks = document.getElementById('marks').value;
    const totalMarks = document.getElementById('totalMarks').value;
    const grade = document.getElementById('grade').value;
  
    // Simulate marks data submission
    const marksData = {
      course,
      studentId,
      marks,
      totalMarks,
      grade
    };
  
    console.log('Marks uploaded:', marksData);
  
    // Optionally clear the form after submission
    document.getElementById('marksForm').reset();
    alert('Marks uploaded successfully!');
  });
  // Profile Update Form Submission
document.getElementById('profileForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const updatedFirstName = document.getElementById('firstName').value;
  const updatedLastName = document.getElementById('lastName').value;
  const updatedCnic = document.getElementById('cnic').value;

  // Simulate updating profile details
  const updatedProfile = {
    firstName: updatedFirstName,
    lastName: updatedLastName,
    cnic: updatedCnic
  };

  console.log('Profile updated:', updatedProfile);

  // Display a success message after updating
  document.getElementById('updateMessage').style.display = 'block';

  // Optionally, clear the form after submission
  setTimeout(() => {
    document.getElementById('updateMessage').style.display = 'none';
  }, 3000);
});

  // Show the "Find Result" form and hide the "Add Student" form
document.getElementById('findResultBtn').addEventListener('click', function() {
  document.getElementById('addStudentForm').style.display = 'none';
  document.getElementById('findResultForm').style.display = 'block';
});

// Find Result Form Submission
document.getElementById('resultForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const cnic = document.getElementById('cnicFind').value;

  // Fetch student data from localStorage based on CNIC
  const storedData = localStorage.getItem(cnic);

  if (storedData) {
    // Parse the stored data
    const student = JSON.parse(storedData);
    const resultData = `
      Student ID: ${student.cnic}
      First Name: ${student.firstName}
      Last Name: ${student.lastName}
      Course: ${student.course} 
      Grade: ${student.grade}`;

      console.log(resultData);
    
    document.getElementById('resultData').innerText = resultData;
    document.getElementById('resultDisplay').style.display = 'block';
  } else {

    alert('No result found for the provided CNIC.');
  }
});

