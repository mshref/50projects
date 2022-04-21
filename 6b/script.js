const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkboxes)

checkboxes()

function checkboxes(){
    let trigerPoint = window.innerHeight/5*4

    boxes.forEach(box=> {
        let boxTop = box.getBoundingClientRect().top

        if(boxTop<trigerPoint){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}