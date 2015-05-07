$(document).ready(function(){
var form = $("#search")
var movieSearch = $("#movie-search")


form.on("submit", function(event){
 event.preventDefault()
 var title = movieSearch.val()
       $.ajax({
         url: "http://www.omdbapi.com/?t=" + title,
         type: "GET",
         dataType: "json",
         context: this
       }).done(function( response){
         console.log(response.Title);
		 $("#movie-select option:selected").after("<option value=movie>" + response.Title + + "</option>")
         $("#movie-detail").append("<ul>" + "<li>" +response.Title + "</li>" + "<li>" + response.Year + "</li>" + "</div>")
         $("#movie-detail").append("<img src=" + response.Poster + "/>")
         console.log(response.length);
		 console.log(response.order);
		 $.each(response, function(index, row) {
		 console.log(row[0].length);     
         });       
     	}).fail(function(){
         console.log("AJAX request Failed!");
       })
     });
   })