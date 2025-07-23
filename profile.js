document.addEventListener("DOMContentLoaded", function() {
    loadProfiles();
});

function loadProfiles() {
    fetch("get_profiles.php")
        .then(response => response.json())
        .then(data => {
            const profilesContainer = document.getElementById('profiles');
            profilesContainer.innerHTML = '';

            data.forEach(profile => {
                const profileCard = document.createElement('div');
                profileCard.classList.add('profile-card');

                profileCard.innerHTML = `
                    <h3>${profile.name}</h3>
                    <p><strong>Profession:</strong> ${profile.profession}</p>
                    <p>${profile.bio}</p>
                    <div class="portfolio">
                        <strong>Portfolio:</strong>
                        <p>${profile.portfolio}</p>
                    </div>
                    <div class="video-intro">
                        <iframe width="100%" height="315" src="${profile.video_url}" frameborder="0" allowfullscreen></iframe>
                    </div>
                `;

                profilesContainer.appendChild(profileCard);
            });
        });
}
