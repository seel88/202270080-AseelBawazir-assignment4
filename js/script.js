document.addEventListener('DOMContentLoaded', () => {
    // 1. DYNAMIC GREETING
    const greetingEl = document.getElementById('greeting');
    const hour = new Date().getHours();
    let text = (hour < 12) ? "Good Morning" : (hour < 18) ? "Good Afternoon" : "Good Evening";
    if (greetingEl) greetingEl.textContent = `${text}, I'm Aseel Bawazir`;

    // 2. STATE MANAGEMENT (Dark Mode)
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeIcon.textContent = isDark ? '☀️' : '🌙';
    });

    // 3. API INTEGRATION (GitHub)
    const fetchGitHubRepos = async () => {
        const grid = document.getElementById('project-grid');
        const username = 'aseel-bawazir';

        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
            if (!response.ok) throw new Error("GitHub Fetch Failed");

            const repos = await response.json();
            const myWork = repos.filter(repo => !repo.fork && repo.description).slice(0, 4);

            myWork.forEach(repo => {
                const card = document.createElement('div');
                card.className = 'project-card';
                card.innerHTML = `
                    <div class="card-body">
                        <span class="tag">GitHub | ${repo.language || 'Code'}</span>
                        <h3>${repo.name.replace(/-/g, ' ')}</h3>
                        <p>${repo.description}</p>
                        <a href="${repo.html_url}" target="_blank" style="text-decoration:none; color:var(--primary-blue); font-weight:700; display:inline-block; margin-top:10px;">Source →</a>
                    </div>
                `;
                grid.appendChild(card);
            });
        } catch (error) {
            console.error(error);
        }
    };

    // 4. COMPLEX FILTERING LOGIC
    window.filterProjects = (lang) => {
        const allCards = document.querySelectorAll('.project-card');
        const filterText = lang.toLowerCase();

        allCards.forEach(card => {
            const tagText = card.querySelector('.tag').textContent.toLowerCase();
            let isMatch = (filterText === 'all') || 
                          (filterText === 'html/css' && (tagText.includes('html') || tagText.includes('css'))) ||
                          (tagText.includes(filterText));

            card.style.display = isMatch ? 'block' : 'none';
        });

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.textContent === lang);
        });
    };

    // 5. VALIDATION
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const msg = document.getElementById('message').value.trim();
            if (msg.length < 15) {
                alert("Please write a longer message.");
            } else {
                alert("Success! Message sent.");
                form.reset();
            }
        });
    }

    fetchGitHubRepos();
});