import Alpine from 'alpinejs'

Alpine.store(
  
  'menu_page', {
    page_index: false,
    page_one: false,
    page_two: false,

    set(param) {
      this.page_index = false
      this.page_one = false
      this.page_two = false

      switch (param) {
        case '1':
          this.page_one = true
          window.location.href('/#')
          break;
        case '2':
          this.page_two = true
          break;
        default:
          this.page_index = true
          break;
      }
    }
  }

)