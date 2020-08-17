export const setManualState = (state, setState) => (key, value) => {
    setState({ ...state, [key]: value })
}