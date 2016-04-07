$ = function(element){ return document.querySelector(element);};
var data = [],
	ret = [],
	list = '',
	item = '',
	text = $('#textbox'),
	result = $('#result'),
	button = $('button'),
	hobbies = $('#hobbies');

//part I one in,one out
function render(){
			list = '';
			for (var i = 0; i < data.length; i++) {
				list = list + "<li" + " id = 'list-" + i + "'>" + data[i] + "</li>";
			}
		result.innerHTML = list;
		text.value = "";			
		}	
text.addEventListener('keypress',function(e){
	var code = e.keyCode;
	textbox = $('#textbox').value.trim();
	if (code == 13||code == 9||code==32) {
		data.push(textbox);
		if (data.length>1) {
			for (var i = 0; i < data.length-1; i++) {
				if (data[data.length-1]==data[i]) {
					data.pop();
					break;
				};
			};
		};
		if (data.length>10) {
			data.splice(0,1);
		};
		render();
	};
})
result.addEventListener('click',function(e){
	listId = parseInt(e.target.getAttribute('id').substr(5));
	data.splice(listId,1);
	render();
});

//Part II all in,all out
function output(){
	item = '';
	for(var i = 0;i < ret.length;i++){
		item = item + "<li" + " id = 'item-" + i + "'>" + ret[i] + "</li>";
	}
	hobbies.innerHTML = item;
}
button.addEventListener('click',function(){
	txt = $('#txt').value.trim();
	tag = txt.split(",");
	for (var i = 0; i < tag.length; i++) {
		if (ret.lastIndexOf(tag[i]) == -1) {
			ret.push(tag[i]);
		};
	};
	if (ret.length>10) {
		ret.splice(0,ret.length-10);
	};
	output();
	ret.length=0;
})
