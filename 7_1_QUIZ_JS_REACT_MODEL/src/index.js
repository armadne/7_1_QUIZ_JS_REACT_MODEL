import React, { useState } from 'react'; // Importation de React et de la fonction useState depuis la bibliothèque 'react'
import ReactDOM from 'react-dom'; // Importation de ReactDOM depuis la bibliothèque 'react-dom'

// Définition des données des questions du quiz sous forme d'un tableau d'objets
const questionsData = [
  {
    question: 'Quelle est la capitale de la France ?', // Texte de la première question
    options: ['Paris', 'Londres', 'Berlin', 'Rome'], // Options de réponse pour la première question
    answer: 'Paris' // Réponse correcte pour la première question
  },
  {
    question: 'Quel est le plus grand océan du monde ?', // Texte de la deuxième question
    options: ['Océan Atlantique', 'Océan Pacifique', 'Océan Indien', 'Océan Arctique'], // Options de réponse pour la deuxième question
    answer: 'Océan Pacifique' // Réponse correcte pour la deuxième question
  },
  {
    question: 'Combien de continents y a-t-il sur Terre ?', // Texte de la troisième question
    options: ['Quatre', 'Cinq', 'Six', 'Sept'], // Options de réponse pour la troisième question
    answer: 'Sept' // Réponse correcte pour la troisième question
  }
];

// Définition du composant fonctionnel QuizApp
const QuizApp = () => {
  // Déclaration des états locaux pour suivre l'index de la question actuelle, le score et l'affichage du score final
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);


  // Fonction de gestion de la sélection d'une réponse
  const handleAnswerButtonClick = (selectedOption) => {

    // Vérification si la réponse sélectionnée est correcte
    if (selectedOption === questionsData[currentQuestionIndex].answer) {
      // Si la réponse est correcte, incrémenter le score de 1
      setScore(score + 1);
    }

    // Passage à la prochaine question en incrémentant l'index de la question actuelle
    const nextQuestionIndex = currentQuestionIndex + 1;

    // Si on est pas a la derniere question alors on peut incrementer de 1 est passer a la prochaine question jusqu'a la derniere
    if (nextQuestionIndex < questionsData.length) {

      // Avance a la prochaine question du coup on affiche la prochaine question et reponses du coup il y a une modif dans la liste des questions c'est pour sa on utilise SetCurrentQuestionIndex(NextQuestionIndex)
      setCurrentQuestionIndex(nextQuestionIndex);
    } 
    
    else 
    
    {
      // Si toutes les questions ont été répondues, afficher le score final
      setShowScore(true);
    }
  };

  // Fonction pour recommencer le quiz
  const restartQuiz = () => {
    // Réinitialisation de l'index de la question actuelle, du score et de l'affichage du score final
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  // Rendu de l'interface utilisateur
  return (
    <div className="quiz-app">
      {/* Condition pour afficher le score final ou la question actuelle */}
      {showScore ? (

        <div className="score-section">
          {/* Affichage du score final */}


          {/* Affiche un score sur le nombre de question exemple 1 bonne reponse sur 3 donc 1/3*/}
          <h2>Votre score est de {score}/{questionsData.length}</h2>

          {/* Bouton pour recommencer le quiz */}
          <button onClick={restartQuiz}>Recommencer</button>

        </div>

      ) : (
        <div className="question-section">

          {/* Affichage du numéro de la question actuelle */}

          <h2>Question {currentQuestionIndex + 1}/{questionsData.length}</h2>

          {/* Affichage du texte de la question actuelle */}

          <div className="question-text">{questionsData[currentQuestionIndex].question}</div>

          {/* Affichage des options de réponse de la question actuelle sous forme de boutons */}
          <div className="options">

            {questionsData[currentQuestionIndex].options.map((option, index) => (
              
              <button key={index} onClick={() => handleAnswerButtonClick(option)}>{option}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Rendu du composant QuizApp dans le DOM

ReactDOM.render(<QuizApp />, document.getElementById('root'));
