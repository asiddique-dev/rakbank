export const calculateRisk = (selectedOptions) => {
    return selectedOptions.reduce((particalSum, a) => particalSum + (a.value ? a.value : 0), 0);
}