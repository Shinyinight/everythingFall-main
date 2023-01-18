const canvas = document.getElementById('canvas');
// console.log(canvas);
const ctx = canvas.getContext('2d');
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;
const numberOfParticles = 50;
let particlesArray = []




class Particles{
     constructor(){
          this.x= Math.random() * canvas.width
          this.y = Math.random() * canvas.height
          this.size= Math.random() * 100 + 50
          this.speed = Math.random() * 5 + 1;
          this.angle = Math.random() * 360 ;
          this.spin = Math.random() < 0.5 ? -1 : 1
          this.pumkin = new Image();
          // this.img
          this.img = Math.floor(Math.random() * 4);
          
          switch (this.img) {
               case 0: {
                    this.pumkin.src = 'bust.svg'
                    break;
                    
               }
               case 1: {
                    this.pumkin.src = 'peep-54.svg'
                    break;
               }
               case 2: {
                    this.pumkin.src = 'peep-61.svg'
                    break;
               }
               default: {
                    this.pumkin.src = 'peep-82.svg'
               }
          }
     }
     draw(){
          ctx.save();
          ctx.translate(this.x, this.y)
          ctx.rotate(this.angle * (Math.PI / 360) * this.spin)
          ctx.drawImage(this.pumkin, 0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
          ctx.restore()
     }
     update(){
          if(this.y > ( canvas.height +  this.size)){
               this.y=0 - this.size;
               this.x = Math.random() * canvas.width
               this.size = Math.random() * 100 + 50
               this.speed = Math.random() * 5 + 1;
               this.angle = Math.random() * 360;
               this.spin = Math.random() < 0.5 ? -1 : 1
               this.img = Math.floor(Math.random() * 4);
               // console.log(this.speed)
               switch (this.img) {
                    case 0: {
                         this.pumkin.src = 'bust.svg'
                         break;
                         
                    }
                    case 1: {
                         this.pumkin.src = 'peep-54.svg'
                         break;
                    }
                    case 2: {
                         this.pumkin.src = 'peep-61.svg'
                         break;
                    }
                    default: {
                         this.pumkin.src = 'peep-82.svg'
                    }
               }
               
          }
          this.angle+= this.speed - 4; 
          this.y += this.speed;
     }
}

function init() {
     for( let i = 0; i < numberOfParticles; i++ ) {
          particlesArray.push(new Particles());
     }
}
init();

function animate(){
     ctx.clearRect(0,0, canvas.width, canvas.height);
     for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].draw();
          
          particlesArray[i].update();
          
          
     }
     requestAnimationFrame(animate);
}

const start = () =>{
     document.querySelector('.wrapper').classList.add('active');
     animate();     
}