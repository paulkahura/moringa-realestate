<template>
  <div class="hello">
  <!-- ======= Intro Section ======= -->
        <!--/ Form Search Star /-->
      <div class="box-collapse modal fade" id="search"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog p-5">
          <div class="title-box-d modal-header">
            <h3 class="title-d">Search Property</h3>
          </div>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span class="close-box-collapse right-boxed ion-ios-close"></span>
          </button>
          <div class=" form modal-content">
            <form class="form-a" @submit.prevent="search">
              <div class="row">
                <div class="col-md-12 mb-2">
                  <div class="form-group">
                    <label for="Type">Keyword</label>
                    <input type="text" class="form-control form-control-lg form-control-a" v-model="nameSearch" placeholder="Keyword">
                  </div>
                </div>
                <div class="col-md-6 mb-2">
                  <div class="form-group">
                    <label for="Type">Status</label>
                    <select class="form-control form-control-lg form-control-a" id="Type" v-model="selectedStatus">
                      <option value="">Any</option>
                      <option value="For rent">For Rent</option>
                      <option>For Sale</option>
                      <option>Open House</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6 mb-2">
                  <div class="form-group">
                    <label for="bedrooms">Type</label>
                    <select class="form-control form-control-lg form-control-a" id="bedrooms" v-model="selectedType">
                      <option value="">Any</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="villa">Villa</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="plot/vacant land">Plot/vacant land</option>
                      <option value="villa">Villa</option>
                      <option value="industrial property">Industrial property</option>
                      <option value="commercial property">Commercial Property</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6 mb-2">
                  <div class="form-group">
                    <label for="garages">Garages</label>
                    <select class="form-control form-control-lg form-control-a" id="garages" v-model="garageSearch">
                      <option>Any</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6 mb-2">
                  <div class="form-group">
                    <label for="bathrooms">Bathrooms</label>
                    <select class="form-control form-control-lg form-control-a" id="bathrooms" v-model="bathsSearch">
                      <option>Any</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-12">
                  <button type="submit" class="btn btn-b">Search Property</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div><!-- End Property Search Section -->>


  <div class="intro intro-carousel">
    <div >
      <div class="carousel-item-a intro-item bg-image" style="background-image: url(assets/img/slide-2.jpg)">
        <div class="overlay overlay-a"></div>
        <div class="intro-content display-table">
          <div class="table-cell">
            <div class="container">
              <div class="row">
                <div class="col-lg-8">
                  <div class="intro-body">
                    <p class="intro-title-top">Ngong rd
                      <br> Nairobi, Kenya
                    </p>
                    <h1 class="intro-title mb-4">
                      <span class="color-b">Moringa </span> Homes
                      <br> Agency
                    </h1>
                    <p class="intro-subtitle intro-price">
                      <a href=""><span class="price-a">rent | buy</span></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><!-- End Intro Section -->

  <main id="main">

  <!-- ======= Intro Single ======= -->
    <section class="intro-single">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="title-single-box">
              <h1 class="title-single">Our Amazing Properties</h1>
              <span class="color-text-a">Great Properties</span>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End Intro Single-->

    <!-- ======= Property Grid ======= -->
    <section class="property-grid grid" id="property">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="grid-option">
              <button type="button" class="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block" data-toggle="modal" data-target="#search" aria-expanded="false">
                <span class="fa fa-search" aria-hidden="true"></span>
              </button>
            </div>
          </div>
          <div class="col-md-4" v-for="(item, index) in filteredProperties" :key="index">
            <div class="card-box-a card-shadow">
              <div class="img-box-a">
                <img :src="item.images[0]" alt="" class="img-a img-fluid">
              </div>
              <div class="card-overlay">
                <div class="card-overlay-a-content">
                  <div class="card-header-a">
                    <h2 class="card-title-a">
                      <a href="">{{item.location}}</a>
                    </h2>
                  </div>
                  <div class="card-body-a">
                    <div class="price-box d-flex">
                      <span class="price-a">{{item.status}} | {{item.price}}</span>
                    </div>
                    <router-link :to="{ name: 'property', params: { propertyId: item.id }}" class="link-a">
                    Click here to view
                      <span class="ion-ios-arrow-forward"></span>
                  </router-link>
                  </div>
                  <div class="card-footer-a">
                    <ul class="card-info d-flex justify-content-around">
                      
                      <li>
                        <h4 class="card-info-title">Beds</h4>
                        <span>{{item.bedrooms}}</span>
                      </li>
                      <li>
                        <h4 class="card-info-title">Baths</h4>
                        <span>{{item.showers}}</span>
                      </li>
                      <li>
                        <h4 class="card-info-title">Garages</h4>
                        <span>{{item.garage}}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End Property Grid Single-->

    <!-- ======= Intro Single ======= -->
    <section class="intro-single">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="title-single-box">
              <h1 class="title-single">Contact US</h1>
              <span class="color-text-a">If you have any questions or an offer feel free to reach out to us,.
              Serving clients is our first priority and we deliver the best to you.</span>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End Intro Single-->

    <!-- ======= Contact Single ======= -->
    <section class="contact" id="contact">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="contact-map box">
              <div id="map" class="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.16244016024!2d36.7846067!3d-1.3004862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x940b62a3c8efde4c!2sMoringa%20School!5e0!3m2!1sen!2ske!4v1647837324324!5m2!1sen!2ske" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
              </div>
            </div>
          </div>
          <div class="col-sm-12 section-t8">
            <div class="row">
              <div class="col-md-7">
                <form  method="post" role="form" class="php-email-form">
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <div class="form-group">
                        <input type="text" name="name" class="form-control form-control-lg form-control-a" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
                        <div class="validate"></div>
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <div class="form-group">
                        <input name="email" type="email" class="form-control form-control-lg form-control-a" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email">
                        <div class="validate"></div>
                      </div>
                    </div>
                    <div class="col-md-12 mb-3">
                      <div class="form-group">
                        <input type="text" name="subject" class="form-control form-control-lg form-control-a" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject">
                        <div class="validate"></div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <textarea name="message" class="form-control" cols="45" rows="8" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                        <div class="validate"></div>
                      </div>
                    </div>
                    <div class="col-md-12 mb-3">
                      <div class="mb-3">
                        <div class="loading">Loading</div>
                        <div class="error-message"></div>
                        <div class="sent-message">Your message has been sent. Thank you!</div>
                      </div>
                    </div>

                    <div class="col-md-12 text-center">
                      <button type="submit" class="btn btn-a">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-md-5 section-md-t3">
                <div class="icon-box section-b2">
                  <div class="icon-box-icon">
                    <span class="ion-ios-paper-plane"></span>
                  </div>
                  <div class="icon-box-content table-cell">
                    <div class="icon-box-title">
                      <h4 class="icon-title">Say Hello</h4>
                    </div>
                    <div class="icon-box-content">
                      <p class="mb-1">Email.
                        <span class="color-a">support@moringahomes.com</span>
                      </p>
                      <p class="mb-1">Phone.
                        <span class="color-a">+254XXXXXXX</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="icon-box section-b2">
                  <div class="icon-box-icon">
                    <span class="ion-ios-pin"></span>
                  </div>
                  <div class="icon-box-content table-cell">
                    <div class="icon-box-title">
                      <h4 class="icon-title">Find us in</h4>
                    </div>
                    <div class="icon-box-content">
                      <p class="mb-1">
                        Ngong Rd, Nairobi
                        <br> KE.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="icon-box">
                  <div class="icon-box-icon">
                    <span class="ion-ios-redo"></span>
                  </div>
                  <div class="icon-box-content table-cell">
                    <div class="icon-box-title">
                      <h4 class="icon-title">Social networks</h4>
                    </div>
                    <div class="icon-box-content">
                      <div class="socials-footer">
                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <a href="#" class="link-one">
                              <i class="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#" class="link-one">
                              <i class="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#" class="link-one">
                              <i class="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#" class="link-one">
                              <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#" class="link-one">
                              <i class="fa fa-dribbble" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End Contact Single-->

  </main><!-- End #main -->

  </div>
