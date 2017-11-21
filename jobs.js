var text;

var jobTypeSelect = document.getElementById("jobTypeSelect");
var educationTypeSelect = document.getElementById("educationTypeSelect");
var zipNumSelect = document.getElementById("zipInput");

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

function findJob() {
  showAll();
  for(var i = 0; i < jobs.length; i++) {
    if(!((jobs[i].classList.contains(jobTypeSelect.value) || jobTypeSelect.value === "job_type")
     && (jobs[i].classList.contains(educationTypeSelect.value) || educationTypeSelect.value === "education") 
     && (jobs[i].classList.contains(zipNumSelect.value) || zipNumSelect.value === "")))
      jobs[i].style.display="none";
  }
}

zipInput.onkeypress = function(e) {
  var key = e.which;
  if(e == 13) {
    findJob();
  }
}

zip_landing.onkeypress = function(e) {
  var key = e.which;
  if(e == 13) {
    zipNumSelect.value = getElementById("zip_landing");
  }
}

function showAll() {
  for (var i = 0; i < jobs.length; i++) {
    jobs[i].style.display="block";
  }
}

function revertJobType() {
  document.getElementById("jobTypeSelect").value = "job_type";
  findJob();
}

function revertEducationType(){
  document.getElementById("educationTypeSelect").value = "education";
  findJob();
}

function revertJobAll() {
  for (var i = 0; i < jobs.length; i++) {
    jobs[i].style.display='block';
  }
  document.getElementById("jobTypeSelect").value = "job_type";
  document.getElementById("educationTypeSelect").value = "education";
}
