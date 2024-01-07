import img1 from '/public/mock/images/headphones1.jpg'
import img2 from '/public/mock/images/headphones2.jpg'
import img3 from '/public/mock/images/soundlink1.jpg'
import img4 from '/public/mock/images/soundlink2.jpg'
import img5 from '/public/mock/images/watch1.jpg'
import img6 from '/public/mock/images/watch2.jpg'
import img7 from '/public/mock/images/headphones4.jpg'
import img8 from '/public/mock/images/headphones3.jpg'
import img9 from '/public/mock/images/soundbar1.jpg'
import img10 from '/public/mock/images/soundbar2.jpg'
import img11 from '/public/mock/images/tablet1.jpg'
import img12 from '/public/mock/images/tablet2.jpg'
import img13 from '/public/mock/images/headphones5.jpg'
import img14 from '/public/mock/images/headphones6.jpg'
import img15 from '/public/mock/images/phone1.jpg'
import img16 from '/public/mock/images/phone2.jpg'
import img17 from '/public/mock/images/controller1.jpg'
import img18 from '/public/mock/images/controller2.jpg'
import img19 from '/public/mock/images/camera1.jpg'
import img20 from '/public/mock/images/camera2.jpg'
import img21 from '/public/mock/images/powerbank1.jpg'
import img22 from '/public/mock/images/powerbank2.jpg'
import img23 from '/public/mock/images/camera3.jpg'
import img24 from '/public/mock/images/camera4.jpg'
import img25 from '/public/mock/images/smartspeaker1.jpg'
import img26 from '/public/mock/images/smartspeaker2.jpg'
import img27 from '/public/mock/images/base1.jpg'
import img28 from '/public/mock/images/base2.jpg'
import img29 from '/public/mock/images/mouse1.jpg'
import img30 from '/public/mock/images/mouse2.jpg'

import usr1 from '/public/mock/images/user1.jpg'
import usr2 from '/public/mock/images/user2.jpg'
import usr3 from '/public/mock/images/user3.jpg'
import usr4 from '/public/mock/images/user4.jpg'

import gamestick from '/public/mock/images/gamestick.jpg'
import headphones from '/public/mock/images/headphone.jpg'
import photocamera from '/public/mock/images/photocamera.jpg'
import laptop from '/public/mock/images/laptop.jpg'
import iphone from '/public/mock/images/iphone.jpg'
import monitors from '/public/mock/images/telivision.jpg'
import printers from '/public/mock/images/printers.jpg'
import refregirators from '/public/mock/images/refrigerators.jpg'
import smartWatch from '/public/mock/images/smart-watch.jpg'
import soundbars from '/public/mock/images/soundbars.jpg'

import product1 from '/public/mock/images/product1.jpg'
import product2 from '/public/mock/images/product2.jpg'
import product3 from '/public/mock/images/product3.jpg'
import product4 from '/public/mock/images/product4.jpg'
import product5 from '/public/mock/images/product5.jpg'
import product6 from '/public/mock/images/product6.jpg'
import product7 from '/public/mock/images/product7.jpg'
import product8 from '/public/mock/images/product8.jpg'
import product9 from '/public/mock/images/product9.jpg'

import { IImage } from '@/app/types/Product'

import { ICategory } from '@/app/types/category'

