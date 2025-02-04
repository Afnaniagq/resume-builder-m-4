//referance to form and display

const form =document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement =document.getElementById('resume-display') as HTMLDivElement;

//Handle form submission
// eventlistner run the function
form.addEventListener('submit' ,(event:Event) =>{
    event.preventDefault();//prevent page reload

//collect input values
const name=(document.getElementById("name") as HTMLInputElement).value 
const email=(document.getElementById("email") as HTMLInputElement).value    
const phone=(document.getElementById("phone") as HTMLInputElement).value    
const education=(document.getElementById("education") as HTMLInputElement).value    
const experience=(document.getElementById("experience") as HTMLInputElement).value
const skills=(document.getElementById("skills") as HTMLInputElement).value   

//generate editable resume content
const resumeHTML =`
<h2><b>Editable Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:<b><span contenteditable="true">${name}</span></b>
<p><b>Email: <b><span contenteditable="true">${email}</span></b>
<p><b>Phone Number: <b><span contenteditable="true">${phone}</span></b>

<h3 class="style">Education</h3>
<p contenteditable="true">${education}</p>

<h3 class="style">Experience</h3>
<p contenteditable="true">${experience}</p>

<h3 class="style">Skills</h3>
<p contenteditable="true">${skills}</p>
`;

// display genrated resume:
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML =resumeHTML;
}
else{
    console.error("The resume display element is missing");
}

  })
