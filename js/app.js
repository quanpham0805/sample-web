new Vue({
    el: '#app',
    data: {
        wannaViewCart: false,
        isClick : false,
        cart: {
            item: [],
        },
        addedOrNot: [],
        products: [
            {
                id: 1,
                name: 'MacBook Pro (15 inch)',
                description: 'This laptop has a super crisp Retina display. Yes, we know that it\'s overpriced...',
                price: 2999,
                inStock: 50
            },
            {
                id: 2,
                name: 'Samsung Galaxy Note 7',
                description: 'Unlike the overpriced MacBook Pro, we\'re selling this one a bit cheap, as we heard it might explode...',
                price: 299,
                inStock: 755
            },
            {
                id: 3,
                name: 'HP Officejet 5740 e-All-in-One-printer',
                description: 'This one might not last for so long, but hey, printers never work anyways, right?',
                price: 149,
                inStock: 5
            },
            {
                id: 4,
                name: 'iPhone 7 cover',
                description: 'Having problems keeping a hold of that phone, huh? Ever considered not dropping it in the first place?',
                price: 49,
                inStock: 42
            },
            {
                id: 5,
                name: 'iPad Pro (9.7 inch)',
                description: 'We heard it\'s supposed to be pretty good. At least that\'s what people say.',
                price: 599,
                inStock: 2
            },
            {
                id: 6,
                name: 'OnePlus 3 cover',
                description: 'Does your phone spend most of its time on the ground? This cheap piece of plastic is the solution!',
                price: 19,
                inStock: 81
            }
        ]
    },

    methods: {
        addToCart: function(Product) {
            if (this.addedOrNot[Product.id] === 0)
                this.cart.item.push({product: Product});
            this.addedOrNot[Product.id] ++;
            Product.inStock --;
        },

        totalAmountMoney: function() {
            var total = 0;
            var SIZE = this.cart.item.length;
            for (var i = 0 ; i < SIZE ; i ++)
            {
                var bien1 = this.cart.item[i].product.price, bien2 = this.addedOrNot[this.cart.item[i].product.id];
                total += bien1 * bien2;
            }
            return total;
        },

        Wipeout: function() {
            while (this.cart.item.length > 0) this.cart.item.pop();
            alert("Transaction Complete!");
        },

        getTaxesAmount: function() {
            var subtotal = this.totalAmountMoney();
            subtotal *= 15;
            subtotal /= 100;
            return subtotal;
        },

        createArrayToCheckAvailable: function() {
            if (this.isClick === true) return;
            this.isClick = true;
            var SIZE = this.products.length;
            for (var i = 0 ; i < SIZE + 3 ; i ++) this.addedOrNot.push(0);
        }
    },

    mounted: function() {
        this.createArrayToCheckAvailable();
    },

    filters: {
        currency: function(value) {
            var formatter = Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'CAD',
                minimumFractionDigits: 0
            });
            return formatter.format(value);
        }
    }
});