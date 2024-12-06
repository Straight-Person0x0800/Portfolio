-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : db
-- Généré le : mar. 26 nov. 2024 à 16:01
-- Version du serveur : 8.3.0
-- Version de PHP : 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `mydatabase`
--

-- --------------------------------------------------------

--
-- Structure de la table `about_styles`
--

CREATE TABLE `about_styles` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `value` json NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `contact_styles`
--

CREATE TABLE `contact_styles` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `value` json NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `nav_styles`
--

CREATE TABLE `nav_styles` (
  `id` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  `value` json NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `nav_styles`
--

INSERT INTO `nav_styles` (`id`, `name`, `value`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'modern navigation', '{\"image\": \"w-56 h-56 md:w-72 md:h-72 object-cover rounded-lg shadow-lg\", \"title\": \"text-4xl font-extrabold text-center text-indigo-600\", \"section\": \"min-h-screen flex items-center justify-center py-16 bg-indigo-50\", \"subtitle\": \"text-2xl md:text-3xl font-semibold\", \"container\": \"container mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-8\", \"description\": \"text-md text-gray-500 leading-relaxed\", \"textContainer\": \"flex flex-col justify-start items-start space-y-4\", \"imageContainer\": \"flex justify-center mt-6 md:mt-2\"}', '2024-11-26 15:59:34', '2024-11-26 15:59:34', NULL),
(2, 'classic navigation', '{\"image\": \"w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-sm\", \"title\": \"text-2xl font-bold text-left\", \"section\": \"min-h-screen flex items-start justify-start py-12 bg-white\", \"subtitle\": \"text-lg font-medium\", \"container\": \"container mx-auto px-6 grid grid-cols-1 gap-4\", \"description\": \"text-sm text-gray-400\", \"textContainer\": \"flex flex-col justify-center items-start space-y-2\", \"imageContainer\": \"flex justify-end mt-10 md:mt-6\"}', '2024-11-26 15:59:47', '2024-11-26 15:59:47', NULL),
(3, 'creative navigation', '{\"image\": \"w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-indigo-300\", \"title\": \"text-5xl font-bold text-center text-indigo-800\", \"section\": \"min-h-screen flex items-center justify-center py-24 bg-gradient-to-br from-indigo-200 to-indigo-400\", \"subtitle\": \"text-4xl font-extrabold italic\", \"container\": \"container mx-auto px-10 grid grid-cols-2 gap-12\", \"description\": \"text-base text-gray-800 tracking-wide\", \"textContainer\": \"flex flex-col justify-start items-start space-y-8\", \"imageContainer\": \"flex justify-start mt-6 animate-bounce\"}', '2024-11-26 16:00:05', '2024-11-26 16:00:05', NULL),
(4, 'minimalist navigation', '{\"image\": \"w-40 h-40 md:w-56 md:h-56 object-cover rounded-lg\", \"title\": \"text-2xl font-medium text-left text-gray-700\", \"section\": \"min-h-screen flex items-center justify-center py-14 bg-gray-50\", \"subtitle\": \"text-lg font-normal\", \"container\": \"container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 gap-4\", \"description\": \"text-xs text-gray-500\", \"textContainer\": \"flex flex-col justify-center items-center space-y-3\", \"imageContainer\": \"flex justify-center mt-5 md:mt-4\"}', '2024-11-26 16:00:16', '2024-11-26 16:00:16', NULL),
(5, 'professional navigation', '{\"image\": \"w-60 h-60 md:w-80 md:h-80 object-cover rounded shadow-xl\", \"title\": \"text-3xl font-bold text-center text-gray-900\", \"section\": \"min-h-screen flex items-center justify-between py-20 bg-gray-200\", \"subtitle\": \"text-xl font-semibold text-gray-700\", \"container\": \"container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-10\", \"description\": \"text-base text-gray-600\", \"textContainer\": \"flex flex-col justify-between items-start space-y-5\", \"imageContainer\": \"flex justify-end mt-8\"}', '2024-11-26 16:00:27', '2024-11-26 16:00:27', NULL),
(6, 'vibrant navigation', '{\"image\": \"w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-pink-500 shadow-md\", \"title\": \"text-4xl font-extrabold text-center text-pink-600\", \"section\": \"min-h-screen flex items-center justify-center py-16 bg-pink-100\", \"subtitle\": \"text-2xl font-semibold italic\", \"container\": \"container mx-auto px-6 grid grid-cols-2 gap-6\", \"description\": \"text-lg text-gray-700\", \"textContainer\": \"flex flex-col justify-center items-center space-y-4\", \"imageContainer\": \"flex justify-start mt-8 animate-pulse\"}', '2024-11-26 16:00:38', '2024-11-26 16:00:38', NULL),
(7, 'dark navigation', '{\"image\": \"w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-black\", \"title\": \"text-4xl font-bold text-center text-gray-100\", \"section\": \"min-h-screen flex items-center justify-center py-18 bg-gray-900\", \"subtitle\": \"text-3xl font-light text-gray-400\", \"container\": \"container mx-auto px-10 grid grid-cols-1 md:grid-cols-3\", \"description\": \"text-md text-gray-300\", \"textContainer\": \"flex flex-col justify-center items-center space-y-6 mt-8\", \"imageContainer\": \"flex justify-center mt-6 animate-float\"}', '2024-11-26 16:00:48', '2024-11-26 16:00:48', NULL),
(8, 'elegant navigation', '{\"image\": \"w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-2 border-gray-200 shadow-sm\", \"title\": \"text-3xl font-bold text-center text-gray-800\", \"section\": \"min-h-screen flex items-center justify-center py-14 bg-gray-100\", \"subtitle\": \"text-xl font-normal text-gray-500\", \"container\": \"container mx-auto px-6 grid grid-cols-1 gap-4\", \"description\": \"text-sm text-gray-400\", \"textContainer\": \"flex flex-col justify-center items-center space-y-2\", \"imageContainer\": \"flex justify-center mt-8 md:mt-6\"}', '2024-11-26 16:00:58', '2024-11-26 16:00:58', NULL),
(9, 'tech navigation', '{\"image\": \"w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg\", \"title\": \"text-3xl md:text-4xl font-bold text-center text-teal-500\", \"section\": \"min-h-screen flex items-center justify-center py-20 bg-teal-100\", \"subtitle\": \"text-3xl md:text-4xl font-bold text-teal-600\", \"container\": \"container mx-auto px-4 grid grid-cols-1 md:grid-cols-2\", \"description\": \"text-lg text-gray-600\", \"textContainer\": \"flex flex-col justify-center items-center space-y-6 mt-8\", \"imageContainer\": \"flex justify-center mt-12 md:mt-0 animate-float\"}', '2024-11-26 16:01:07', '2024-11-26 16:01:07', NULL),
(10, 'luxury navigation', '{\"image\": \"w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-8 border-gold shadow-xl\", \"title\": \"text-5xl font-black text-center text-gold-500\", \"section\": \"min-h-screen flex items-center justify-center py-20 bg-gradient-to-r from-gold-50 to-gold-200\", \"subtitle\": \"text-4xl font-semibold italic text-gold-700\", \"container\": \"container mx-auto px-12 grid grid-cols-1 lg:grid-cols-3 gap-8\", \"description\": \"text-xl text-gray-700\", \"textContainer\": \"flex flex-col justify-center items-start space-y-10\", \"imageContainer\": \"flex justify-start mt-16\"}', '2024-11-26 16:01:15', '2024-11-26 16:01:15', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `PortfolioManagers`
--

CREATE TABLE `PortfolioManagers` (
  `id` bigint NOT NULL,
  `user_id` int NOT NULL,
  `portfolio_id` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `url` varchar(255) DEFAULT '',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `section_styles`
--

CREATE TABLE `section_styles` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `value` json NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('student','admin') NOT NULL DEFAULT 'student',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Yasser', 'admin@gmail.com', '$2a$10$EnT9VAoWMDcSX/ZWH4p3u.InhWzmHdrNB0PMZFVnd6Mq/mH82x.eO', 'admin', '2024-11-26 15:53:04', '2024-11-26 15:53:04', NULL),
(2, 'User1', 'User1@gmail.com', '$2a$10$UYx8ojVCz8PVqd9yNH.FwOh/O1V..5zKx0yf6CSxXSxGcxed4koaG', 'student', '2024-11-26 15:53:34', '2024-11-26 15:53:34', NULL),
(3, 'User2', 'User2@gmail.com', '$2a$10$SNcE0AQV3tZgQCOvIYzXW.DcA0d4hR2oUEiOOVMGkXqooJ.O2Z/D6', 'student', '2024-11-26 15:53:48', '2024-11-26 15:53:48', NULL),
(4, 'User3', 'User3@gmail.com', '$2a$10$hDmUYmB/usfj4i7vIcEYG.YSyZG1zTcVVZctAPp/rN2yE1qMgU0e.', 'student', '2024-11-26 15:53:56', '2024-11-26 15:53:56', NULL),
(5, 'User4', 'User4@gmail.com', '$2a$10$XyBM3rAm/VEze5V0f11i4.7G4gmtXxO8xfHJ.eHcBAnAsohDwarS.', 'student', '2024-11-26 15:54:05', '2024-11-26 15:54:05', NULL),
(6, 'User5', 'User5@gmail.com', '$2a$10$50rp5H7TQBXutS.zVnzNsOxNdeWQ/r0cbbburfEFy.LbQ7h48duJq', 'student', '2024-11-26 15:54:12', '2024-11-26 15:54:12', NULL),
(7, 'User6', 'User6@gmail.com', '$2a$10$0lnduHW8NcxozPiaEAKW2ufmYoAjze7y4gJ2.ON.Xy21AiN/apyS6', 'student', '2024-11-26 15:54:21', '2024-11-26 15:54:21', NULL),
(8, 'User7', 'User7@gmail.com', '$2a$10$XvVLzVc.qAuuEgzBlMBtZe9jS5yvE7r/PKaVu4v1RoiUrM1WmZrR.', 'student', '2024-11-26 15:54:28', '2024-11-26 15:54:28', NULL),
(9, 'User8', 'User8@gmail.com', '$2a$10$WEXKnIlWEduPh.LLMbvShuU3H8M1YdRWuTVH1yNG3lwzkvWYFMhMG', 'student', '2024-11-26 15:54:35', '2024-11-26 15:54:35', NULL),
(10, 'User9', 'User9@gmail.com', '$2a$10$.JYhU3u0iQSkwDa3cIdhce.xC9VyrtmINp5iNFf4OHPFnC1UIxTnW', 'student', '2024-11-26 15:54:42', '2024-11-26 15:54:42', NULL),
(11, 'User10', 'User10@gmail.com', '$2a$10$MLzWI2AmjsoygshZo0fanuD0.bxIcOEy.qEjFEuLv/Y4UmAXB5abu', 'student', '2024-11-26 15:54:49', '2024-11-26 15:54:49', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `about_styles`
--
ALTER TABLE `about_styles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `contact_styles`
--
ALTER TABLE `contact_styles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `nav_styles`
--
ALTER TABLE `nav_styles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `PortfolioManagers`
--
ALTER TABLE `PortfolioManagers`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `section_styles`
--
ALTER TABLE `section_styles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `nav_styles`
--
ALTER TABLE `nav_styles`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `PortfolioManagers`
--
ALTER TABLE `PortfolioManagers`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
