<script>
function myFunction() {
  // Declare variables 
  var input, filter, zipfilter, tr, td, i;
  input = document.getElementById("ZIP");
  filter = input.value();
  zipfilter = document.getElementById("ZIP");
  

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
	td = tr[i].getElementsByTagName("ZIP")[0];
    if (td) {
      if (td.innerHTML.indexOf(filter) > -1) {
    	tr[i].style.display = "";
  	} else {
    	tr[i].style.display = "none";
  	}
    } 
  }
}
</script>
