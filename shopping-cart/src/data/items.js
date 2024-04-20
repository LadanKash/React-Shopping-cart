const productList =[
    {
        id:'1',
        title: 'Macbook',
        price: 1299,
        image:'/images/macbook.jpg'
    },
    {
        id:'2',
        title: 'Airpods',
        price: 199,
        image:'/images/airpods.jpg'
    },
    {
        id:'3',
        title: 'Headphone',
        price: 179,
        image:'/images/headphone.jpg'
    },
    {
        id:'4',
        title: 'Ipad',
        price: 1399,
        image:'/images/ipad.jpg'
    },
    {
        id:'5',
        title: 'Mic',
        price: 299,
        image:'/images/mic.jpg'
    },
    {
        id:'6',
        title: 'Mouse',
        price: 99,
        image:'/images/mouse.jpg'
    },
    {
        id:'7',
        title: 'Phone',
        price: 1279,
        image:'/images/phone.jpg'
    },
    {
        id:'8',
        title: 'Watch',
        price: 399,
        image:'/images/watch.jpg'
    },
    {
        id:'9',
        title: 'Macbook',
        price: 1299,
        image:'/images/macbook.jpg'
    },
    {
        id:'10',
        title: 'Airpods',
        price: 199,
        image:'/images/airpods.jpg'
    },
    {
        id:'11',
        title: 'Headphone',
        price: 179,
        image:'/images/headphone.jpg'
    }

]

function getProductData(id){
    let productDate = productList.find((item) => item.id === id)
    return productDate

}

export { productList, getProductData }