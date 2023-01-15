// SIMULADOR BASE DE DATOS

const products = [
    {
        id: '1',
        name: 'PGC 100 e0.9',
        price: '3500',
        description: 'Perfil de acero galvanizado de SteelFrame',
        category: 'PGC',
        img: '../assets/PGC.png',
        stock: '100',
    },
    {
        id: '2',
        name: 'PLACA PLACO STD 12,5mm',
        price: '1500',
        description: '1,2m x 2,4m espesor 12,5mm. Placa de yeso Standard.',
        category: 'PLACAS',
        img: '../assets/placaStd.jpg',
        stock: '100',
    },
    {
        id: '3',
        name: 'FIELTRO LIVIANO 100',
        price: '4400',
        description: 'Rollo 1,2m x 11m',
        category: 'AISLACION',
        img: '../assets/FL100.jpg',
        stock: '100',
    },
    {
        id: '4',
        name: 'ITALFLEX X 30 KG',
        price: '3100',
        description: 'Italflex acrilico texturado grano medio x 30 KG.',
        category: 'revestimientos',
        img: '../assets/italflex.jpg',
        stock: '100',
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}
