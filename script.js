const environments = [
    { name: "Sala de Aula 4", status: "occupied" },
    { name: "Laboratório de Informática 1", status: "free" },
    { name: "Sala de Professores", status: "maintenance" },
];

function renderEnvironments() {
    const container = document.getElementById('environments');
    container.innerHTML = '';

    environments.forEach(env => {
        const envDiv = document.createElement('div');
        envDiv.className = `environment ${env.status}`;
        envDiv.innerHTML = `${env.name}<br><span>${getStatusText(env.status)}</span>`;
        container.appendChild(envDiv);
    });
}

function getStatusText(status) {
    switch (status) {
        case 'occupied':
            return 'Ocupado 🧑‍🎓';
        case 'free':
            return 'Livre ✅';
        case 'maintenance':
            return 'Manutenção 🔧';
        default:
            return '';
    }
}

document.addEventListener('DOMContentLoaded', renderEnvironments);