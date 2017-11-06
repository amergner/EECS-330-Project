function sortByZIP() {
  // Declare variables 
  var input, filter, zipfilter, tr, td, i, edFilter;
  input = document.getElementById("ZIP");
  filter = input.value();
  zipfilter = document.getElementById("ZIP");

	
	
	
	
  // Loop through all table rows, and hide those who don't match the search query 
  for (i = 0; i < tr.length; i++) {
	td = tr[i].getElementsByTagName("ZIP")[0];
  } if (td) {
      if (td.innerHTML.indexOf(filter) > -1) {
    	tr[i].style.display = "";
  	} else {
    	tr[i].style.display = "none";
  	}
  }
}

function removeZipFilter(){
  document.getElementById("zip-input").value = "";
}

function removeJobFilter(){
    document.getElementById("job-type-select").value = "job_type";
}

function removeEducationFilter() {
  document.getElementById("education-select").value = "education";
}
