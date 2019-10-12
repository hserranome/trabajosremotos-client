const getLocalDate = (date) => {
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	let newDate = new Date(date).toLocaleDateString('es-ES', options);
	return newDate;
}
export default getLocalDate;