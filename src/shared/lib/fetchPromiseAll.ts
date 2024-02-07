const promises = Promise.all([
    Promise.resolve('Danil'),
    Promise.resolve('Grebnev'),
])

export const fetchPromiseAll = () => {
    promises.then((data) => console.log(data))
}
