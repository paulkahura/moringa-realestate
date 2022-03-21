<template>
      <main id="main">

    <!-- ======= Intro Single ======= -->
    <section class="intro-single">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="title-single-box">
              <h1 class="title-single">{{property.name}}</h1>
              <span class="color-text-a">{{property.location}}</span>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End Intro Single-->

    <!-- ======= Property Single ======= -->
    <section class="property-single nav-arrow-b">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div id="property-single-carousel" class="owl-arrow gallery-property">
                <img :src="property.images[0]" alt="" class="invisi">
              <carousel :responsive="responsive" class="banner">
                  <img v-for="n of property.images" :key="n" :src="n">
              </carousel>
            </div>
            <div class="row justify-content-between">
              <div class="col-md-5 col-lg-4">
                <div class="property-price d-flex justify-content-center foo">
                  <div class="card-header-c d-flex">
                    <div class="card-box-ico">
                      <span class="ion-money">ksh</span>
                    </div>
                    <div class="card-title-c align-self-center">
                      <h5 class="title-c">{{property.price}}</h5>
                    </div>
                  </div>
                </div>
                <div class="property-summary">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="title-box-d section-t4">
                        <h3 class="title-d">Quick Summary</h3>
                      </div>
                    </div>
                  </div>
                  <div class="summary-list">
                    <ul class="list">
                      <li class="d-flex justify-content-between">
                        <strong>Property ID:</strong>
                        <span>{{id}}</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <strong>Location:</strong>
                        <span>{{property.location}}</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <strong>Property Type:</strong>
                        <span>{{property.type}}</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <strong>Status:</strong>
                        <span>{{property.status}}</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <strong>Beds:</strong>
                        <span>{{property.bedrooms}}</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <strong>Baths:</strong>
                        <span>{{property.showers}}</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <strong>Garage:</strong>
                        <span>{{property.garage}}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-7 col-lg-7 section-md-t3">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="title-box-d">
                      <h3 class="title-d">Property Description</h3>
                    </div>
                  </div>
                </div>
                <div class="property-description">
                  <p class="description color-text-a">
                    {{property.description}}
                  </p>
                </div>
                <div class="row section-t3" v-if="externalAmenities">
                  <div class="col-sm-12">
                    <div class="title-box-d">
                      <h3 class="title-d">External Amenities</h3>
                    </div>
                  </div>
                </div>
                <div class="amenities-list color-text-a">
                  <ul class="list-a no-margin">
                    <li v-for="(item,index) in externalAmenities" :key="index">{{item}}</li>
                  </ul>
                </div>
                <div class="row section-t3" v-if="internalAmenities">
                  <div class="col-sm-12">
                    <div class="title-box-d">
                      <h3 class="title-d">Internal Amenities</h3>
                    </div>
                  </div>
                </div>
                <div class="amenities-list color-text-a">
                  <ul class="list-a no-margin">
                    <li v-for="(item,index) in internalAmenities" :key="index">{{item}}</li>

                  </ul>
                </div>
                <div class="row section-t3" v-if="near">
                  <div class="col-sm-12">
                    <div class="title-box-d">
                      <h3 class="title-d">Near</h3>
                    </div>
                  </div>
                </div>
                <div class="amenities-list color-text-a">
                  <ul class="list-a no-margin">
                    <li v-for="(item,index) in near" :key="index">{{item}}</li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section><!-- End Property Single-->

  </main><!-- End #main -->
</template>
<script >
// import axios from 'axios'
import firebase from "firebase/compat/app";
import carousel from "vue-owl-carousel";

export default {
  name: 'Property',
  props: {
    
  },
  components: { carousel },
  data() {
		return{
			id:this.$route.params.propertyId,
			property:[],
      responsive: { 0: { items: 1, nav: false }, 600: { items: 1, nav: true } }
		}
  },
  methods: {
      loadData(){
          firebase.database().ref("Properties/"+this.id).on("value", snapshot => {
			this.property = snapshot.val();
			console.log(this.property);

		})
      }


  },
  mounted() {
		this.loadData()
  }

}
</script>
<style>

</style>