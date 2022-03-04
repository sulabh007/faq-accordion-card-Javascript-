document.addEventListener('DOMContentLoaded', ()=>{
    const para= document.getElementsByClassName("title");
    for (let i = 0; i < para.length; i++) {
        if(screen.width>375){
            on_hover(para, i);
        }
        console.log(screen.width)

        para[i].addEventListener('click', () => {
            if(document.getElementById(`custId${i}`).value=="off"){
                showbox(i);
            }
            else if (document.getElementById(`custId${i}`).value == "on") {
                hide_detail_box(i);
            }
        })   
    }
})
 

function showbox(box_no){
    for (let i=0;i<5;i++) {
        hide_detail_box(i);
    }
    show_detail_box(box_no);
}

    
function hide_detail_box(box_no){
    document.getElementsByClassName("detail")[box_no].style.display='none';
    document.getElementsByClassName("title")[box_no].style.fontWeight='400';
    document.getElementsByClassName("icon")[box_no].style.transitionDuration = '0.5s';
    document.getElementsByClassName("icon")[box_no].style.transform ='rotate(0deg)';
    document.getElementById(`custId${box_no}`).value = "off"
}


function show_detail_box(box_no){
    document.getElementsByClassName("detail")[box_no].style.display = 'block';
    document.getElementsByClassName("title")[box_no].style.fontWeight = '700';
    document.getElementsByClassName("icon")[box_no].style.transitionDuration = '0.5s';
    document.getElementsByClassName("icon")[box_no].style.transform = 'rotate(180deg)';
    document.getElementById(`custId${box_no}`).value = "on"
}


function on_hover(para, box_no){
    const hover = document.getElementsByClassName('heading');
    para[box_no].addEventListener('mouseover', () => {
        hover[box_no].style.color = "hsl(14, 88%, 65%)";
        document.querySelector('.box-image').style.left = "9.1%";
        
        
    })
    para[box_no].addEventListener('mouseout', () => {
        hover[box_no].style.color = "hsl(238, 29%, 16%)";
        document.querySelector('.box-image').style.left = "11.6%";
        
        
    })
}