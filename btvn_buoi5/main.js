var man = [
    {
        id: 1,
        img:"https://namfashion.com/home/wp-content/uploads/2021/04/ao-phong-nam-coc-tay-co-tim-han-quoc-cao-cap-dep-ha-noi-7.jpg",
        name: "The cosmo (đen) quần short khaki",
        price: "250.000"

    },
    {
        id: 2,
        img:"https://namfashion.com/home/wp-content/uploads/2021/04/ao-phong-nam-coc-tay-co-tim-han-quoc-cao-cap-dep-ha-noi-7.jpg",
        name: "The cosmo (đen) quần short khaki",
        price: "250.000"

    },
    {
        id: 3,
        img:"https://namfashion.com/home/wp-content/uploads/2021/04/ao-phong-nam-coc-tay-co-tim-han-quoc-cao-cap-dep-ha-noi-7.jpg",
        name: "The cosmo (đen) quần short khaki",
        price: "250.000"

    },
    {
        id: 4,
        img:"https://namfashion.com/home/wp-content/uploads/2021/04/ao-phong-nam-coc-tay-co-tim-han-quoc-cao-cap-dep-ha-noi-7.jpg",
        name: "The cosmo (đen) quần short khaki",
        price: "250.000"

    },
]
var woman = [
    {
        id: 1,
        img:"https://i.pinimg.com/originals/f5/c1/9d/f5c19d77cb9ef87f98b4fc68c0fdf084.jpg",
        name: "set váy nữ",
        price: "250.000"

    },
    {
        id: 2,
        img:"https://i.pinimg.com/originals/f5/c1/9d/f5c19d77cb9ef87f98b4fc68c0fdf084.jpg",
        name: "set váy nữ",
        price: "250.000"

    },
    {
        id: 3,
        img:"https://i.pinimg.com/originals/f5/c1/9d/f5c19d77cb9ef87f98b4fc68c0fdf084.jpg",
        name: "set váy nữ",
        price: "250.000"

    },
    {
        id: 4,
        img:"https://i.pinimg.com/originals/f5/c1/9d/f5c19d77cb9ef87f98b4fc68c0fdf084.jpg",
        name: "set váy nữ ",
        price: "250.000"

    },
]

function view() {
    for(i=0; i<man.length;i++){
        var demo='<div class="cart">'
           demo += ' <img src="'+man[i].img+'" alt="">'        
           demo += ' <p>'+man[i].name+'</p>'        
           demo += ' <label>'+man[i].price+'</label><br>'        
           demo += ' <button>Đặt mua</button>'        
           demo += ' </div>'  
           
           document.getElementById("man").innerHTML +=demo
    }
    for(i=0; i<woman.length;i++){
        var demo='<div class="cart">'
           demo += ' <img src="'+woman[i].img+'" alt="">'        
           demo += ' <p>'+woman[i].name+'</p>'        
           demo += ' <label>'+woman[i].price+'</label><br>'        
           demo += ' <button>Đặt mua</button>'        
           demo += ' </div>'  
           
           document.getElementById("woman").innerHTML +=demo
    }
    
}