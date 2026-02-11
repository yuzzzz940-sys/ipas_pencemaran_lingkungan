function showPage(id){
document.querySelectorAll('.page').forEach(p=>p.style.display="none");
document.getElementById(id).style.display="block";
}
showPage("home");