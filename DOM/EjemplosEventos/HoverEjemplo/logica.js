const hoverDiv = document.getElementById("hoverDiv")

hoverDiv.addEventListener('mouseover', function(){
    hoverDiv.style.backgroundColor ='lightcoral'
    hoverDiv.style.width = "500px"
    hoverDiv.style.height = "500px"
    hoverDiv.style.transition ="width 0.50s, height 0.50s"
})

hoverDiv.addEventListener('mouseout', function(){
    hoverDiv.style.backgroundColor ='lightblue'
    hoverDiv.style.width = "200px"
    hoverDiv.style.height = "200px"
})