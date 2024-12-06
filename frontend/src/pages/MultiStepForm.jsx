import React, { useState } from 'react';
import InputSection from "../components/InputSection";


const MultiStepForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [selectedColor, setSelectedColor] = useState(null);
    const [image, setImage] = useState(null);
    const [cv, setCv] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const colors = ['#4CAF50', '#FF5252', '#9C27B0', '#03A9F4', '#FFC107', '#8BC34A'];

    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const handlePrevious = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = () => {
        // Validation finale et affichage des données
        console.log('Couleur:', selectedColor);
        console.log('Image:', image ? image.name : 'Aucune image');
        console.log('CV:', cv ? cv.name : 'Aucun fichier');
        console.log('Titre:', title);
        console.log('Description:', description);

        if (!selectedColor || !image || !cv || !title || !description) {
            alert('Veuillez remplir tous les champs avant de continuer.');
            return;
        }

        alert('Portfolio configuré avec succès !');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-6 bg-white rounded-md shadow-lg space-y-6">
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Configurez votre portfolio : Étape {activeStep + 1}/5
                </h2>

                {/* Étapes conditionnelles */}
                {activeStep === 0 && (
                    <InputSection
                        label="Choisissez une couleur"
                        type="color"
                        options={colors}
                        value={selectedColor}
                        onChange={(value) => {
                            setSelectedColor(value);
                            handleNext(); // Passer automatiquement à l'étape suivante
                        }}
                    />
                )}

                {activeStep === 1 && (
                    <InputSection
                        label="Télécharger votre image personnelle"
                        type="file"
                        accept="image/*"
                        value={image}
                        onChange={(file) => {
                            setImage(file);
                            handleNext();
                        }}
                    />
                )}

                {activeStep === 2 && (
                    <InputSection
                        label="Télécharger votre CV"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        value={cv}
                        onChange={(file) => {
                            setCv(file);
                            handleNext();
                        }}
                    />
                )}

                {activeStep === 3 && (
                    <InputSection
                        label="Titre du portfolio"
                        type="text"
                        placeholder="Entrez le titre de votre portfolio"
                        value={title}
                        onChange={(value) => {
                            setTitle(value);
                            handleNext();
                        }}
                    />
                )}

                {activeStep === 4 && (
                    <InputSection
                        label="Ajoutez une description"
                        type="textarea"
                        placeholder="Décrivez-vous en quelques lignes"
                        value={description}
                        onChange={(value) => setDescription(value)}
                    />
                )}

                {/* Boutons de navigation */}
                <div className="flex justify-between">
                    {activeStep > 0 && (
                        <button
                            onClick={handlePrevious}
                            className="px-4 py-2 font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
                        >
                            Précédent
                        </button>
                    )}

                    {activeStep < 4 && (
                        <button
                            onClick={handleNext}
                            className="px-4 py-2 font-medium text-blue-500 bg-blue-100 rounded-md hover:bg-blue-200 focus:outline-none"
                            disabled={activeStep === 0 && !selectedColor}
                        >
                            Suivant
                        </button>
                    )}

                    {activeStep === 4 && (
                        <button
                            onClick={handleSubmit}
                            className="px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            Terminer
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MultiStepForm;
