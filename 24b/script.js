const header =document.getElementById('header')
const title =document.getElementById('title')
const excerpt =document.getElementById('excerpt')
const profile_img =document.getElementById('profile_img')
const name =document.getElementById('name')
const date =document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animate-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)
function getData(){
    header.innerHTML = '<img src="images/raimond-klavins-zfeY8HkSAOE-unsplash.jpg" alt="">'
    title.innerHTML ='Lorem ipsum dolor sit amet.'
    excerpt.innerHTML ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, obcaecati.'
    profile_img.innerHTML='<img src="images/profile.JPG" alt="">'
    name.innerHTML='mshrf'
    date.innerHTML='april 04,2023'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}