// NAVBAR //
let lastScrollTop = 0.
navbar = document.getElementById('navbar');

window.addEventListener('scroll',function(){
  const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop>lastScrollTop){
    navbar.style.top = "-50px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop ;
}
);

// TYPED //
var typed3 = new Typed('.typed', {
    strings: ["Bonjour à toutes et à tous, après une carrière de 13 ans dans l'industrie agro-alimentaire.J'ai décidé de me lancer à fond dans l'apprentissage du code, depuis près de 6 mois, je me forme à temps plein aux langages informatique tels que HTML, CSS,JAVASCRIPT, PHP et MYSQL afin de devenir le plus rapidement possible développeur. Plus qu'un avenir professionnel, je me suis découvert une passion, LE CODE ."],
    typeSpeed: 20,
   
    
  });
    