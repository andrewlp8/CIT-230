var myRequest = new XMLHttpRequest();
myRequest.open('GET', '');
myRequest.onload = function () {
    var data = JSON.parse(myRequest.responseText);

    $(function(){

		var temple = data.temple;

	$.each( temple, function( index, element){
        // $('.templeTextContainer').append('<li>Temple ' + element.name + ' </li>' + "<li>" + element.closures + "</li>");
        console.log("Test data" + element.name);
	})
	})
}