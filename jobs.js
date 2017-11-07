
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

var jobTypeSelect = document.getElementById("jobTypeSelect");

jobTypeSelect.onchange = function() {
  if (jobTypeSelect.value === "job_type") {
  revertJobType();
  }
  else if (jobTypeSelect.value === "construction") {
    removeJobFilter();
    document.getElementById("Construction").style.display="block";
  }
  else if (jobTypeSelect.value === "manufacturing") {
    removeJobFilter();
    document.getElementById("Manufacturing").style.display="block";
  }
  else if (jobTypeSelect.value === "transportation") {
    removeJobFilter();
    document.getElementById("Transportation").style.display="block";
  }
  else if (jobTypeSelect.value === "customer_services") {
    removeJobFilter();
    document.getElementById("CustomerServices").style.display="block";
  }
  else if (jobTypeSelect.value === "food_services") {
    removeJobFilter();
    document.getElementById("FoodServices").style.display="block";
  }
  else if (jobTypeSelect.value === "maintenance") {
    removeJobFilter();
    document.getElementById("Maintenance").style.display="block";
  }
  else if (jobTypeSelect.value === "office_work") {
    removeJobFilter();
    document.getElementById("OfficeWork").style.display="block";
  }
  else if (jobTypeSelect.value === "online") {
    removeJobFilter();
    document.getElementById("OnlineEmployment").style.display="block";
  }
}



function removeZipFilter(){
  document.getElementById("zip-input").value = "";
}

function removeJobFilter(){
  document.getElementById("Construction").style.display="none";
  document.getElementById("CustomerServices").style.display="none";
  document.getElementById("FoodServices").style.display="none";
  document.getElementById("Maintenance").style.display="none";
  document.getElementById("Manufacturing").style.display="none";
  document.getElementById("OfficeWork").style.display="none";
  document.getElementById("OnlineEmployment").style.display="none";
  document.getElementById("Transportation").style.display="none";
}


function revertJobType() {
  document.getElementById("Construction").style.display="block";
  document.getElementById("CustomerServices").style.display="block";
  document.getElementById("FoodServices").style.display="block";
  document.getElementById("Maintenance").style.display="block";
  document.getElementById("Manufacturing").style.display="block";
  document.getElementById("OfficeWork").style.display="block";
  document.getElementById("OnlineEmployment").style.display="block";
  document.getElementById("Transportation").style.display="block";
  document.getElementById("jobTypeSelect").value = "job_type";
}




function removeEducationFilter() {
  document.getElementById("education-select").value = "education";
}
