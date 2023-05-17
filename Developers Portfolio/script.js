<!-- JavaScript for Smooth Scrolling -->
    <script>

      // Wait for 3 seconds and remove the loading screen
		setTimeout(function() {
			document.querySelector('.loading-screen').remove();
		}, 4930);

    // SD CODE

 const text = [
  "I am a Software Developer",
  "Both Front-end and Back-end",
];
const section = document.querySelector(".transparent-section");
let index = 0;
let subIndex = 0;
let isDeleting = false;

function writeText() {
  section.innerText = text[index].slice(0, subIndex);

  if (isDeleting) {
    subIndex--;

    if (subIndex === 0) {
      isDeleting = false;
      index++;

      if (index === text.length) {
        index = 0;
      }
    }
  } else {
    subIndex++;

    if (subIndex === text[index].length + 1) {
      isDeleting = true;
    }
  }

  const speed = isDeleting ? 50 : 150;
  setTimeout(writeText, speed);
}

writeText();

   // Get a reference to the paragraph element
  var aboutMeText = document.getElementById("about-me-text");

  // Create a variable to store the original text
  var originalText = aboutMeText.innerHTML;

  // Create a variable to store the current position in the text
  var position = 0;

  // Create a variable to store the current state (writing or waiting)
  var state = "writing";

  // Create a function to update the text in the paragraph element
  function updateText() {
    // Get the current portion of the original text to display
    var newText = originalText.slice(0, position);

    // Update the text in the paragraph element
    aboutMeText.innerHTML = newText;

    // Move the current position in the text
    if (state === "writing") {
      position++;
    } else if (state === "waiting") {
      // Wait for 2 seconds before starting to write again
      setTimeout(function() {
        position = 0;
        state = "writing";
      }, 2000);
    }

    // If we've reached the end of the original text, wait for 2 seconds before starting to write again
    if (position === originalText.length) {
      state = "waiting";
    }
  }

  // Call the updateText function every 100 milliseconds
  setInterval(updateText, 100);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
      
document.querySelector('.contact-button').addEventListener('click', function(event) {
  event.preventDefault();
  const email = 'pssethi@uwaterloo.ca';
  const subject = 'Contact Me';
  const body = '';
  const xhttp = new XMLHttpRequest();
  const url = 'send-email.php'; // Replace with your server-side script URL
  const params = 'email=' + email + '&subject=' + subject + '&body=' + encodeURIComponent(body);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert('Email sent successfully!');
    }
  };
  xhttp.open('POST', url, true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.send(params);
});


const messageIcon = document.getElementById('message-icon');
const messagePopup = document.getElementById('message-popup');
const closeMessagePopup = document.querySelector('.close-message-popup');

messageIcon.addEventListener('click', () => {
  messagePopup.style.display = 'block';
});

closeMessagePopup.addEventListener('click', () => {
  messagePopup.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == messagePopup) {
    messagePopup.style.display = 'none';
  }
});



      	const element = document.getElementById("special-paragraph");

		function fadeIn() {
			element.style.opacity = 1;
			setTimeout(fadeOut, 2000);
		}

		function fadeOut() {
			element.style.opacity = 0;
			setTimeout(fadeIn, 2000);
		}

		fadeIn();

      const headerText = document.getElementById('header-text');

let hue = 0;

setInterval(() => {
  hue = (hue + 1) % 360;
  headerText.style.color = `hsl(${hue}, 100%, 50%)`;
}, 50);


      // Get the introduction section element
const introSection = document.querySelector('.introduction');

// Add a mousemove event listener to the introduction section
introSection.addEventListener('mousemove', e => {
  // Get the width and height of the introduction section
  const introWidth = introSection.offsetWidth;
  const introHeight = introSection.offsetHeight;

  // Calculate the mouse position relative to the center of the introduction section
  const mouseX = e.clientX - introWidth / 2;
  const mouseY = e.clientY - introHeight / 2;

  // Rotate the left and right elements of the introduction section based on the mouse position
  const leftElement = introSection.querySelector('.left');
  leftElement.style.transform = `rotateY(${mouseX / 20}deg) rotateX(${mouseY / -20}deg)`;

  const rightElement = introSection.querySelector('.right');
  rightElement.style.transform = `translateZ(150px) rotateY(${mouseX / 20}deg) rotateX(${mouseY / -20}deg)`;
});

// Add a mouseout event listener to reset the rotation of the left and right elements
introSection.addEventListener('mouseout', () => {
  const leftElement = introSection.querySelector('.left');
  leftElement.style.transform = 'rotateY(0) rotateX(0)';

  const rightElement = introSection.querySelector('.right');
  rightElement.style.transform = 'translateZ(0) rotateY(0) rotateX(0)';
});


      const menuBtn = document.querySelector('.menu-btn');
const dashboard = document.querySelector('.dashboard');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  dashboard.classList.toggle('open');
});


      const introBtn = document.querySelector('.btn-introduction');
  const aboutBtn = document.querySelector('.btn-about-me');
  const projectsBtn = document.querySelector('.btn-projects');
  const skillsBtn = document.querySelector('.btn-skills');
  const qualBtn = document.querySelector('.btn-qualifications');
  const awardsBtn = document.querySelector('.btn-awards');
  const workExpBtn = document.querySelector('.btn-work-experience');
  const contactBtn = document.querySelector('.btn-contact-info');
  
  introBtn.addEventListener('click', () => {
    document.querySelector('.introduction').scrollIntoView({behavior: 'smooth'});
  });
  
  aboutBtn.addEventListener('click', () => {
    document.querySelector('.about-me').scrollIntoView({behavior: 'smooth'});
  });
  
  projectsBtn.addEventListener('click', () => {
    document.querySelector('.projects').scrollIntoView({behavior: 'smooth'});
  });
  
  skillsBtn.addEventListener('click', () => {
    document.querySelector('.skills').scrollIntoView({behavior: 'smooth'});
  });
  
 
  contactBtn.addEventListener('click', () => {
    document.querySelector('.contact-info').scrollIntoView({behavior: 'smooth'});
  });

  

    </script>