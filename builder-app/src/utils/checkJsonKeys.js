/**
 * Validates that the required styles for a component are present.
 * @param {Object} style - The style object to validate.
 * @param {Array} requiredStyles - An array of required style keys.
 * @returns {boolean} - True if all required styles are present, false if any are missing.
 */
const validateStyles = (style, requiredStyles) => {
  const missingStyles = requiredStyles.filter((key) => !style[key]);

  if (missingStyles.length > 0) {
    console.error(
      `Component is missing the following styles: ${missingStyles.join(", ")}`
    );
    return false; // Return false if validation fails
  }
  return true; // Return true if all styles are present
};

export default validateStyles;
