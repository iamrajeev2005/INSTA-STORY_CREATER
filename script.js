var arr = [
    {dp:"https://images.pexels.com/photos/2869076/pexels-photo-2869076.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:"https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {dp:"https://images.pexels.com/photos/2115681/pexels-photo-2115681.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:"https://images.pexels.com/photos/3270230/pexels-photo-3270230.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {dp:"https://images.pexels.com/photos/8686319/pexels-photo-8686319.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:"https://images.pexels.com/photos/413959/pexels-photo-413959.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {dp:"https://images.pexels.com/photos/2772099/pexels-photo-2772099.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:"https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {dp:"https://images.pexels.com/photos/1855582/pexels-photo-1855582.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:"https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {dp:"https://images.pexels.com/photos/7691023/pexels-photo-7691023.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:"https://images.pexels.com/photos/761115/pexels-photo-761115.jpeg?auto=compress&cs=tinysrgb&w=600"},
]

var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div id="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`

})

var grow = 0

document.querySelector(".storybox").innerHTML = clutter
document.querySelector(".storybox").addEventListener("click",function(dets){
    document.querySelector(".fullscreen").style.display = "block"
    document.querySelector(".fullscreen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector(".fullscreen").style.display = "none"
    },3000)

   if(grow<100){
    setInterval(function(){
        document.querySelector("#growth").style.width = `${grow}%`
        grow++
    },30)
   }else{
    grow = 0
   };
});