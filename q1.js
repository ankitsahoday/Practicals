
function validate() {

	var name=document.forms["reg"]["name"].value;
	var roll=document.forms["reg"]["rollno"].value;
	var npat=/^[a-z][A-Z]$/;
	var rpat=/^\d{7}$/;


	if(npat.test(name)==false)
	{
		alert("Name Should Contain Only Characters");
		name.focus();
		return;
	}

	if(rpat.test(roll) == false){
		alert("7-Digit Number Required");
		return;
	}


else
{
	document.getElementById("final").innerHTML="Sucessful";
}


}