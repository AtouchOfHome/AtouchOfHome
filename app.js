  $(document).ready(function(){
    $('#toggle').click(function(){
      $('#item').toggle(500)  
    })
  
})

 function loadContentBasedOnId() {
    let urlParams = new URLSearchParams(window.location.search);
    let currentCardId = urlParams.get('cardId');
    console.log(currentCardId);

    // Fetch content based on currentCardId and load it into the content-container
    let contentEl = document.getElementById('content');
    let ImageEl = document.getElementById('image');

       

    console.log(contentEl);
    console.log(ImageEl);
 

    let cardContent;
    let imageCont;
  
    switch (currentCardId) {
      case 'card1':
      cardContent = "<h1 class='mb-3'>Assisted Living: Enhancing Independence, Ensuring Support</h1><p>Assisted living is a specialized residential option designed for seniors who seek a balance between independence and the need for personalized assistance. In these communities, older adults enjoy a comfortable and supportive living environment tailored to their individual needs and preferences.</p> <h4>Key Features:</h4>  <p>Personalized Care: Assisted living facilities provide a range of services to support residents with daily activities, such as bathing, dressing, medication management, and more. Care plans are customized to meet each resident's unique requirements.</p><p>Nutritious Dining: Many assisted living communities offer dining services with nutritious and well-balanced meals. Special dietary needs and preferences are often accommodated.</p>";
      imageCont = "<img src='./images/doctor-talking-with-her-elder-patient.jpg' class='w3-card-4' alt='pics'>"
    

        break;
      case 'card2':
        cardContent = "<h1 class='mb-3'>Senior Living</h1><p>Welcome to A Touch of Home, where a vibrant and fulfilling lifestyle awaits. Our community is dedicated to providing a supportive and enriching environment for older adults seeking a place to call home. Embrace a new chapter of life surrounded by like-minded individuals, engaging activities, and personalized care.</p><p>At A Touch of Home, we prioritize independence, well-being, and a sense of belonging. Our range of housing options, from independent living to assisted living and memory care, ensures that each resident receives the level of support they require. Enjoy a community where friendships flourish, and every day brings opportunities for learning, socializing, and creating cherished memories.</p><p>Our dedicated team is committed to enhancing the quality of life for our residents, fostering a welcoming atmosphere, and promoting a sense of community. Discover a place where comfort meets convenience, and where every resident is valued as a unique individual with a lifetime of experiences to share.</p>";
         imageCont = "<img src='./images/medium-shot-senior-man-holding-tablet.jpg' alt>"
        break;
      default:
        cardContent = "<h2 class='mb-3'>Memory Care</h2><p>Welcome to our Memory Care Community, a place where compassion meets expertise to provide specialized care for individuals facing memory-related challenges. Our dedicated team understands the unique needs of those navigating Alzheimer's disease and dementia, and we are committed to creating a supportive and nurturing environment.</p><p>In our Memory Care Community, we prioritize the well-being and dignity of each resident. Our carefully designed living spaces and programs are tailored to promote a sense of familiarity, security, and comfort. With a focus on individualized care plans, we aim to enhance the quality of life for our residents while providing support for their cognitive and emotional needs.</p><p>Our trained and compassionate staff members are available around the clock, ensuring a safe and engaging atmosphere. We encourage social interaction, cognitive stimulation, and meaningful activities to foster a sense of purpose and connection. Families can have peace of mind knowing that their loved ones are receiving specialized care in an environment that values dignity and respect.</p>";
       imageCont = "<img src='./images/doctor-talking-with-her-patient.jpg' alt>"
    }

    // Set the innerHTML of the content container with the loaded content
    if (contentEl && ImageEl) {
      contentEl.innerHTML = cardContent;
      ImageEl.innerHTML = imageCont;
  
    }
  }

  function loadContent(cardId) {
    // Use location.assign to navigate without refreshing the page
    window.location.href = './details.html?cardId=' + cardId;
  }

 document.addEventListener('DOMContentLoaded', function () {
    // List of card elements
    let cardElements = document.querySelectorAll('#btn');
    console.log(cardElements);
    

    // Set up click event listeners for each card
    cardElements.forEach(function (cardElement) {
      cardElement.addEventListener('click', function () {
        let cardId = cardElement.getAttribute('data-card-id');
        console.log(cardId);
        loadContent(cardId);
       
      });
    });

    // Load content based on the initial cardId in the URL
    loadContentBasedOnId();
  });



$(document).ready(function(){
 
 $('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  infinite: true,
  arrows: false,

   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
         infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
         infinite: true,
      }
    }
  
  ]
  
  
});
 
  
});


let prevScrollPos = window.scrollY;

window.onscroll = function() {
  const currentScrollPos = window.scrollY;
  const isHomePage = window.location.pathname === ".home"; // Adjust the home page path

  if (isHomePage) {
    if (prevScrollPos > currentScrollPos) {
      document.getElementById("site-header").style.top = "0";
      document.getElementById("site-navbar").style.top = "60px";
    } else {
      document.getElementById("site-header").style.top = "-60px";
      document.getElementById("site-navbar").style.top = "0";
    }
  }

  prevScrollPos = currentScrollPos;
};


  const scriptURL = 'https://script.google.com/macros/s/AKfycbyfSlvcPC4pBvzMHLsjc7IvhTo0D0VA23q5TKwJtQKClVXrlx1Z32bplZeNJQlhpOH0rg/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
           swal({text: "Message sent!"});
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })


  const scriptURL1 = 'https://script.google.com/macros/s/AKfycby4A0o6UgUEABN2szICN4OUI0p52sjRu27M7YqZeXRu1_2XfZSW4CZyb9GTkbnc-keQ/exec';
  const form1 = document.forms['submit-to-google-sheet1'];

  form1.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL1, { method: 'POST', body: new FormData(form1)})
      .then(response => {
           swal({text: "Message sent!"});
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })

  window.addEventListener('DOMContentLoaded', (event) => {
  // Get a reference to the video element
  const video = document.getElementById('myVideo');
  
  // Play the video
  video.play();
});
