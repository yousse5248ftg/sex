//html Elements
const RiotID = document.getElementById("User-Riot-Id");
const Userproduct = document.getElementById("User-choose-product");
const HowToBay = document.getElementById("How-To-Bay");

const btn = document.getElementById("btn");
//RiotID
function emailSend(){

	var RiotID = document.getElementById('name').value;
	var Userproduct = document.getElementById('phone').value;
	var HowToBay = document.getElementById('email').value;

	var messageBody = "RiotID " + RiotID +
	"<br/> Userproduct " + Userproduct +
	"<br/> HowToBay " + HowToBay;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "codaplus@gmail.com",
    Password : "4AA5C2C4B8B6C2B0A4057B4F93B73EBE0A9C",
    To : 'you2009ssef2009@gmail.com',
    From : "codaplus@gmail.com",
    Subject : "User Data",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}