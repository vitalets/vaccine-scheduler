import * as React from 'react';

export interface StorageData {
  dob: string;
  sex: 'male' | 'female';
}

export function useStorage() {
  const [ dob ] = useStorageState('dob');
  const [ sex ] = useStorageState('sex');
  const isMale = sex === 'male';
  const age = calcAge(dob);
  return {
    isMale,
    age,
  };
}

export function useStorageState(key: keyof StorageData, defaultValue = '') {
  const [ value, setValue ] = React.useState(() => {
    const storedValue = window.localStorage.getItem(key);
    return storedValue !== null ? storedValue : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [ key, value ]);
  return [ value, setValue ] as [ string, React.Dispatch<React.SetStateAction<string>> ];
}

function calcAge(dob: string) {
  const [day, month, year] = dob.split('.');
  const today = new Date();
  const birthDate = new Date(Number(year), Number(month) - 1, Number(day));
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) age--;
  return age;
}
