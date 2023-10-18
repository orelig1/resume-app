import React from 'react';

function Experience() {
  return (
    <div>
      <h1>Experiences</h1>
      <div className="experience-item">
        <h2>Programmeuse Junior - LcgSolution</h2>
        <p>1 juin 2023 - Aujourd'hui</p>
        <p>Debbuger en Vuex</p>
        <p>Transférer le code Vuex en React</p>
      </div>
      <hr/>
      <div className="experience-item">
        <h2>Associée aux ventes - Tony Pappas</h2>
        <p>1 juin 2020 - 15 août 2022</p>
        <p>Conseillère en vente</p>
      </div>
      {/* Add more experience items as needed */}
    </div>
  );
}

export default Experience;
