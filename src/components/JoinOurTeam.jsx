import React from 'react';

export default function JoinOurTeam() {
  return (
    <div className="w-full bg-gradient-to-b from-white to-blue-50 h-[calc(100vh-64px)]">
      {/* Container que ocupa toda la altura */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
          
          {/* Columna de texto */}
          <div className="flex flex-col justify-center space-y-16 px-8 md:px-12 py-10 max-w-2xl mx-auto">
            <div className="space-y-3">
              <h2 className="text-4xl font-bold text-blue-900 tracking-tight leading-tight">
                Trabaja con nosotros
              </h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
            </div>
            
            <div className="space-y-16">
              <div>
                <h3 className="text-3xl font-semibold text-blue-800 mb-3">
                  Nuestra cultura
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  "Somos Imparables" y al interior de nuestros equipos reconocemos y promovemos
                  principios y valores con los cuales aprendemos, crecemos y nos ayudamos entre todos.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                  Únete al team #Unstoppables
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Te estamos buscando. ¿Qué esperas para potenciar tu energía y seguir
                  rompiéndola profesionalmente?
                </p>
              </div>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg w-fit mt-6">
              Ver vacantes
            </button>
          </div>

          {/* Columna de la imagen (h-full para ocupar toda la altura) */}
          <div
            className="w-full h-full bg-cover bg-center rounded-lg hidden md:block"
            style={{
              backgroundImage: "url(/images/business-woman.jpg)",
            }}
          />
        </div>
    
    </div>
  );
}