</template>

<script>
import firebase from "../firebase";
const db = firebase.database().ref("/Properties");


export default {
  name: 'Home',
  props: ['name'],
  data() {
    return {
      properties : [],
      selectedType: '',
      selectedStatus: '',
      selectedName: '',
      nameSearch:"",
      bedsSearch:"",
      garageSearch:"",
      bathsSearch:"",
      filteredProps:"",
    };
  },
  computed:{
    filteredProperties: function() {
      let filterType = this.selectedType,
          filterStatus = this.selectedStatus,
          filterName = this.nameSearch

      return this.properties.filter(function(property) {
        let filtered = true

        // if (filterType == "any" ){
        //   if (filterStatus == "any"){
        //     filtered = true
        //     }
          
        // }
        if (filterStatus != "Any"){
          filtered = property.status.includes(filterStatus)
        }
        
        if (filterType != "Any"){
          filtered = property.type.includes(filterType)
        }
        if (filtered ){
          filtered = property.status.includes(filterStatus)
        }
        if (filtered){
          filtered = property.location.toLowerCase().includes(filterName)
          console.log(filterType,filtered,filterName)
        }
     

        
        
        return filtered
      })

    }
  },
  methods: {
    readProperties(items){
            let _properties = [];

            items.forEach((item) => {
            console.log(item);
            let key= item.key;
            let data = item.val();

            _properties.push({
              id: key,
              title: data.name,
              description: data.description,
              location: data.location,
              price: data.price,
              status: data.status,
              type: data.type,
              bedrooms: data.bedrooms,
              garage: data.garage,
              showers: data.showers,
              images: data.images,
              externalAmenities: data.externalAmenities,
              internalAmenities: data.internalAmenities,
              near: data.near
              });
            });
            this.properties = _properties;


    },
    search (){
      console.log(this.selectedType)
    },
    

  },
mounted() {
  db.on("value", this.readProperties);
},
 beforeDestroy() {
    db.off("value", this.readProperties);
  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
