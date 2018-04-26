export const loadCredentials = () => {
  try {
    const serializedCredentials = localStorage.getItem("credentials");
    if (serializedCredentials == null) {
      return false;
    }
    return JSON.parse(serializedCredentials);
  } catch (err) {
    return undefined;
  }
};

export const storeCredentials = credentials => {
  try {
    const serializedCredentials = JSON.stringify(credentials);
    localStorage.setItem("credentials", serializedCredentials);
  } catch (err) {}
};
