import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { id: 1, src: '/images/image1.jpg', alt: 'Modèle 1' },
        { id: 2, src: '/images/image2.jpeg', alt: 'Modèle 2' },
        { id: 3, src: '/images/image3.png', alt: 'Modèle 3' },
        { id: 4, src: '/images/image4.png', alt: 'Modèle 4' },
        { id: 5, src: '/images/image5.png', alt: 'Modèle 5' },
        { id: 6, src: '/images/image6.jpeg', alt: 'Modèle 6' },
    ];

    const handleSelectImage = (id) => {
        setSelectedImage(id);
    };

    const handleSubmit = async () => {
        if (!selectedImage) {
            toast.error('Veuillez sélectionner un modèle.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/save-model', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ modelId: selectedImage }),
            });

            if (response.ok) {
                toast.success('Modèle enregistré avec succès !');
            } else {
                toast.error('Une erreur est survenue, veuillez réessayer.');
            }
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement :', error);
            toast.error('Une erreur est survenue, vérifiez votre connexion.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold text-center mb-8">Choisissez votre modèle</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className={`p-4 border rounded-lg cursor-pointer ${
                            selectedImage === image.id ? 'border-blue-500' : 'border-gray-300'
                        }`}
                        onClick={() => handleSelectImage(image.id)} // Clic sur le conteneur de l'image
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-48 object-cover rounded-md"
                        />
                        <button
                            onClick={(e) => {
                                e.stopPropagation(); // Évite que le clic sur le bouton déclenche l'événement du conteneur
                                handleSelectImage(image.id);
                            }}
                            className={`mt-4 w-full px-4 py-2 text-white font-medium rounded-md ${
                                selectedImage === image.id ? 'bg-blue-600' : 'bg-gray-500 hover:bg-gray-600'
                            }`}
                        >
                            {selectedImage === image.id ? 'Sélectionné' : 'Sélectionner'}
                        </button>
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                <button
                    onClick={handleSubmit}
                    className="px-6 py-3 text-white bg-green-500 rounded-md hover:bg-green-600 focus:ring focus:ring-green-300"
                >
                    Confirmer
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
