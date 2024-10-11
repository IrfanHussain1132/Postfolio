document.addEventListener('DOMContentLoaded', function() {
    const sodhi = document.querySelector('.sodhi');
    const card = document.querySelector('.card');
    const check = document.querySelector('.check');
    let j = 1;

    card.addEventListener('click', function() {
        j++;
        card.classList.toggle('fliped');
        sodhi.style.transform = 'scale(0.95)';

        setTimeout(function() {
            if (j % 2 !== 0) {
                sodhi.innerHTML = `
                <h1>Amazon Clone</h1>
                <p>I developed an Amazon clone using pure HTML and CSS to replicate the look and feel of 
                Amazon's main interface. The project demonstrates my proficiency in front-end web development, 
                with a focus on responsive design, UI/UX elements, and modern web layouts.</p>
            `;
                var button = document.createElement("button");
                button.innerHTML = "Check it now";
                button.classList.add("check");
                button.onclick = function() {
                    window.open('https://irfanyt-amazon-clone.netlify.app/', '_blank');
                };
                sodhi.appendChild(button);
            } else {
                sodhi.innerHTML = `
                <h1>Spotify Clone</h1>
                <p>I developed a Spotify clone using HTML, CSS, and JavaScript to recreate the user interface 
                and basic functionality of the popular music streaming service. This project highlights my skills 
                in front-end development, showcasing my ability to integrate JavaScript for interactivity and provide 
                a responsive, dynamic user experience.</p>
            `;
                var button = document.createElement("button");
                button.innerHTML = "Check it now";
                button.classList.add("check");
                button.onclick = function() {
                    window.open('https://spotify-144p.netlify.app/', '_blank');
                };
                sodhi.appendChild(button);
            }

            const sodhiPara = document.querySelector('h1');
            if (j % 2 !== 0) {
                sodhiPara.style.color = '#f0c14b';
            } else {
                sodhiPara.style.color = 'green';
            }

            sodhi.style.transform = 'scale(1)';
        }, 369);
    });

    document.getElementById('project').addEventListener('click', function() {
        document.getElementById('container2').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('alert').addEventListener('click', function() {
        alert('Email: irfanhussain1132@gmail.com ');  
    });
});
