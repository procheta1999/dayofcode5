function upDate(previewPic){
    var alt = previewPic.getAttribute( "alt" );
    document.getElementById('image').innerHTML =alt;
    var src = previewPic.getAttribute( "src" );
    document.getElementById('image').style.backgroundImage = "url('" + src + "')";
}
	function unDo(){
        document.getElementById('image').innerHTML = "Hover over an image below to display here";
		document.getElementById('image').style.backgroundImage = "url('')";
	}