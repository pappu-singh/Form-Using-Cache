const userName =document.querySelector(".name");
const userEmail =document.querySelector(".email");
const userAddress =document.querySelector(".address");
const userOccupation =document.querySelector(".occupation");
const submitButton =document.querySelector(".submit");
const clearButton=document.querySelector(".clear");
const resultData =document.querySelector(".result");

const fetchData = JSON.parse(localStorage.getItem("userDetails"));

fetchData === null ? (resultData.style.display = "none") 
: fetchData.forEach(element => {
    const division =document.createElement("div");
    division.classList.add("card");
    resultData.appendChild(division);

    const headerName = document.createElement("h3");
    headerName.innerHTML = `Name :- ${element.name}`;

    const headerEmail = document.createElement("h3");
    headerEmail.innerHTML = `Email :- ${element.email}`;

    const headerAddress = document.createElement("h3");
    headerAddress.innerHTML = `Address:- ${element.address}`;

    const headerOccupation = document.createElement("h3");
    headerOccupation.innerHTML = `Occupation :- ${element.occupation}`;

    division.appendChild(headerName);
    division.appendChild(headerEmail);
    division.appendChild(headerAddress);
    division.appendChild(headerOccupation);
    
});

submitButton.addEventListener("click", submitFormData);

clearButton.addEventListener("click", clearAllLocalData);

function submitFormData(){
    const name = userName.value;
    const email = userEmail.value;
    const address = userAddress.value;
    const occupation =userOccupation.value;

    if(name === "" || email === "" || address === "" || occupation === ""){
        alert("Please fill all the fields");
        clearFormData();
        return;
    }

    const headerName = document.createElement("h3");
    headerName.innerHTML = 'Name :- ${name}';

    const headerEmail = document.createElement("h3");
    headerEmail.innerHTML = 'Email :- ${email}';

    const headerAddress = document.createElement("h3");
    headerAddress.innerHTML = 'Address:- ${address}';

    const headerOccupation = document.createElement("h3");
    headerOccupation.innerHTML = 'Occupation :- ${occupation}';

    resultData.appendChild(headerName);
    resultData.appendChild(headerEmail);
    resultData.appendChild(headerAddress);
    resultData.appendChild(headerOccupation);

    const formData ={
        name: name,
        email:email,
        address:address,
        occupation:occupation
    };

    const storeData = JSON.parse(localStorage.getItem("userDetails")) || [];

    storeData.push(formData);

    localStorage.setItem("userDetails", JSON.stringify(storeData));

    clearFormData();

    resultData.style.display = "flex";

}

function clearFormData(){
    userName.value ="";
    userEmail.value ="";
    userAddress.value ="";
    userOccupation.value ="";
}

function clearAllLocalData(){
    localStorage.clear();
    resultData.style.display ="none";
}