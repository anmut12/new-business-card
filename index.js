  const card = document.getElementById('card');
  const toBack = document.getElementById('toBack');
  const toFront = document.getElementById('toFront');
  const flipSound = document.getElementById('flipSound');

  const text = `I hold a Bachelor of Science Degree in Mechanical Engineering, specialized in Mechanical
 Design Stream where I gained a solid foundation in the principles of engineering, physics, and
 mathematics. This program not only honed my analytical and problem-solving skills but also
 provided me with practical experience in designing, analyzing, and improving mechanical
 systems and processes. Building upon this foundation, I pursued a Master of Science in
 Automotive Engineering. This specialization allowed me to delve deeper into the intricacies of
 vehicle design and functionality. In this program, I explored advanced topics such as vehicle
 dynamics, powertrain systems, automotive safety, the latest technologies in the automotive
 sector, such as electric and hybrid vehicle systems, autonomous driving technologies, emissions
 due to vehicles, and sustainable engineering practices . Currently, I am working as
 Sales Engineer in charge of Atlas Copco and Epiroc products at Hagbes PLC .`;
  let i = 0;

  function typeWriter() {
    const element = document.getElementById("typewriter");
    element.innerHTML = "";
    i = 0;
    const interval = setInterval(() => {
      element.innerHTML += text.charAt(i);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 30);
  }

  toBack.addEventListener('click', () => {
    card.classList.add('flipped');
    flipSound.play();
    // confetti({
    //   particleCount: 100,
    //   spread: 70,
    //   origin: { y: 0.6 }
    // });
    typeWriter();
  });

  toFront.addEventListener('click', () => {
    card.classList.remove('flipped');
    flipSound.play();
  });
