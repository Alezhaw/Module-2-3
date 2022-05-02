import React, {useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ShopProduct from "./ShopProduct";
import { Navigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {setProductsState} from '../store/dataSlice';


function ShopItem({storeName}) {
    let { id } = useParams();
    const products =  useSelector((state) => state.data.products);
    const dispatch = useDispatch();
    useEffect(() => {  
        axios('https://restcountries.com/v2/all').then(data => {
           if(products.length) {return} else dispatch(setProductsState([ // Если переходить по /product/id через адресную строку store пустой, в этом случае берет данные заново, если переходить по ссылкам то store не перезаписывается
                {id: 1, brand: 'Adidas', price: 4999, model: 'Кроссовки OZWEEGO EE6999', selected: false, description: 'Эти кроссовки представляют стиль конца 90-х — начала 2000-х в новом ключе, объединяя ретро-детали с футуристическим дизайном. Модель выполнена из сетки, замши и гладкого синтетического материала.',
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_600/q_75/b553e163f21241a59998aa7600eec9e5_9366/EE6999_04_standard.WebP', amount: 1, visible: true},
                {id: 2, brand: 'Nike', price: 4999, model: 'Кроссовки OZWEEGO EE6464', selected: false, description: "Эти кроссовки представляют стиль конца 90-х — начала 2000-х в новом ключе, объединяя ретро-детали с футуристическим дизайном. Модель выполнена из сетки, замши и гладкого синтетического материала.",
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_600/q_90/26957f977ecf4119879caa7600ff0f1b_9366/EE6464_01_standard.WebP', amount: 1, visible: true},
                {id: 3, brand: 'Nike', price: 4399, model: 'Кроссовки Forum Low FY7755', selected: false, description: 'Это не просто кроссовки, а настоящий символ эпохи. Модель adidas Forum появилась в 1984 году и завоевала любовь не только на баскетбольных площадках, но и в шоу-бизнесе.',
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_600/q_90/3d92ba80e65b47979462ac31012ba09d_9366/FY7755_01_standard.WebP', amount: 1, visible: true},
                {id: 4, brand: 'Nike', price: 4399, model: 'Кроссовки Forum Low FY7756', selected: false, description: 'Это не просто кроссовки, а настоящий символ эпохи. Модель adidas Forum появилась в 1984 году и завоевала любовь не только на баскетбольных площадках, но и в шоу-бизнесе.',
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_600/q_90/09c5ea6df1bd4be6baaaac5e003e7047_9366/FY7756_01_standard.WebP', amount: 1, visible: true},
                {id: 5, brand: 'Mokasin', price: 5399, model: 'Кроссовки OZWEEGO GY9021', selected: false, description: "На что может быть похожа прогулка по облакам? Возможно, на что-то вроде этих adidas OZWEEGO. В основе этой пары лежит беговая модель 90-х, дополненная технологией амортизации Adiprene. ",
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_600/q_90/a02c1af49cd0486888edadc001072c43_9366/GY9021_01_standard.WebP', amount: 1, visible: true},
                {id: 6, brand: 'Adidas', price: 4399, model: 'Кроссовки Ozelia H04250', selected: false, description: "Возможно, ты далек от 90-х, но Ozelia пришли именно из той эпохи ярких экспериментов. Вдохновленные архивными моделями adidas, эти массивные кроссовки созданы привлекать внимание.",
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_600/q_90/c2d47865bc8143acb3c0ad2401570a53_9366/H04250_01_standard.WebP', amount: 1, visible: true},
                {id: 7, brand: 'Adidas', price: 6399, model: 'Кроссовки для хайкинга Terrex Swift R2 GORE-TEX CM7492', selected: false, description: "Трейловые кроссовки для активного отдыха в горах. Прочный верх с низким голенищем и система быстрой шнуровки обеспечивают необходимую поддержку на неровных поверхностях.",
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_600/q_90/06efb594f7ae4a03b850a826015866c1_9366/CM7492_01_standard.WebP', amount: 1, visible: true},
                {id: 8, brand: 'Adidas', price: 5999, model: 'Кроссовки OZWEEGO GX8878', selected: false, description: "Сделай шаг в будущее в этих кроссовках adidas OZWEEGO. С одной стороны они представляют ретро-дизайна 90-х, с другой ― являются воплощением ультрасовременного стиля.",
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_600/q_90/2c55cc56e25f4512b61aadc60137b3ce_9366/GX8878_00_plp_standard.WebP', amount: 1, visible: true},
                {id: 9, brand: 'Adidas', price: 4399, model: 'Кроссовки Forum Low GV9766', selected: false, description: "Это не просто кроссовки, а настоящий символ эпохи. Модель adidas Forum появилась в 1984 году и завоевала любовь не только на баскетбольных площадках, но и в шоу-бизнесе. Эта пара возрождает стиль 80-х и культовый дизайн X-образных ремешков в новой версии для современных улиц. ",
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_600/q_90/245b74ed87a44bb3b983ac6400f67d77_9366/FZ1839_01_standard.WebP', amount: 1, visible: true},
                {id: 10, brand: 'Adidas', price: 3399, model: 'Высокие кроссовки Hoops 2.0 B44621', selected: false, description: "Зимние кроссовки с баскетбольным силуэтом. Прочный высокий верх дополнен теплой подкладкой из искуственного меха. Прорезиненный мысок и пятка защищают в непогоду.",
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_600/q_90/e39b6370dac8402c87b4a92600db5563_9366/B44621_01_standard.WebP', amount: 1, visible: true},
                {id: 11, brand: 'Adidas', price: 4999, model: 'Кроссовки OZWEEGO Celox GZ5231', selected: false, description: "Кроссовки adidas OZWEEGO Celox сами по себе не определяют будущее. А вот то, чем ты будешь в них заниматься и куда пойдешь, может повлиять на многое. ",
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_600/q_90/71bb5ccf37a34f5b9e2aac9100d3af98_9366/GZ5231_01_standard.WebP', amount: 1, visible: true},
                {id: 12, brand: 'Adidas', price: 3399, model: 'Кроссовки Courtmaster FV8108', selected: false, description: "Кроссовки adidas в теннисном стиле, который одинаково хорошо смотрится и на улицах города, и на музыкальном фестивале. Кожаный верх и мягкая подошва дарят комфорт до конца дня. ",
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_600/q_90/7ab4ec1ec387470eaff7ab5700f46435_9366/FV8108_01_standard.WebP', amount: 1, visible: true}
            ]))
        });
    }, [])

    let product = products[0] ? products.filter(product => product.id == id)[0] : '';
return <>
{(storeName == null) ? <Navigate to='/login'/>: ''}
{id > products.length ? 'Нет такого товара' : <ShopProduct product={product}/>}
</>
}

export default ShopItem;