document.addEventListener('DOMContentLoaded', function() {
    const frameworks = [
        "Python", "REACT", "Flutter", "Bootstrap", "Flask",
        "JavaScript", "HTML", "CSS", "MIPS", "Java",
        "SQL", "PHP", "R", "C++", "Dart",
        "Docker", "Jira", "Prometheus", "AWS", "Azure",
        "GCP", "Trello", "Kubernetes", "Terraform", "Heroku",
        "Jenkins", "Git", "Grafana", "Wireshark", "Postman",
        "Tensorflow", "Bash"
    ];

    const grid = document.querySelector('.grid');

    // Generate grid cells dynamically
    frameworks.forEach((framework, index) => {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');

        const img = document.createElement('img');
        img.src = `program-logos/${index + 1}.png`; // 1.png for Python, etc.
        img.alt = framework;

        // Add framework name tooltip
        const nameTag = document.createElement('div');
        nameTag.classList.add('framework-name');
        nameTag.textContent = framework;

        cell.appendChild(img);
        cell.appendChild(nameTag);
        grid.appendChild(cell);
    });
});

// Back Button Function
function goBack() {
    window.location.href = "programmer.html";
}