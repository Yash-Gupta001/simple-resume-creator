const form = document.querySelector('#resumeForm');
const resume = document.querySelector('#resume');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const address = document.querySelector('#address').value;
    const mobile = document.querySelector('#mobile').value;
    const email = document.querySelector('#email').value;
    const Xgrade = document.querySelector('#Xgrade').value;
    const XIIgrade = document.querySelector('#XIIgrade').value;
    const hobbies = document.querySelector('#hobbies').value;
    const skills = document.querySelector('#skills').value;
    const photo = document.querySelector('#photo').files[0];
    const certificate = document.querySelector('#certificate').value;
    const reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.onloadend = function() {
        const img = reader.result;
        resume.innerHTML = `
            <h1>Resume</h1>
            <img src="${img}" alt="candidate photo">
            <h2>Personal Information</h2>
            <p>Name : ${name}</p>
            <p>Address : ${address}</p>
            <p>Mobile No : ${mobile}</p>
            <p>Email : ${email}</p>
            <h2>Education</h2>
            <p>STD 10 marks: ${Xgrade}</p>
            <p>STD 12 marks: ${XIIgrade}</p>
            <h2>Hobbies</h2>
            <p>Hobbies : ${hobbies}</p>
            <h2>Skills</h2>
            <p>${skills}</p>
            <h2>Certifications</h2>
            <p>certificates : ${certificate}</p>
        `;
    }
});