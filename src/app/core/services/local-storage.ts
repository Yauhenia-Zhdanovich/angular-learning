export const loadCredentials = () => {
  try {
    const serializedCredentials: any = localStorage.getItem('credentials');
    if (serializedCredentials == null) {
      return false;
    }
    return JSON.parse(serializedCredentials);
  } catch (err) {
    return;
  }
};

export const storeCredentials = credentials => {
  try {
    const serializedCredentials: string = JSON.stringify(credentials);
    localStorage.setItem('credentials', serializedCredentials);
  } catch (err) {}
};

export const wipeCredentials: any = () => {
  localStorage.removeItem('credentials');
};
