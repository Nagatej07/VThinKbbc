const defaultNews = [
    {
        title: "AI Revolution in Healthcare 2024",
        description: "How artificial intelligence is transforming medical diagnosis, patient care, and drug discovery with breakthrough applications.",
        image: "https://placehold.co/600x400/1b2b3a/ffffff?text=AI+Healthcare",
        url: "https://www.who.int/news-room/feature-stories/detail/artificial-intelligence-in-health-care"
    },
    {
        title: "Quantum Computing Breakthroughs",
        description: "Latest advancements in quantum computing: IBM and Google race to achieve quantum supremacy with new chip architectures.",
        image: "https://placehold.co/600x400/1b2b3a/ffffff?text=Quantum+Computing",
        url: "https://www.ibm.com/quantum"
    },
    {
        title: "Web Development in 2024",
        description: "Top trends reshaping web development: AI integration, WebAssembly, Edge Computing, and the rise of no-code platforms.",
        image: "https://placehold.co/600x400/1b2b3a/ffffff?text=Web+Dev+2024",
        url: "https://react.dev/blog/2024/02/15/react-labs-what-we-have-been-working-on-february-2024"
    },
    {
        title: "Cybersecurity Trends 2024",
        description: "Essential security practices for the modern era: Zero Trust Architecture, AI-powered threats, and quantum-safe encryption.",
        image: "https://placehold.co/600x400/1b2b3a/ffffff?text=Cybersecurity",
        url: "https://www.nist.gov/cybersecurity"
    }
];

async function fetchTechNews() {
    const newsGrid = document.getElementById('newsGrid');

    try {
        const response = await fetch('https://gnews.io/api/v4/top-headlines?category=technology&lang=en&country=us&max=10&apikey=847156a67ead5e89cf897a3159ba573f');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.articles?.length > 0) {
            displayArticles(data.articles);
        } else {
            throw new Error('No articles found');
        }
    } catch (error) {
        console.error('API Fetch Failed:', error.message);
        displayArticles(defaultNews);
    }
}

function displayArticles(articles) {
    const newsGrid = document.getElementById('newsGrid');
    newsGrid.innerHTML = '';

    articles.slice(0, 4).forEach(article => {
        const card = document.createElement('div');
        card.className = 'news-card';

        const imageUrl = article.image || '/api/placeholder/400/320';
        const title = article.title || 'Untitled Article';
        const description = article.description || 'No description available';
        const url = article.url || '#';

        card.innerHTML = `
            <img 
                src="${imageUrl}" 
                alt="${title}" 
                class="news-image"
                onerror="this.src='/api/placeholder/400/320'"
            >
            <div class="news-content">
                <h3 class="news-title">${title}</h3>
                <p class="news-description">${description}</p>
                <a href="${url}" target="_blank" class="read-more">Read More</a>
            </div>
        `;

        newsGrid.appendChild(card);
    });
}

// Initial load
window.addEventListener('DOMContentLoaded', () => {
    fetchTechNews();
});

// Refresh every 5 minutes (300,000 ms)
setInterval(fetchTechNews, 300000);