export const data = {
    sideBarMenu: [
        'Headphone',
        'Home Appliances',
        'Laptop',
        'Mobiles',
        'Monitors',
        'Printers',
        'Refrigerators',
        'Smart Waths',
        'Game Stick',
        'Soundbars',
        'Show more',
    ],

    productById: {
        id: 123,
        createdAt: '123',
        updatedAt: '123',
        name: 'Galaxy wath 4',
        slug: 'galaxy wath 4',
        description: 'Описание',
        price: 340,
        quantity: 123,
        available: false,
        isPublished: true,
        category: {
            name: 'Часы',
            id: 123,
            slug: 'asd',
            image: '',
        } as ICategory,
        images: [
            { image: product1 },
            { image: product2 },
            { image: product3 },
            { image: product4 },
            { image: product5 },
            { image: product6 },
        ] as unknown as IImage[],
    },

    feature_product: [
        {
            name: 'Samsung Buds 2.0 Pro Galaxy MM-r4 NZAWXAR',
            images: [{ image: img1 }, { image: img2 }],
            price: 129.0,
            rating: 5,
        },
        {
            name: 'Bose Sound Link Micro Wireless Bluetooth Speaker',
            images: [{ image: img3 }, { image: img4 }],
            price: 229.0,
            rating: 5,
        },
        {
            name: 'Galaxy Watch5 44mm Bluetooth Smart Watch',
            images: [{ image: img5 }, { image: img6 }],
            price: 155.0,
            rating: 5,
        },
        {
            name: 'Beats Ear Headphones Studio Buds Wireless',
            images: [{ image: img7 }, { image: img8 }],
            price: 210.0,
            rating: 5,
        },
        {
            name: 'Echo Dot 4th Gen Smart speaker with Alexa',
            images: [{ image: img9 }, { image: img10 }],
            price: 149.0,
            rating: 5,
        },
        {
            name: 'Apple iPad Air 5th Generator Wi-Fi Cellular',
            images: [{ image: img11 }, { image: img12 }],
            price: 149.0,
            rating: 5,
        },
        {
            name: 'Air Buds Bluetooth, True Wireless with Charging',
            images: [{ image: img13 }, { image: img14 }],
            price: 109.0,
            rating: 4,
        },
        {
            name: 'Apple Iphone 14 Pro Max, 64GB, White Unlocked',
            images: [{ image: img15 }, { image: img16 }],
            price: 109.0,
            rating: 4,
        },
    ],

    newProduct: [
        {
            name: 'Samsung Buds 2.0 Pro Galaxy MM-r4 NZAWXAR',
            images: [{ image: img1 }, { image: img2 }],
            price: 129.0,
            rating: 5,
        },
        {
            name: 'Bose Sound Link Micro Wireless Bluetooth Speaker',
            images: [{ image: img3 }, { image: img4 }],
            price: 229.0,
            rating: 5,
        },
        {
            name: 'Galaxy Watch5 44mm Bluetooth Smart Watch',
            images: [{ image: img5 }, { image: img6 }],
            price: 155.0,
            rating: 5,
        },
        {
            name: 'Beats Ear Headphones Studio Buds Wireless',
            images: [{ image: img7 }, { image: img8 }],
            price: 210.0,
            rating: 5,
        },
        {
            name: 'Echo Dot 4th Gen Smart speaker with Alexa',
            images: [{ image: img9 }, { image: img10 }],
            price: 149.0,
            rating: 5,
        },
        {
            name: 'Apple iPad Air 5th Generator Wi-Fi Cellular',
            images: [{ image: img11 }, { image: img12 }],
            price: 149.0,
            rating: 5,
        },
        {
            name: 'Air Buds Bluetooth, True Wireless with Charging',
            images: [{ image: img13 }, { image: img14 }],
            price: 109.0,
            rating: 4,
        },
        {
            name: 'Apple Iphone 14 Pro Max, 64GB, White Unlocked',
            images: [{ image: img15 }, { image: img16 }],
            price: 109.0,
            rating: 4,
        },
    ],

    bestsellerProduct: [
        {
            name: 'Samsung Buds 2.0 Pro Galaxy MM-r4 NZAWXAR',
            images: [{ image: img1 }, { image: img2 }],
            price: 129.0,
            rating: 5,
        },
        {
            name: 'Bose Sound Link Micro Wireless Bluetooth Speaker',
            images: [{ image: img3 }, { image: img4 }],
            price: 229.0,
            rating: 5,
        },
        {
            name: 'Galaxy Watch5 44mm Bluetooth Smart Watch',
            images: [{ image: img5 }, { image: img6 }],
            price: 155.0,
            rating: 5,
        },
        {
            name: 'Beats Ear Headphones Studio Buds Wireless',
            images: [{ image: img7 }, { image: img8 }],
            price: 210.0,
            rating: 5,
        },
        {
            name: 'Echo Dot 4th Gen Smart speaker with Alexa',
            images: [{ image: img9 }, { image: img10 }],
            price: 149.0,
            rating: 5,
        },
        {
            name: 'Apple iPad Air 5th Generator Wi-Fi Cellular',
            images: [{ image: img11 }, { image: img12 }],
            price: 149.0,
            rating: 5,
        },
        {
            name: 'Air Buds Bluetooth, True Wireless with Charging',
            images: [{ image: img13 }, { image: img14 }],
            price: 109.0,
            rating: 4,
        },
        {
            name: 'Apple Iphone 14 Pro Max, 64GB, White Unlocked',
            images: [{ image: img15 }, { image: img16 }],
            price: 109.0,
            rating: 4,
        },
    ],

    footerMenu: {
        leftCol: [
            'Help Center',
            'Redeem Voucher',
            'Order History',
            'Shopping Cart',
            'Affiliate',
            'Account',
            'Gift Card',
            'Service Center',
        ],
        centerCol: [
            'Product Support',
            'Checkout',
            'License Policy',
            'Submit a Dispute',
            'Locality',
            'About us',
            'Polices & Rules',
            'Terms & Conditions',
        ],
        rightCol: [
            'About us',
            'Careers',
            'Blog',
            'Submit a Dispute',
            'Affiliate',
            'Contact Us',
            'Support',
        ],
    },

    fakeCustomers: [
        {
            src: usr1,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo.`,
            name: 'Allie Grater',
            specials: 'Designer',
        },
        {
            src: usr2,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo.`,
            name: 'Josh Doe',
            specials: 'Engineer',
        },
        {
            src: usr3,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo.`,
            name: 'Rose Bruh',
            specials: 'IT expert',
        },
        {
            src: usr4,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo.`,
            name: 'Percy Kewshun',
            specials: 'Architech',
        },
        {
            src: usr1,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo.`,
            name: 'Allie Grater',
            specials: 'Designer',
        },
        {
            src: usr2,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo.`,
            name: 'Josh Doe',
            specials: 'Engineer',
        },
    ],

    shopByFeaturedCategories: [
        {
            img: gamestick,
            title: 'Game stick',
            amount: 1,
        },
        {
            img: headphones,
            title: 'Headphone',
            amount: 13,
        },
        {
            img: photocamera,
            title: 'Home Appliance',
            amount: 5,
        },
        {
            img: laptop,
            title: 'Laptop',
            amount: 11,
        },
        {
            img: iphone,
            title: 'Mobiles',
            amount: 22,
        },
        {
            img: monitors,
            title: 'Monitors',
            amount: 9,
        },
        {
            img: printers,
            title: 'Printers',
            amount: 20,
        },
        {
            img: refregirators,
            title: 'Refrigerators',
            amount: 19,
        },
        {
            img: smartWatch,
            title: 'Smart Watch',
            amount: 5,
        },
        {
            img: soundbars,
            title: 'Sound bars',
            amount: 14,
        },
    ],

    sliderData: [
        'slide1',
        'slide2',
        'slide3',
        'slide4',
        'slide5',
        'slide6',
        'slide7',
        'slide8',
    ],

    categoryFilter: [
        { name: 'Headphones' },
        { name: 'Home Appliance' },
        { name: 'Laptop' },
        { name: 'Mobiles' },
        { name: 'Monitors' },
        { name: 'Printers' },
        { name: 'Refrigerators' },
        { name: 'Smart Waths' },
        { name: 'Game Stick' },
        { name: 'Soundbars' },
        { name: 'Sports & Action' },
        { name: 'Tablets' },
        { name: 'Television' },
        { name: 'VR Game' },
    ],

    colorFilter: [
        { color: 'black' },
        { color: 'blue' },
        { color: 'orange' },
        { color: 'pink' },
        { color: 'red' },
        { color: 'silver' },
        { color: 'white' },
        { color: 'yellow' },
    ],

    sizeFilter: [{ name: 'Large' }, { name: 'Medium' }, { name: 'Small' }],

    sliderImg: [
        product1,
        product2,
        product3,
        product4,
        product5,
        product6,
        product7,
        product8,
        product9,
    ],
}

export const getData = async (ms: number = 2000): Promise<typeof data> => {
    return await new Promise((resolve) => {
        setTimeout(resolve, ms, data)
    })
}

export default data
