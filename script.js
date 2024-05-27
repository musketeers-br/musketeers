const contests = [
    {
        "name": "Iris-MediCoPilot",
        "url": "https://openexchange.intersystems.com/package/iris-medicopilot",	
        "img": "assets/apps/medicopilot-cover.jpg",
        "awards": ["expert-2", "community-1"],
        "subtitle": "This project was second place of InterSystems Vector Search, GenAI and ML Contest",
        "description": `Iris-MediCoPilot, is designed to optimize patient clinical outcomes by reducing hospitalization time and supporting the development of resident and novice physicians. Additionally, it contributes to reducing financial waste in the healthcare system by improving the monitoring of pregnant patients, thereby decreasing risks and enhancing their safety.
        To achieve this, patients can conveniently describe their symptoms through a user-friendly Telegram bot. The project then leverages a comprehensive medical database to analyze the information. Additionally, the bot strategically asks clarifying questions to gather further details and refine the potential diagnosis. If the Iris-MediCoPilot identifies a potential health risk, it will advise the patient to seek medical attention at a hospital. Furthermore, the conversation history is automatically forwarded to a doctor acting as a “co-pilot” or “sidekick,” providing valuable insights to support physician decision-making.
        `
    },
    {
        "name": "Iris-FHIRfy",	
        "url": "https://openexchange.intersystems.com/package/iris-fhirfy",
        "img": "assets/apps/fhirfy.png",
        "awards": ["expert-1", "community-1"],
        "subtitle": "This project is the winner of InterSystems FHIR and Digital Health Interoperability Contest",
        "description": ` IRIS-FHIRfy is an innovative healthcare application designed to simplify and enhance the integration of healthcare data. Leveraging the FHIR (Fast Healthcare Interoperability Resources) standard, it ensures seamless, reliable, and efficient data exchange between various healthcare systems. This tool is especially beneficial for developers, offering a developer-friendly interface, scalability, and rapid development cycles.
        IRIS-FHIRfy stands out as a comprehensive tool for FHIR-based healthcare data integration, streamlining processes and empowering developers to focus on innovation. The project invites feedback to refine its models and improve outcomes, contributing to the evolution of healthcare technology.
        `
    },
    {
        "name": "Iris-FHIR Generative AI",
        "url": "https://openexchange.intersystems.com/package/iris-fhir-generative-ai",
        "img": "assets/apps/fhirgenai.png",
        "awards": ["expert-1", "community-1"],
        "subtitle": "This project is the winner of InterSystems Grand Prix 2023",
        "description": `FHIR Generative AI harnesses the capabilities of generative AI models, specifically using OpenAI's APIs, to automate the process of transforming and querying healthcare data in the FHIR (Fast Healthcare Interoperability Resources).
        This innovative project showcases the potential of AI to streamline and enhance healthcare data management.
        `
    },
    {
        "name": "Iris-TripleSlash",
        "url": "https://openexchange.intersystems.com/package/iris-tripleslash",
        "img": "assets/apps/tripleslash.png",
        "awards": ["community-1"],
        "subtitle": "Community choice of InterSystems Developer Tools Contest",
        "description": `TripleSlash makes unit testing more accessible and less burdensome for developers, transforming testing into an integral part of the coding process. By embedding examples directly into documentation, it enhances both the quality of the codebase and the developer experience.
        This tool is designed to make testing less tedious and more integrated into the development workflow.`
    },
    {
        "name": "Pregnancy-Symptoms-Tracker",
        "url": "https://openexchange.intersystems.com/package/Pregnancy-Symptoms-Tracker",
        "img": "assets/apps/pst.png",
        "awards": ["expert-2", "community-1"],
        "subtitle": "Second place of InterSystems IRIS for Health Contest: FHIR for Women's Health",
        "description": ``
    },
    {
        "name": "Iris-Megazord",
        "url": "https://openexchange.intersystems.com/package/iris-megazord",
        "img": "assets/apps/megazord.png",
        "awards": ["expert-3", "community-1","expert-3", "community-1"],
        "subtitle": "Two times Community choice and third place on InterSystems Interoperability Contest and Grand-Prix 2022",
        "description": ``
    }
];

const menuLinks = document.querySelectorAll('nav a');

menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.getElementById(event.target.getAttribute('href').slice(1));
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

window.onload = (event) => {
    const portfolio = document.getElementById('portfolio'),
        colors = ['blue', 'red', 'green'];
    let k = 0;
    contests.forEach(contest => {
        const card = document.createElement('div');
        card.classList.add('projcard');
        card.classList.add('projcard-'+colors[k]);
        k = (k+1)%3;
        let awards = '';
        contest.awards.forEach(award => {
            awards += `<div><img src="https://openexchange.intersystems.com/assets/img/rewards/${award}.svg" alt="${award}"></div>`;
        });
        card.innerHTML = `
            <div class="projcard-innerbox">
                <img class="projcard-img" src="${contest.img}" />
                <div class="projcard-textbox">
                    <div class="projcard-title">${contest.name}</div>
                    <div class="projcard-subtitle">${contest.subtitle}</div>
                    <div class="projcard-bar"></div>
                    <div class="projcard-description">${contest.description}</div>
                    <div class="projcard-awards">${awards}
                    </div>
                </div>
            </div> 
        `;

        card.addEventListener('click', (event) => {
            window.open(contest.url,"");
        });
        portfolio.appendChild(card);
    });
};