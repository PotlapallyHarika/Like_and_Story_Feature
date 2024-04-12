document.querySelector("#main").addEventListener("click", function(event) {
    if (event.target.tagName === "IMG") {
        var loveButton = event.target.nextElementSibling;
        var heartIcon = event.target.parentElement.nextElementSibling.querySelector(".ri-heart-3-line");
        
       
        heartIcon.classList.toggle("ri-heart-3-line");
        heartIcon.classList.toggle("ri-heart-3-fill");
        heartIcon.style.color="red";

        loveButton.style.transform = 'translate(-50%,-50%) scale(1)'
        setTimeout(function(){
            loveButton.style.transform = 'translate(-50%,-50%) scale(0)'
        },2000)
    }
});


var arr=[
    {dp:"https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWwlMjBib3lzfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1520013225692-fff4010c0ae6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1vZGVsJTIwYm95c3xlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://media.istockphoto.com/id/1092715214/photo/two-glad-positive-grinning-lady-stand-in-glasses-spectacles-street-style-stylish-trendy-cool.jpg?s=612x612&w=0&k=20&c=ypVq4SYum8SDK8S8or7jq6svxaKMSW4eSh4l1dlnmSU=",story:"https://images.unsplash.com/photo-1634149587473-268d172207f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVsJTIwYm95c3xlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1664302295078-32ca013599e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVsJTIwYm95c3xlbnwwfHwwfHx8MA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1661630690483-f643a97e14b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1vZGVsJTIwYm95c3xlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1465984111739-03a1ee4647a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vZGVsJTIwYm95c3xlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1584598788860-2695a3a6c874?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1vZGVsJTIwYm95c3xlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1535365229039-e36084b548f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsJTIwYm95c3xlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1529809773508-cd894c3de760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVsJTIwYm95c3xlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1552060405-f2081b6e7951?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsJTIwYm95c3xlbnwwfHwwfHx8MA%3D%3D",story:"https://media.istockphoto.com/id/1284368377/photo/boy-in-blue-t-shirt-is-typing-on-laptop-on-yellow-studio-background.jpg?s=612x612&w=0&k=20&c=mNzXIlFvZfv0DoXXdC6DBIoF2BNYCe4ookZitUzcuxc="},
]

var nav=document.querySelector("#nav")
var clutter=""

arr.forEach(function(elem,idx){
    clutter += `<div class="img1">
    <img id=${idx} src="${elem.dp}" alt=""></div>`
})

nav.innerHTML=clutter

var nav=document.querySelector("#nav")

nav.addEventListener("click",function(vall){
    var storyscreen=document.querySelector("#storyscreen")
    storyscreen.style.display="block"
    storyscreen.style.backgroundImage=`url(${arr[vall.target.id].story})`

    setTimeout(function(){
        storyscreen.style.display="none"
    },2000)

    var imgid=vall.target.id
    document.getElementById(imgid).style.border="2px solid green" 
})


