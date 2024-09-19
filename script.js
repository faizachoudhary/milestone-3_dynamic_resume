var _a;
// listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // type assertion
    var profilepictureInput = document.getElementById('profile picture');
    var nameElement = document.getElementById('name');
    var fathernameElement = document.getElementById('father name');
    var phonenumberElement = document.getElementById('phone number');
    var emailElement = document.getElementById('email');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var hobbiesElement = document.getElementById('hobbies');
    if (profilepictureInput && nameElement && fathernameElement && phonenumberElement && emailElement && educationElement && experienceElement && skillsElement && hobbiesElement) {
        var name_1 = nameElement.value;
        var fathername = fathernameElement.value;
        var phonenumber = phonenumberElement.value;
        var email = emailElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var hobbies = hobbiesElement.value;
        // picture elements
        var profilepictureFile = (_a = profilepictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureURL = profilepictureFile ? URL.createObjectURL(profilepictureFile) : "";
        // create resume output
        var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profilepictureURL ? "<img src=\"".concat(profilepictureURL, "\" alt=\"Profile Picture\"  class=\"profilepicture\">") : "", "\n    <p><strong>Name:</strong> ").concat(name_1, " </p>\n    <p><strong>Father Name:</strong> ").concat(fathername, " </p>\n    <p><strong>Phone Number:</strong> ").concat(phonenumber, " </p>\n    <p><strong>Email:</strong> ").concat(email, " </p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n    \n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n\n    <h3>Hobbies</h3>\n    <p>").concat(hobbies, "</p>\n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output elements are missing');
        }
    }
    else {
        console.error('one or more output element are missing');
    }
});
