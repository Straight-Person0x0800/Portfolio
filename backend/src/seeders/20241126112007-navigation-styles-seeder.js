"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const navStyles = [
      {
        name: "default-nav",
        value: JSON.stringify({
          section:
            "min-h-screen flex items-center justify-center py-20 bg-gray-100",
          container: "container mx-auto px-4 grid grid-cols-1 md:grid-cols-2",
          imageContainer: "flex justify-center mt-12 md:mt-0 animate-float",
          image:
            "w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-md",
          textContainer:
            "flex flex-col justify-center items-center space-y-6 mt-8",
          title: "text-3xl md:text-4xl font-bold text-center",
          subtitle: "text-3xl md:text-4xl font-bold",
          description: "text-lg text-gray-600",
        }),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "modern-nav",
        value: JSON.stringify({
          section:
            "h-screen flex flex-col items-center justify-center bg-white",
          container:
            "container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4",
          imageContainer: "hidden md:flex justify-center animate-spin",
          image: "w-72 h-72 rounded-lg shadow-lg",
          textContainer: "flex flex-col items-start space-y-4 mt-6",
          title: "text-2xl md:text-5xl font-extrabold text-gray-900",
          subtitle: "text-xl md:text-3xl font-medium text-gray-700",
          description: "text-base text-gray-500 leading-relaxed",
        }),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "minimal-nav",
        value: JSON.stringify({
          section: "flex items-center justify-between py-10 px-5 bg-gray-50",
          container: "container mx-auto flex justify-between items-center",
          imageContainer: "hidden lg:flex",
          image: "w-16 h-16 object-cover rounded-full",
          textContainer: "text-right",
          title: "text-xl font-semibold text-black",
          subtitle: "text-base text-gray-600",
          description: "hidden",
        }),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "dark-nav",
        value: JSON.stringify({
          section:
            "min-h-screen flex flex-col items-center justify-center bg-black text-white",
          container: "container mx-auto px-4 flex flex-col items-center",
          imageContainer: "flex justify-center mt-6 animate-bounce",
          image: "w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-white",
          textContainer: "text-center space-y-4",
          title: "text-4xl md:text-6xl font-bold",
          subtitle: "text-2xl md:text-4xl font-light",
          description: "text-sm text-gray-400",
        }),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "vibrant-nav",
        value: JSON.stringify({
          section:
            "h-full bg-gradient-to-r from-pink-500 to-yellow-500 flex items-center",
          container:
            "container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-6",
          imageContainer:
            "flex justify-center transform transition-transform hover:scale-105",
          image: "w-56 h-56 rounded-xl shadow-xl",
          textContainer: "flex flex-col space-y-5",
          title: "text-5xl font-black text-white",
          subtitle: "text-3xl font-bold text-gray-200",
          description: "text-lg text-gray-300 leading-snug",
        }),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert("nav_styles", navStyles, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("nav_styles", null, {});
  },
};
