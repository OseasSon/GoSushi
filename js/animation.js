window.intercomSettings = {
api_base: "https://api-iam.intercom.io",
app_id: "d90noo0b",
brand_id: "d90noo0b"
};

// We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/d90noo0b'
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/d90noo0b';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();

/**
 Intercom('onHide', function() {
    alert('The Intercom Messenger has been hidden.');
});
*/

/**
 * This code was written based on a tutorial video from youtube
 * The reference for this video is:
 * https://www.youtube.com/watch?v=Su1n2Uuf38E&t=1466s
 * Also, the skeleton for this code was taken from threejs.org
 * Still, several changes were applied
 */

/**
 * This code creates a moving Japan flag with three.js
 */

const section = document.querySelector("section")

// creates a camera and a scene
var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(400, section.clientWidth / section.clientHeight, 0.1, 1000 )

// changes the renderer in the edges of the object
var renderer = new THREE.WebGLRenderer({ 
  antialias: true,
  alpha: true
})

// set size and color
renderer.setSize(section.clientWidth, section.clientHeight)
renderer.setClearColor(0x000000, 0)

section.appendChild( renderer.domElement )

const loader = new THREE.TextureLoader()

// creates a rectangle and use the Japan flag as background
var geometry = new THREE.PlaneGeometry(2.6, 1.5, 50, 30)
var material = new THREE.MeshBasicMaterial({ 
  opacity: 0,
  transparent: true,
  map: loader.load("images/japan-flag.jpg", () => { 
    material.opacity = 1 
  }),
})

// changes position and rotation
var flag = new THREE.Mesh( geometry, material )
flag.rotation.set(-0.1, 0, 0)

scene.add(flag)

camera.position.z = 4
camera.position.y = -0.5

const clock = new THREE.Clock()

// this function control the animation
function animate() {
  const time = clock.getElapsedTime()
  
  flag.geometry.vertices.map(v => {    
    const multipler = ((v.x + 2.5) / 5)
    
    const wave1 = 0.5 * Math.sin(0.5 * v.x + time * 2)
    const wave2 = 0.2 * Math.sin(2 * v.x + time * 3)
    
    v.z = (wave1 + wave2) * multipler
  })
  
  flag.geometry.verticesNeedUpdate = true 
  
	requestAnimationFrame( animate )
	renderer.render( scene, camera )
}

// calling the function
animate()

// resize the flag when the window size changes
window.addEventListener("resize", function () {
  camera.aspect = section.clientWidth / section.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(section.clientWidth, section.clientHeight)
})
//--------------------------------------------------------------------------------------------------------------------------------//

/**
 * This code moves the sushi to Pikachus's month
 */

$("#feed").click(function (){
    $("#sushi").animate({left: '-120px'});
    $("#sushi").animate({opacity: '0'});
    $("#sushi").animate({left: '-520'});
    $("#sushi").animate({opacity: '100'});
});
