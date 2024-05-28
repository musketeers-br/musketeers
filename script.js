const contests = [
    {
        "name": "Iris-MediCoPilot",
        "url": "https://openexchange.intersystems.com/package/iris-medicopilot",	
        "img": "assets/apps/medicopilot.png",
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
    },
    {
        "name": "kaggle-socrata-generator",
        "url": "https://openexchange.intersystems.com/package/iris-kaggle-socrata-generator",
        "img": "assets/apps/socrata.png",
        "awards": ["expert-2", "community-1"],
        "subtitle": "Second place on InterSystems Datasets Contest",
        "description": ``
    },
    {
        "name": "Iris-Disguise",
        "url": "https://openexchange.intersystems.com/package/iris-disguise",
        "img": "assets/apps/disguise.png",
        "awards": ["expert-1", "community-2"],
        "subtitle": "First place on InterSystems Security Contest",
        "description": `Iris-Disguise is a data anonymization tool. 
        It helps protect privacy by removing personally identifiable information (PII) from data sets. It offers different ways to anonymize data.`
    },
    {
        "name": "Zap API Scan",
        "url": "https://openexchange.intersystems.com/package/zap-api-scan-sample",
        "img": "assets/apps/zap.png",
        "awards": ["expert-2", "community-1"],
        "subtitle": "Second place on InterSystems Security Contest",
        "description": `The application helps developers validate the security of their REST APIs by scanning them with ZAP.
            Zap API Scan REST APIs searching for vulnerabilities.`
    },
    {
        "name": "Pop Song Analytics",
        "url": "https://openexchange.intersystems.com/package/pop-song-analytics",
        "img": "assets/apps/pop.png",
        "awards": ["expert-3"],
        "subtitle": "Third place on InterSystems IRIS Analytics",
        "description": `The project demonstrates using Iris for data storage and analysis, along with Power BI for creating insightful visualizations,
        using InterSystems Iris to analyze pop song data from Billboard Hot 100 between 2000 and 2018.`
    },
    {
        "name": "FHIR-Integratedml",
        "url": "https://openexchange.intersystems.com/package/fhir-integratedml-example",
        "img": "assets/apps/fihriml.png",
        "awards": ["expert-1", "community-1"],
        "subtitle": "Winner of Artificial Intelligence and Machine Learning Contest",
        "description": `FHIR-Integratedml utilizes InterSystems IRIS and FHIR (Fast Healthcare Interoperability Resources) for Machine Learning (ML) and Artificial Intelligence (AI) in healthcare.`
    },
    {
        "name": "Iris on FHIR",
        "url": "https://openexchange.intersystems.com/package/iris-on-fhir",
        "img": "assets/apps/fhirgen.png",
        "awards": ["expert-3", "community-1"],
        "subtitle": "Third place on InterSystems FHIR Accelerator Contest",
        "description": `InterSystems IRIS FHIR Accelerator Service (FHIRaaS) - a cloud-based solution for managing FHIR APIs.`
    },
    {
        "name": "ZPM Explorer",
        "url": "https://openexchange.intersystems.com/package/zpm-explorer",
        "img": "assets/apps/zpm.png",
        "awards": ["expert-2", "community-2"],
        "subtitle": "Second place on InterSystems Developer Tools Contest",
        "description": `ZPM Explorer is a graphical user interface for InterSystems Package Manager (ZPM). It helps users discover and manage InterSystems applications available through ZPM.
        Overall, ZPM Explorer simplifies the process of finding, installing, and managing InterSystems applications from the ZPM package repository.`
    },
    {
        "name": "IRIS RAD Studio",
        "url": "https://openexchange.intersystems.com/package/iris-rad-studio",
        "img": "assets/apps/rad.png",
        "awards": ["expert-2"],
        "subtitle": "Second place on the first InterSystems Grand Prix",
        "description": `IRIS RAD Studio it's a low-code solution that came to make the developer's life easier; Allowing everyone to create their CRUD based on a simple class definition or even a CSV file.
        `
    },
    {
        "name": "IRIS Image Index",
        "url": "https://openexchange.intersystems.com/package/iris-image-index-demo",
        "img": "assets/apps/iris-image-index.png",
        "awards": ["expert-3", "community-1"],
        "subtitle": "First place on InterSystems Multi-Model Contest",
        "description": `IRIS Image Index it's a custom image similarity index for InterSystems IRIS`
    },
    {
        "name": "IRIS-FHIR-Portal",
        "url": "https://openexchange.intersystems.com/package/iris-fhir-portal",
        "img": "assets/apps/fhirportal.png",
        "awards": ["expert-1", "community-1"],
        "subtitle": "Winner of InterSystems IRIS for Health FHIR",
        "description": `IRIS-FHIR-Portal is an application built using FHIR functionalities in InterSystems IRIS for Health. It allows users to easily access and view their patient data in a clear and organized manner. The application displays a patient list with filters, along with detailed information for each selected patient, including demographics, allergies, vital signs, laboratory results, and immunizations. It also provides a transparent view of all data retrieved from FHIR resources.`
    },
    {
        "name": "iris4health-fhir-analytics",
        "url": "https://openexchange.intersystems.com/package/iris4health-fhir-analytics",
        "img": "assets/apps/iris4health.png",
        "awards": ["expert-2", "community-2"],
        "subtitle": "Second place on InterSystems IRIS for Health FHIR",
        "description": `iris4health-fhir-analytics creates reusable chart components for visualizing data from FHIR resources in InterSystems IRIS for Health. The key feature is that these charts require no configuration. They automatically determine the data format based on the FHIR resource type (e.g., Observation) and property (e.g., code) to create a standardized data model. This model can then be easily adapted to work with any charting library,`
    },
    {
        "name": "iris-vaccine-tracker",
        "url": "https://openexchange.intersystems.com/package/iris-vaccine-tracker",
        "img": "assets/apps/vaccine.png",
        "awards": ["community-2"],
        "subtitle": "Second place by community nomination on InterSystems Multi-Model",
        "description": `This project has the intention to show COVID-19 vaccination track count around the world. Using as backend InterSystems IRIS in a multi-model schema.`
    },
    {
        "name": "iris-analytics-notebook",
        "url": "https://openexchange.intersystems.com/package/iris-analytics-notebook",
        "img": "assets/apps/notebook.png",
        "awards": ["expert-1", "community-2"],
        "subtitle": "First place on InterSystems Analytics",
        "description": `A notebook approach to use IRIS analytics capabilities.`
    },
    {
        "name": "iris-analytics-package",
        "url": "https://openexchange.intersystems.com/package/iris-analytics-package",
        "img": "assets/apps/analypack.png",
        "awards": ["expert-3", "community-1"],
        "subtitle": "Third place on InterSystems Analytics",
        "description": `This project has the intention to show a basic approach using the Analytics capabilities of InterSystems IRIS.
            Especially for those who already using InterSystems IRIS, but without taking advantage of Analytics. The idea is to prove how simple it is.`
    },
    {
        "name": "IRIS Interoperability Message Viewer",
        "url": "https://openexchange.intersystems.com/package/IRIS-Interoperability-Message-Viewer",
        "img": "assets/apps/interop.png",
        "awards": ["expert-2", "expert-3", "community-1", "community-2"],
        "subtitle": "Winner of InterSystems Interoperability Contest",
        "description": `IRIS Interoperability Message Viewer reimagines the existing Visual Trace tool for InterSystems data integration. `
    }
];

console.log(contests.length);

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
                <div class="card-img">
                    <img class="projcard-img" src="${contest.img}" />
                </div>
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