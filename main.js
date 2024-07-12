// Fonction pour soumettre le quiz
function submitQuiz() {
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);
    let score = 0;

    // Vérifier les réponses et calculer le score
    formData.forEach((value, key) => {
        if (key === 'q1' && value === 'Paris') {
            score++;
        }
        if (key === 'q2' && value === 'Mercure') {
            score++;
        }
        if (key === 'q3' && value === 'Océan Pacifique') {
            score++;
        }
    });

    // Afficher le score
    alert(`Quiz terminé!\nVotre score est de ${score}/3`);
}