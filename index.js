document.addEventListener('click', function(){
	document.getElementById('contoh2').innerHTML="Sukses! Merubah addEvenListener";
})
function tombol(){
	var a = document.activeElement.tagName;
	document.getElementById('contoh1').innerHTML = a;
	var b = document.anchors.length;
	document.getElementById('contoh3').innerHTML = b;

}
