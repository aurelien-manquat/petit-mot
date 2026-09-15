const eventDate = new Date('2026-10-24T00:00:00');
function updateCountdown(){let remaining=Math.max(0,eventDate-new Date());const values={days:Math.floor(remaining/86400000),hours:Math.floor(remaining%86400000/3600000),minutes:Math.floor(remaining%3600000/60000),seconds:Math.floor(remaining%60000/1000)};Object.entries(values).forEach(([id,value])=>document.getElementById(id).textContent=String(value).padStart(2,'0'));}
updateCountdown(); setInterval(updateCountdown, 1000);
const modal=document.getElementById('modal'); const giftName=document.getElementById('gift-name');
document.querySelectorAll('[data-gift]').forEach(button=>button.addEventListener('click',()=>{giftName.textContent=button.dataset.gift;modal.showModal();}));
document.querySelectorAll('.close,.close-action').forEach(button=>button.addEventListener('click',()=>modal.close()));
modal.addEventListener('click',(event)=>{if(event.target===modal)modal.close();});
document.querySelectorAll('[data-url]').forEach(button=>button.addEventListener('click',()=>window.open(button.dataset.url,'_blank','noopener')));
const slides=[...document.querySelectorAll('.slide')],dots=[...document.querySelectorAll('.carousel-dots button')];let currentSlide=0;
function showSlide(index){currentSlide=(index+slides.length)%slides.length;slides.forEach((slide,i)=>slide.classList.toggle('active',i===currentSlide));dots.forEach((dot,i)=>dot.classList.toggle('active',i===currentSlide));}
document.querySelector('.next').addEventListener('click',()=>showSlide(currentSlide+1));document.querySelector('.previous').addEventListener('click',()=>showSlide(currentSlide-1));dots.forEach((dot,i)=>dot.addEventListener('click',()=>showSlide(i)));setInterval(()=>showSlide(currentSlide+1),5000);
