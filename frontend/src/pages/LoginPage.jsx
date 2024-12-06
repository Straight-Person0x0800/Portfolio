import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import InputField from "../components/InputField";
import FormBouton from "../components/FormBouton";
import AuthLayout from "../components/AuthLayout";
import LinkText from "../components/LinkText";

const LoginPage = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsSubmitting(true);

            const response = await fetch('localhost:5001/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    toast.success('Connexion réussie !');
                    navigate('/home');
                } else {
                    toast.error('Email ou mot de passe incorrect');
                }
            } else {
                toast.error('Erreur côté serveur, veuillez réessayer.');
            }
        } catch (error) {
            console.error('Erreur:', error);
            toast.error('Une erreur est survenue, veuillez vérifier votre connexion.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AuthLayout title={'Se connecter:'}>
            {/* Affichage de l'erreur */}
            {errorMessage && (
                <div className="p-4 text-sm text-red-700 bg-red-100 border border-red-400 rounded">
                    {errorMessage}
                </div>
            )}

            {/* Utilisation de FormBouton */}
            <FormBouton
                onSubmit={handleSubmit}
                buttonText="Se connecter"
                isSubmitting={isSubmitting}
                className="space-y-4"
            >
                <InputField
                    label={'Email:'}
                    type="email"
                    id="email"
                    name="email"
                    placeHolder={'test@test.com'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <InputField
                    label={'Mot de passe:'}
                    type="password"
                    id="password"
                    name="password"
                    placeHolder={'ABcdef123@#'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormBouton>

            <LinkText
                text="Vous n'avez pas de compte ?"
                linkText="Inscrivez-vous"
                to="/register"
                className=""
                linkClassName="text-blue-500"
            />
        </AuthLayout>
    );
};

export default LoginPage;
