import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import InputField from "../components/InputField";
import Button from "../components/Button";
import AuthLayout from "../components/AuthLayout";
import FormBouton from "../components/FormBouton";
import LinkText from "../components/LinkText";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Vérifier si les mots de passe correspondent
        if (formData.password !== formData.confirmPassword) {
            toast.error('Les mots de passe ne correspondent pas !');
            return;
        }

        // Afficher les données d'inscription dans la console (pour le débogage)
        //console.log('Données d\'inscription :', formData);


        try {
            const response = await fetch('http://192.168.214.110:5001/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${formData.lastName} ${formData.firstName}`,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);

                if (data.success) {
                    // Afficher un message de succès si l'inscription est réussie
                    toast.success('Inscription réussie !');
                } else {
                    // Afficher un message d'erreur si les données sont invalides
                    toast.error('Erreur lors de l\'inscription : ' + (data.message || 'Données invalides.'));
                }
            } else {
                // Récupérer les détails d'erreur du serveur
                const errorData = await response.json();
                toast.error('Erreur côté serveur : ' + (errorData.message || 'Veuillez réessayer.'));
            }
        } catch (error) {
            // Gérer les erreurs réseau ou autres
            console.error('Erreur réseau ou interne :', error);
            toast.error('Une erreur inattendue est survenue. Veuillez vérifier votre connexion et réessayer.');
        }

    };

    return (
        <AuthLayout title={'Créer un compte:'}>
                <FormBouton onSubmit={handleSubmit}
                            buttonText="Enregistrer"
                            isSubmitting={isSubmitting}
                            className="space-y-4">
                    <div className="flex gap-4">
                        <InputField
                            label={'First Name'}
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeHolder="Entrer votre prénom"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <InputField
                            label={'Last Name'}
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeHolder="Entrer votre nom"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <InputField
                        label="Email"
                        id="email"
                        name="email"
                        placeHolder={'entrez votre email...'}
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <InputField
                        label="Mot de passe"
                        id="password"
                        name="password"
                        placeHolder={'Entrez un mot de passe fort...'}
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <InputField
                        label="Confirmer le mot de passe"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeHolder={'Confirmer le mot de passe.'}
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </FormBouton>
            <LinkText
                text="Vous avez déjà un compte ?"
                linkText="Se connecter"
                to="/login"
                className="text-gray-600"
                linkClassName="text-blue-500"
            />
        </AuthLayout>
    );
};

export default RegisterPage;
