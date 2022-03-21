<template>
  <div class="container admin">
      <div class="product-list">
      <!-- Modal -->
      <div class="modal fade" id="newproperty"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog p-1" style="max-width:95%;" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <div class="py-5 text-center">
                <h2>Property upload</h2>
              </div>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
        <div class="row g-4">
          <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-primary">Property Image</span>
            </h4>
            <input type="file" class="form-control" @change="onUpload()" ref="inputFile" multiple>

            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-sm" v-for="(image, index) in images" :key="index">
                <div>
                  <img :src="image" width="80px">
                </div>
                <p class="text" @click="deleteImage(image,index)">delete</p>
              </li>
            </ul>
          </div>
          <div class="col-md-6 col-lg-7">
            <form class="needs-validation p-4" novalidate @submit.prevent="create()">
              <div class="row g-3">
                <div class="col-sm-6">
                  <label for="firstName" class="form-label">Property name</label>
                  <input type="text" class="form-control" id="firstName" v-model ="name" placeholder="" value="" required>
                  <div class="invalid-feedback">
                    property name is required
                  </div>
                </div>

                <div class="col-sm-6">
                  <label for="lastName" class="form-label">Location</label>
                  <input type="text" class="form-control" id="lastName" v-model ="location" placeholder="" value="" required>
                  <div class="invalid-feedback">
                    Valid location is required.
                  </div>
                </div>

                <div class="col-12">
                  <label for="username" class="form-label">Price</label>
                  <div class="input-group has-validation">
                    <span class="input-group-text">ksh</span>
                    <input type="text" class="form-control" id="username" v-model ="price" placeholder="120,000" required>
                  <div class="invalid-feedback">
                      Price is required.
                    </div>
                  </div>
                </div>
                <br/>
                <div class="col-12">
                  <span class="input-group-text">Property description</span>
                  <textarea class="form-control" aria-label="With textarea" v-model ="description"></textarea>
                </div>

                <div class="col-md-5">
                  <label for="country" class="form-label">Type</label>
                  <select class="form-select" id="country" v-model ="type" required>
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

                <div class="col-md-4">
                  <label for="state" class="form-label">Status</label>
                  <select class="form-select" id="state" v-model ="status" required>
                    <option value="">For sale</option>
                    <option>For rent</option>
                  </select>
                 
                </div>
              </div>
              <hr class="my-4">

              <div class="row gy-3">
                <div class="col-md-3">
                  <label for="cc-expiration" class="form-label">Bedrooms</label>
                  <input type="text" class="form-control" id="cc-expiration" v-model ="bedrooms" placeholder="" required>
                  <div class="invalid-feedback">
                    Please enter a valid number
                  </div>
                </div>

                <div class="col-md-3">
                  <label for="cc-cvv" class="form-label">Garages</label>
                  <input type="text" class="form-control" v-model ="garage" id="cc-cvv" placeholder="" required>
                  <div class="invalid-feedback">
                    Please enter a valid number
                  </div>
                </div>

                <div class="col-md-3">
                  <label for="cc-cvv" class="form-label">Bathrooms</label>
                  <input type="text" class="form-control" v-model ="showers" id="cc-cvv" placeholder="" required>
                  <div class="invalid-feedback">
                    Please enter a valid number
                  </div>
                </div>
              </div>
              <br/>
              <p class="font-weight-bold">External features(select as many as needed)</p>
              <div class="row gy-3 p-3">
                <div class="form-check" >
                  <input class="form-check-input" type="checkbox" value="Balcony" id="flexCheckDefault" v-model="externalAmenities">
                  <label class="form-check-label" for="flexCheckDefault">
                    Balcony
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="BBQ" id="flexCheckChecked" v-model="externalAmenities">
                  <label class="form-check-label" for="flexCheckChecked">
                    BBQ
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="CCTV" id="flexCheckChecked" v-model="externalAmenities">
                  <label class="form-check-label" for="flexCheckChecked">
                    CCTV
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Gym" id="flexCheckChecked" v-model="externalAmenities">
                  <label class="form-check-label" for="flexCheckChecked">
                    Gym
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Electric Fence" id="flexCheckChecked" v-model="externalAmenities">
                  <label class="form-check-label" for="flexCheckChecked">
                    Electric Fence
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Garden" id="flexCheckChecked" v-model="externalAmenities">
                  <label class="form-check-label" for="flexCheckChecked">
                    Garden
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Parking" id="flexCheckChecked" v-model="externalAmenities">
                  <label class="form-check-label" for="flexCheckChecked">
                    Parking
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Borehole" id="flexCheckChecked" v-model="externalAmenities">
                  <label class="form-check-label" for="flexCheckChecked">
                    Borehole
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Swimming Pool" id="flexCheckChecked" v-model="externalAmenities">
                  <label class="form-check-label" for="flexCheckChecked">
                    Swimming Pool
                  </label>
                </div>
              </div>

              <br/>
              <p class="font-weight-bold">Internal features(select as many as needed)</p>
              <div class="row gy-3 p-3">
                <div class="form-check" >
                  <input class="form-check-input" type="checkbox" value="Aircon" id="flexCheckDefault" v-model="internalAmenities">
                  <label class="form-check-label" for="flexCheckDefault">
                    Aircon
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Furnished" id="flexCheckChecked" v-model="internalAmenities">
                  <label class="form-check-label" for="flexCheckChecked">
                    Furnished
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Alarm" id="flexCheckChecked" v-model="internalAmenities">
                  <label class="form-check-label" for="flexCheckChecked">
                    Alarm
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Serviced" id="flexCheckChecked" v-model="internalAmenities">
                  <label class="form-check-label" for="flexCheckChecked">
                    Serviced
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Backup Generator" id="flexCheckChecked" v-model="internalAmenities">
                  <label class="form-check-label" for="flexCheckChecked">
                    Backup Generator
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="En Suite" id="flexCheckChecked" v-model="internalAmenities">
                  <label class="form-check-label" for="flexCheckChecked">
                    En Suite
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Walk in Closet" id="flexCheckChecked" v-model="internalAmenities">
                  <label class="form-check-label" for="flexCheckChecked">
                    Walk in Closet
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Service Charge Included" id="flexCheckChecked" v-model="internalAmenities">
                  <label class="form-check-label" for="flexCheckChecked">
                    Service Charge Included
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Fibre Internet" id="flexCheckChecked" v-model="internalAmenities">
                  <label class="form-check-label" for="flexCheckChecked">
                    Fibre Internet
                  </label>
                </div>
              </div>

              <br/>
              <p class="font-weight-bold">Nearby(select as many as needed)</p>
              <div class="row gy-3 p-3">
                <div class="form-check" >
                  <input class="form-check-input" type="checkbox" value="School" id="flexCheckDefault" v-model="near">
                  <label class="form-check-label" for="flexCheckDefault">
                    School
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Scenic View" id="flexCheckChecked" v-model="near">
                  <label class="form-check-label" for="flexCheckChecked">
                    Scenic View
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Hospital" id="flexCheckChecked" v-model="near">
                  <label class="form-check-label" for="flexCheckChecked">
                    Hospital
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Golf Course" id="flexCheckChecked" v-model="near">
                  <label class="form-check-label" for="flexCheckChecked">
                    Golf Course
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Bus Stop" id="flexCheckChecked" v-model="near">
                  <label class="form-check-label" for="flexCheckChecked">
                    Bus Stop
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Sea View" id="flexCheckChecked" v-model="near">
                  <label class="form-check-label" for="flexCheckChecked">
                    Sea View
                  </label>
                </div>
              </div>


              <hr class="my-4">
              <button class="w-100 btn btn-primary btn-lg" type="submit">Create property</button>
            </form>
          </div>
        </div>
            
            
          </div>
        </div>
      </div>
        <div class="product-test">


            <h3 class="d-inline-block">Products list</h3>
            <button @click="addNew()" class="btn btn-primary float-right" type="button" data-toggle="modal" data-target="#newproperty">Add Property</button>

            <div class="table-responsive">
              
                <table class="table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>location</th>
                      <th>Modify</th>
                    </tr>
                  </thead>

                  <tbody>
                      <tr v-for="(product, index) in properties" :key="index">
                        
                        <td>
                          <img :src="product.images[0]" width="80px">
                        </td>

                        <td>
                          {{product.title}}
                        </td>

                        <td>
                          {{product.location}}
                        </td>

                        <td>

                          <!-- <button class="btn btn-primary" @click="editProduct(product)">Edit</button> -->
                          <button class="btn btn-danger" @click="deleteProduct(product)">Delete</button>
                        </td>

                      </tr>


                  </tbody>
                </table>
            </div>

          </div>
      </div>
    </div>

