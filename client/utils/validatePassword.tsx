const validatePassword = (password: string) => {
  const rules = {
    minLength: { test: (p: string) => p.length >= 8, code: 1 },
    hasNumber: { test: (p: string) => /\d/.test(p), code: 2 },
    hasUppercase: { test: (p: string) => /[A-Z]/.test(p), code: 3 },
    hasLowercase: { test: (p: string) => /[a-z]/.test(p), code: 4 },
    hasSymbol: { test: (p: string) => /[^a-zA-Z0-9]/.test(p), code: 5 },
  };

  return Object.entries(rules)
    .filter(([_, rule]) => !rule.test(password))
    .map(([_, rule]) => rule.code);
};

export default validatePassword;
