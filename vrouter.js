var body1 = {
	template:
		'<div class="col l12 m12 s12"><div class="aboutCard"><span class="cardTitle">About</span><div class="cardContents">this is pmml!</div></div></div>'
};

var body2 = {
	template:
		'<div class="col l12 m12 s12"><div class="aboutCard"><span class="cardTitle">About</span><div class="cardContents">this is body!</div></div></div>'
};

var body3 = {
	template: '#vueroutertest'
};

var router = new VueRouter({
	routes: [
		{
			path: '/foo',
			components: body1
		},
		{
			path: '/bar',
			components: body2
		},
		{
			path: '/vrt',
			components: body3
		}
	]
});

var app = new Vue({
	el: '#app',
	router,
	data: {
		armyType: '육군',
		regiment: '이게 되나?'
	}
});