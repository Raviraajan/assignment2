	function doAppend()
	{	
		var name = document.myForm.student.value;
		var branch = document.myForm.major.value; 
		var startYear = parseInt(document.myForm.year.value);	
				
		if( startYear < 2000 || startYear > 9999)
						{
							alert( "Inncorrect Year!" + startYear );
							document.myForm.year.value = "";
							document.myForm.year.focus();
							return false;
						}
		
		var myDate = new Date();	
		var results = "";
		
		results +=   myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds() + " - " + name + " , " + branch + "  " + ", " + startYear; 
		
		var t = document.createTextNode(results);
		document.getElementById("result").appendChild(t);
		
		linebreak = document.createElement("br");
		document.getElementById("result").appendChild(linebreak);
	
		document.myForm.student.value = "";
		document.myForm.major.value = "";
		document.myForm.year.value = "";
		
	
	}
	
	