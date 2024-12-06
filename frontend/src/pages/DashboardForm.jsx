import React, { useState } from 'react';
import InputSection from "../components/InputSection";
import {toast} from "react-toastify";
import Button from "../components/Button";


const DashboardForm = () => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [title, setTitle] = useState('');
    const [cv, setCv] = useState(null);
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');

    const colors = ['#4CAF50', '#FF5252', '#9C27B0', '#03A9F4', '#FFC107', '#8BC34A'];

    const handleSubmit = () => {
        // Valider et afficher les données (ou envoyer au backend)
        console.log('Couleur:', selectedColor);
        console.log('Titre:', title);
        console.log('CV:', cv ? cv.name : 'Aucun fichier');
        console.log('Image:', image ? image.name : 'Aucune image');
        console.log('Description:', description);

        if (!selectedColor || !title || !cv || !image || !description) {
            toast.error('Veuillez remplir tous les champs avant de continuer.');
            return;
        }

        toast.success('Portfolio configuré avec succès !');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-6 bg-white rounded-md shadow-lg space-y-6">
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Configurez votre portfolio
                </h2>

                {/* Choix de couleur */}
                <InputSection
                    label="Choisissez une couleur"
                    type="color"
                    options={colors}
                    value={selectedColor}
                    onChange={setSelectedColor}
                />

                {/* Titre */}
                <InputSection
                    label="Titre du portfolio"
                    type="text"
                    placeholder="Entrez le titre de votre portfolio"
                    value={title}
                    onChange={setTitle}
                />

                {/* Upload CV */}
                <InputSection
                    label="Télécharger votre CV"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    value={cv}
                    onChange={setCv}
                />

                {/* Upload image personnelle */}
                <InputSection
                    label="Télécharger votre image personnelle"
                    type="file"
                    accept="image/*"
                    value={image}
                    onChange={setImage}
                />

                {/* Description */}
                <InputSection
                    label="Ajoutez une description"
                    type="textarea"
                    placeholder="Décrivez-vous en quelques lignes"
                    value={description}
                    onChange={setDescription}
                />

                {/* Bouton de soumission */}
                <Button type="submit" disabled={false} onClick={handleSubmit}>
                    {"Envoyer"}
                </Button>
            </div>
        </div>
    );
};

export default DashboardForm;