</template>


<script>
import firebase from "firebase/compat/app";
// import PropertyDataService from "../services/PropertyDataService";

const db = firebase.database().ref("/Properties");


export default {
  data () {
    return {
      properties:[],
      name : '',
      location : '',
      description : '',
      price : '',
      status : '',
      type : '',
      bedrooms : '',
      garage : '',
      showers : '',
      images: [],
      imageData: null,
      property_key:'',
      modal:'',
      internalAmenities:[],
      externalAmenities:[],
      near:[]
    }
  },
  methods: {
    create () {
      
      const post = {
        name: this.name,
        location: this.location,
        description: this.description,
        price: this.price,
        status: this.status,
        type: this.type,
        bedrooms: this.bedrooms,
        garage: this.garage,
        showers: this.showers,
        images: this.images,
        externalAmenities: this.externalAmenities,
        internalAmenities: this.internalAmenities,
        near: this.near


      }
      firebase.database().ref('Properties').push(post)
      .then((response) => {
        this.property_key=response.key
        console.log(response.key);
        this.reset();

        
      })
      .catch(err => {
        console.log(err)
      });
    },

previewImage(event) {
  this.uploadValue=0;
  this.images=null;
  this.imageData = event.target.files[0];
  this.onUpload()
},

deleteImage(img, index){
  let image = firebase.storage().refFromURL(img);
  this.images.splice(index,1);
  image.delete().then(() => {
    console.log("image deleted");
  }).catch((error) => {
    console.log(error)
  });

},
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
addNew(){
  this.modal="new";
  this.reset();
},
reset(){
  this.name = '';
  this.location = '';
  this.description = '';
  this.price = '';
  this.status = '';
  this.type = '';
  this.bedrooms = '';
  this.garage = '';
  this.showers = '';
  this.images= [];
  this.internalAmenities= [];
  this.externalAmenities= [];
  this.near = [];

},
deleteProduct(doc){
  console.log(doc.id);
  db.child(doc.id).remove()
},
// editProduct(doc){
//   db.child(doc.id).set({
//         name: this.name,
//         location: this.location,
//         description: this.description,
//         price: this.price,
//         status: this.status,
//         type: this.type,
//         bedrooms: this.bedrooms,
//         garage: this.garage,
//         showers: this.showers,
//         images: this.images,
//   })
// },
onUpload(){
  const tmpfiles = event.target.files

  if (tmpfiles === 0){
    return false;
  }
  for (var f in tmpfiles){
    const file = tmpfiles[f]
    ///firebaese storage
    const storageRef=firebase.storage().ref(`images/${file.name}`).put(file);
    storageRef.on(`state_changed`,snapshot=>{
      this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
            this.images.push(url);
            this.$refs.inputFile.value=null;
            console.log(this.images)
          });
        }      
      );

  }

  

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
<style scoped>
.container{
  margin:3em;
}
.admin{
  margin-top:10em;
  
}
.form-check{
  padding-right: 1em;
}
</style>