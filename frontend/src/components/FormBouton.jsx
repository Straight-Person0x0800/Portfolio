import React from 'react';
import Button from './Button';

const FormBouton = ({ onSubmit, children, buttonText, isSubmitting, className = '' }) => {
    return (
        <form
            onSubmit={onSubmit}
            className={`space-y-4 ${className}`}
        >
            {/* Contenu du formulaire (inputs, labels, etc.) */}
            {children}
            {/* Bouton de soumission */}
            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Chargement...' : buttonText}
            </Button>
        </form>
    );
};

export default FormBouton;
