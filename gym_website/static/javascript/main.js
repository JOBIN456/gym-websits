// $(document).ready(function()
//     {
//         $('carouselExampleFade').carousel({
//             interval: 3000,
//             cycle: true
//           }); 
//     });


const the_animation = document.querySelectorAll('.trainer-card')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('train-card-animation')
        }
            else {
                entry.target.classList.remove('train-card-animation')
            }
        
    })
},
   { threshold: 0.5
   }
   
   );


  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  } 



// const the_animation_1= document.querySelectorAll('.our-trainers')
// const the_observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting)
//         {
//             entry.target.classList.add('our-trainers-animation')

//         }
//         else{
//             entry.target.classList.remove('our-trainers-animation')
//         }
//     })
// },
// {
//     threshold:0.5

// }
//   );
//   for (let i = 0; i < the_animation_1.length; i++) {
//     const elements = the_animation_1[i];
 
//     the_observer .observe(elements);
//    } 
 







const the_animation_1 = document.querySelector('.our-trainers');

const the_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('our-trainers-animation');
        } else {
            entry.target.classList.remove('our-trainers-animation');
        }
    });
}, {
    threshold: 0.5
});

the_observer.observe(the_animation_1);
