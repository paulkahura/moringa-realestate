import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Property from './components/Property.vue'
import PostProperty from './components/Dashboard.vue'

Vue.use(Router)

let router = new Router ({
    mode: "hash",
	routes: [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/property/:propertyId',
		name: 'property',
		component: Property,
		props: true,
	},
	{
		path: '/dashboard',
		name: 'dashboard',
		component: PostProperty,
		
	}
	]
})


export default router