$("body").append(`
<div class="sb_wrapper"><div class="sb_balloon">
    <img class="sb_icon" src="" width="16" height="16"><b class="sb_title">Title.</b>
    <br><span class="sb_body">This is a balloon. Hooray!</span>
    
    </div>



<svg class="sb_handle" xmlns="http://www.w3.org/2000/svg" width="17.25" height="17.212" fill="#ffffe1" xmlns:v="https://vecta.io/nano"><path d="M1.207.255H.603l.427.427 15.5 15.5.427.427v-.604-15.5-.25h-.25z" stroke="#000" stroke-width=".5"/><path d="M-.398.683h18.2v-.859h-18.2z"/></svg>

</div>
`)
$(".sb_wrapper").hide();
$("head").append(`
<style>
.sb_wrapper{
width: fit-content;
position: fixed;
right: 3px;
bottom: 31px;
z-index: 2;
}
.sb_balloon{
background-color: #FFFFE1;
max-height: 60px;
padding: 8px;
border: 1px solid black;
border-radius: 6px;
font-family: px_sans_serif;
font-size: 11px;
}
.sb_handle{
  transform: scaleX(1.3) scaleY(1.1);
  float: right;
  position: relative;
  right: 15px;
  top: -1px;
}
.sb_title{
vertical-align: middle;
margin-bottom: 1px;
}
.sb_icon{
vertical-align: middle;
margin-right: 2px;
margin-bottom: 1px;
}
</style>
<script>
var sb_vals = null
function sb_send(sb_val1, sb_val2, sb_icon){
 sb_vals = [sb_val1, sb_val2, sb_icon]
document.querySelector('.sb_title').innerHTML = sb_vals[0];
document.querySelector('.sb_body').innerHTML = sb_vals[1];
if (sb_vals[2] == "noicon") {
  document.querySelector('.sb_icon').style.display = "none"
} else {
  document.querySelector('.sb_icon').style.display = "initial"
  document.querySelector('.sb_icon').setAttribute("src", sb_vals[2]);
}
$(".sb_wrapper").fadeIn();

setTimeout(() => { 
    $(".sb_wrapper").fadeOut();
}, "3000");

}
</script>
`)

