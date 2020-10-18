import { Component, OnInit } from '@angular/core';
declare var THREE;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.animar();
  }
  animar() {
    console.log("render");
    // buscamos el div con id canvas
    var scene3d = document.getElementById("canvas");
    //creamos la escena
    var scene = new THREE.Scene();
    //cambiar color de fonso de escena
    scene.background = new THREE.Color(0x2a3b4c);
    //creamos la camara
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // creamos el rederizador
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    //renderizamos en la etiqueta que elegimos
    scene3d.appendChild(renderer.domElement);

    //para crear cubo necesitamos el tipo de geometryi y su material
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe:true });
    // luego le  ponemos las caracterisitcas el cubo
    var cube = new THREE.Mesh(geometry, material);
    //agregamos el cubo a la escena
    scene.add(cube);
    //cambiamos las pos de la camara para que no quede en la misma pos del cubo
    camera.position.z = 5;

//redimensionar canvas
window.addEventListener('resize',redimensionar);

function redimensionar(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);

}

    //::::::::::::::::::::::::::::::::animacion::::::::::::::::::::::::::::::::::::::::::
    var animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
    //::::::::::::::::::::::::::::::::animacion::::::::::::::::::::::::::::::::::::::::::
  }

}
