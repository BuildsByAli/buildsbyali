
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if(menuBtn && navLinks){
  menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
}

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

const launcher = document.querySelector('.chat-launcher');
const chat = document.querySelector('.chat');
const closeBtn = document.querySelector('.chat-close');
const form = document.querySelector('.chat-form');
const input = document.querySelector('.chat-input');
const body = document.querySelector('.chat-body');

function addMessage(text, type='bot'){
  const div = document.createElement('div');
  div.className = `msg ${type}`;
  div.textContent = text;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}

if(launcher && chat){
  launcher.addEventListener('click',()=>chat.classList.toggle('open'));
}
if(closeBtn && chat){
  closeBtn.addEventListener('click',()=>chat.classList.remove('open'));
}

const answers = [
  {keys:['project','projects','build'], text:"Ali focuses on practical software, data, automation, and intelligent tools designed to solve real-world business problems. Visit the Projects page to see current and upcoming builds."},
  {keys:['contact','email','hire','work'], text:"Use the Contact page to reach Builds by Ali. You can also add your business email and social links there when you're ready."},
  {keys:['resume','experience','background'], text:"Visit the Resume page for a growing snapshot of Ali's technical, business, and project experience."},
  {keys:['about','ali','who'], text:"Builds by Ali is a technology brand focused on turning real-world problems into smarter software, data, and automation solutions."},
  {keys:['ai','chatbot'], text:"This is a lightweight demo assistant that works entirely in the browser. A real AI version can later be connected securely through a backend API."}
];

if(form){
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const value = input.value.trim();
    if(!value) return;
    addMessage(value,'user');
    input.value='';
    const lower=value.toLowerCase();
    const match=answers.find(a=>a.keys.some(k=>lower.includes(k)));
    setTimeout(()=>addMessage(match ? match.text : "I can help you explore Builds by Ali. Try asking about projects, Ali, the resume, contact information, or the future AI assistant."),350);
  });
}

document.querySelectorAll('.contact-form').forEach(f=>{
  f.addEventListener('submit',(e)=>{
    e.preventDefault();
    const status=f.querySelector('.form-status');
    if(status) status.textContent='Form demo ready. Connect Formspree, Netlify Forms, or a backend later to receive messages.';
  });
});
