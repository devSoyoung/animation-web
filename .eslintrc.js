module.exports = {
    extends: ["react-app", "react-app/jest"],
    rules: {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "comma-dangle": ["error", "never"],
        "indent": ["error", 4],
        "quote-props": ["error", "consistent-as-needed"]
    }
};
