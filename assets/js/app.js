Vue.component('wishlist-item', {
  props: ['wishlist'],
  template: '<li>{{ wishlist.text }} <div class="item-actions"><a target="_blank" v-bind:href="wishlist.link"><button><i class="fa fa-shopping-bag" aria-hidden="true"></i></button></a> <button class="bought" v-on:click="$emit(\'check\')"></button> <button v-on:click="$emit(\'remove\')"><i class="fa fa-times" aria-hidden="true"></i></button></div></li>'
})

var app = new Vue({
  el: '#app',
  data: {
  	newItemName: '',
  	newItemLink: '',

  	//Initial items
    wishlist: [
      { text: 'Hario XGS-36TB 360 ml', link: 'https://www.amazon.de/dp/B000P4B4HO/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=3IYQFXZHX9BG8&coliid=I2FA31Y7EW2203', isActive: false },
      { text: 'Bowie Cat Brooch', link: 'https://www.etsy.com/it/listing/249024186/bowie-halloween-gatto-david-bowie-gatto', isActive: false },
      { text: 'Fujifilm X-T10', link: 'https://www.amazon.de/Fujifilm-Systemkamera-Fujinon-Objektiv-Megapixel/dp/B00XW69398/ref=sr_1_3?ie=UTF8&qid=1483887368&sr=8-3&keywords=fujifilm+x+t10', isActive: false },
      { text: 'JavaScript: The Good Parts', link: 'https://www.amazon.de/dp/0596517742/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=3IYQFXZHX9BG8&coliid=IWYXGO04X62D1', isActive: false },
      { text: 'Andromeda and the Celestial Protista', link: 'https://www.etsy.com/it/listing/275344622/andromeda-e-il-celeste-protista-edizione', isActive: false }
    ]
  },

  methods: {
    addItem: function () {
      this.wishlist.push({ text: this.newItemName, link: this.newItemLink, isActive:false  })
      this.newItemName = ''
      this.newItemLink = ''
    },

    toggleActive: function(item) {
		this.wishlist[item].isActive = !this.wishlist[item].isActive;
	}

    
    }
  

})