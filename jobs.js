


var jobTypeSelect = document.getElementById("jobTypeSelect");
var educationTypeSelect = document.getElementById("educationTypeSelect");

var jobs = document.getElementsByClassName('job');
var constructionjobs = document.getElementsByClassName("Construction");
var manufacturingjobs = document.getElementsByClassName("Manufacturing");
var transportationjobs = document.getElementsByClassName("Transportation");
var customerservicejobs = document.getElementsByClassName("CustomerServices");
var foodservicesjobs = document.getElementsByClassName("FoodServices");
var maintenancejobs = document.getElementsByClassName("Maintenance");
var officeworkjobs = document.getElementsByClassName("OfficeWork");
var onlineemploymentjobs = document.getElementsByClassName("OnlineEmployment");


var highschooljobs=document.getElementsByClassName("Highschool");
var diplomajobs=document.getElementsByClassName("Diploma");
var collegejobs=document.getElementsByClassName("College");

jobTypeSelect.onchange = function jobFilter() {
  if (jobTypeSelect.value === "job_type") {
    revertJobType();
    educationFilter();
  }
  else if (jobTypeSelect.value === "construction") {
    removeJobFilter();
    for (var i = 0; i < constructionjobs.length; i++) {
      constructionjobs[i].style.display="block";
    }
    educationFilter();
  }
  else if (jobTypeSelect.value === "manufacturing") {
    removeJobFilter();
    for (var i = 0; i < manufacturingjobs.length; i++) {
      manufacturingjobs[i].style.display="block";
    }
    educationFilter();
  }
  else if (jobTypeSelect.value === "transportation") {
    removeJobFilter();
    for (var i = 0; i < transportationjobs.length; i++) {
      transportationjobs[i].style.display="block";
    }
    educationFilter();
  }
  else if (jobTypeSelect.value === "customer_services") {
    removeJobFilter();
    for (var i = 0; i < customerservicejobs.length; i++) {
      customerservicejobs[i].style.display="block";
    }
    educationFilter();
  }
  else if (jobTypeSelect.value === "food_services") {
    removeJobFilter();
    for (var i = 0; i < foodservicesjobs.length; i++) {
      foodservicesjobs[i].style.display="block";
    }
    educationFilter();
  }
  else if (jobTypeSelect.value === "maintenance") {
    removeJobFilter();
    for (var i = 0; i < maintenancejobs.length; i++) {
      maintenancejobs[i].style.display="block";
    }
    educationFilter();
  }
  else if (jobTypeSelect.value === "office_work") {
    removeJobFilter();
    for (var i = 0; i < officeworkjobs.length; i++) {
      officeworkjobs[i].style.display="block";
    }
    educationFilter();
  }
  else if (jobTypeSelect.value === "online") {
    removeJobFilter();
    for (var i = 0; i < onlineemploymentjobs.length; i++) {
      onlineemploymentjobs[i].style.display="block";
    }
    educationFilter();
  }
}

function revertJobType() {
  for (var i = 0; i < jobs.length; i++) {
    jobs[i].style.display="block";
  }
  document.getElementById("jobTypeSelect").value = "job_type";
}
function removeJobFilter(){
  for (var i = 0; i < jobs.length; i++) {
    jobs[i].style.display="none";
  }
}





educationTypeSelect.onchange = function educationFilter() {
  if (educationTypeSelect.value === "education") {
    revertEducationType();
    jobFilter();
  }
  else if (educationTypeSelect.value === "highschool") {
    removeEducationFilter();
    for (var i = 0; i < highschooljobs.length; i++) {
      highschooljobs[i].style.display="block";
    }
    jobFilter();
  }
  else if (educationTypeSelect.value === "diploma") {
    removeEducationFilter();
    for (var i = 0; i < diplomajobs.length; i++) {
      diplomajobs[i].style.display="block";
    }
    jobFilter();
  }
  else if (educationTypeSelect.value === "college") {
    removeEducationFilter();
    for (var i = 0; i < collegejobs.length; i++) {
      collegejobs[i].style.display="block";
    }
    jobFilter();
  }
}



function removeEducationFilter() {
  for (var i = 0; i < jobs.length; i++) {
    jobs[i].style.display="none";
  }
}

function removeEducationType(){
for (var i = 0; i < jobs.length; i++) {
    jobs[i].style.display="block";
  }
  document.getElementById("education-select").value = "education";
}















