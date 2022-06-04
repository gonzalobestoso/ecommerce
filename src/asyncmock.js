const productos = [
    {
        cod: 1,
        marca: "Asus",
        modelo: "Prime A320m-k",
        descripcion: "Am4 Ddr4 A320 Hdmi M2",
        precio: 8999,
        categoria: "Motherboards",
        img: '/img/asus_prime_a320mk.png',
        stock: 18
        

    },
    {
        cod: 2,
        marca: "AMD",
        modelo: "Ryzen 5 5600G",
        descripcion: "6 núcleos y 4.4GHz de frecuencia con gráfica integrada",
        precio: 34899,
        categoria: "Procesadores",
        img: '/img/amd_ryzen5_5600G.png',
        stock: 32
        

    },
    {
        cod: 3,
        marca: "Kingston",
        modelo: "SA400S37",
        descripcion: "480G 480GB negro",
        precio: 7899,
        categoria: "Almacenamiento",
        img: '/img/kingston_SA400S37.png',
        stock: 20
        
    },
    {
        cod: 4,
        marca: "Kingston",
        modelo: "Fury Renegade",
        descripcion: "DDR4 8GB",
        precio: 8548,
        categoria: "Memorias",
        img: '/img/kingston_fury.png',
        stock: 10
    },
    {
        cod: 5,
        marca: "Reddragon",
        modelo: "RPGS GC-PS002",
        descripcion: "600W negra 100V/240V",
        precio: 8749,
        categoria: "Fuentes",
        img: '/img/reddragon_rpgs.png',
        stock: 12
    },
    {
        cod: 6,
        marca: "Netmak",
        modelo: "Nmx100",
        descripcion: "Atx Retroiluminado",
        precio: 6304,
        categoria: "Gabinetes",
        img: '/img/netmak_nmx100.png',
        stock: 8
    }
];

export const getProductos = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    } ) 

}

