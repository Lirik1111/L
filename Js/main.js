var app = new Vue({
    el: "article",
    data: {
        products: [
            { id: 1, title: "ВИНОГРАД СУВЕНІР ", short_text: "(масою 300 г)", image: "sajency-vinograd-suvenir-3-saj_1.jpg", desc: "very very sweet and tasty grapes" },
            { id: 2, title: "КИШМИШ ПРОМЕНИСТИЙ ", short_text: "(700-900 г) ", image: "vinograd-kishmish-luchistyy-3_1 (1).jpg", desc: "very very sweet and tasty grapes" },
            { id: 3, title: "МАКСІ ЧОРНИЙ ", short_text: "(масою до 4 г) ", image: "sajency-vinograd-maksi-cherniy-3-saj_1.jpg", desc: "very very sweet and tasty grapes" },
            { id: 4, title: "ПРЕОБРАЖЕННЯ ", short_text: "(досягає 1,5 кг )", image: "sajency-vinograd-preobrajenie-3-saj_1.jpg", desc: "very very sweet and tasty grapes" },
            { id: 5, title: "АРКАДІЯ ", short_text: "(400-500 г )", image: "vinograd-arkadiya_1.jpg", desc: "Full desc" }
        ],
        product:[
        { id: 1, title: "ВИНОГРАД СУВЕНІР ", short_text: "(масою 300 г)", image: "sajency-vinograd-suvenir-3-saj_1.jpg", desc: "very very sweet and tasty grapes" },
        { id: 2, title: "КИШМИШ ПРОМЕНИСТИЙ ", short_text: "(700-900 г) ", image: "vinograd-kishmish-luchistyy-3_1 (1).jpg", desc: "very very sweet and tasty grapes" },
        { id: 3, title: "МАКСІ ЧОРНИЙ ", short_text: "(масою до 4 г) ", image: "sajency-vinograd-maksi-cherniy-3-saj_1.jpg", desc: "very very sweet and tasty grapes" },
        { id: 4, title: "ПРЕОБРАЖЕННЯ ", short_text: "(досягає 1,5 кг )", image: "sajency-vinograd-preobrajenie-3-saj_1.jpg", desc: "very very sweet and tasty grapes" },
        { id: 5, title: "АРКАДІЯ ", short_text: "(400-500 г )", image: "vinograd-arkadiya_1.jpg", desc: "very very sweet and tasty grapes" }],
        btnVisible: 0,

    },
    mounted: function () {
        console.log(window.localStorage.getItem('prod'));
        this.getProduct();

    },

    methods: {
        addItem: function (id) {
            window.localStorage.setItem("prod", id);
        }
    },

    methods:{
        getProduct:function(){
            if(window.location.hash){
                var id = window.location.hash.replace('#','');
                if(this.product && this.product.length>0){
                    for(i in this.product){
                        if(this.product[i] && this.product[i].id && id == this.product[i].id)  this.product = this.product[i];
                    }
                }
            }
        }
    },
    
    addToCart: function (id) {
        var cart = [];
        if (window.localStorage.getItem("cart")) {
          cart = window.localStorage.getItem("cart").split(",");
        }
        if (cart.indexOf(String(id)) == -1) {
          cart.push(id);
          window.localStorage.setItem("cart", cart.join());
          this.btnVisible = 1;
        }

        console
    },
      
    
      
   
});
