$( function() {
	$("#imageContent").hide();


	var control=false;;
	var mousx=0;
	var mousy=0;
	var imagewidth=200;
	var imageheight=200;
	var imgleft=0;
	var imgtop=0;
	var divControl;

	function leftDNext (ev){
		var leftval=(imgleft-(mousx-ev.clientX)) ;
		var obj1={left: leftval+'px', width: (imagewidth+(mousx-ev.clientX))+'px'};
		var obj2={left: (leftval-15)+'px'};
		$("#topLeftD").css(obj2);
		$("#bottomLeftD").css(obj2);
		$("#topD").css(obj1);
		$("#bottomD").css(obj1);
		$("#image").css(obj1);
		$("#leftD").css(obj2);
	}
	function topDNext(ev){
		var topval=(imgtop-(mousy-ev.clientY)) ;
		var obj={top: topval+'px', height: (imageheight+(mousy-ev.clientY))+'px'};
		var obj2={top: (topval-15)+'px'};
		$("#topLeftD").css(obj2);
		$("#topRightD").css(obj2);
		$("#leftD").css(obj);
		$("#rightD").css(obj);
		$("#image").css(obj);
		$("#topD").css(obj2);
	}
	function rightDNext(ev){
		var rightval=(imgleft+(ev.clientX-mousx)+imagewidth);
		var obj={ width: (imagewidth+(ev.clientX-mousx))+'px'};
		var obj2={left: rightval+'px'};
		$("#topRightD").css(obj2);
		$("#bottomRightD").css(obj2);
		$("#topD").css(obj);
		$("#bottomD").css(obj);
		$("#image").css(obj);
		$("#rightD").css(obj2);
	}
	function bottomDNext(ev){
		var bottomval=(imgtop-(mousy-ev.clientY)+imageheight) ;
		var obj={ height: (imageheight+(ev.clientY-mousy))+'px'};
		var obj2={top: (bottomval)+'px'};
		$("#bottomLeftD").css(obj2);
		$("#bottomRightD").css(obj2);
		$("#leftD").css(obj);
		$("#rightD").css(obj);
		$("#image").css(obj);
		$("#bottomD").css(obj2);
	}

	$("body").mousedown(function(event){
		control=true;
		mousx=event.clientX;
		mousy=event.clientY;
		divControl=event;
		imgleft=parseInt($("#image").css("left"), 10);
		imgright=parseInt($("#image").css("right"), 10);
		imgtop=parseInt($("#image").css("top"), 10);

		imagewidth=parseInt($("#image").css("width"), 10);
		imageheight=parseInt($("#image").css("height"), 10);

		//console.log("x = "+mousx+"  y = "+mousy);
		
	});

	$("body").mousemove(function(ev){
			if(control){
				//console.log("mousemove : "+divControl.target.id);
				if(divControl.target.id=="leftD"){
					leftDNext (ev);
				}
				else if(divControl.target.id=="rightD"){
					rightDNext(ev);
				}
				else if(divControl.target.id=="topD"){
					topDNext(ev);
				}
				else if(divControl.target.id=="bottomD"){
					bottomDNext(ev);
				}
				else if(ev.target.id=="bottomLeftD"){
					leftDNext (ev);
					bottomDNext(ev);
				}
				else if(ev.target.id=="bottomRightD"){
					bottomDNext(ev);
					rightDNext(ev);
				}
				else if(ev.target.id=="topLeftD"){
					topDNext(ev);
					leftDNext (ev);
				}
				else if(ev.target.id=="topRightD"){
					topDNext(ev);
					rightDNext(ev);
				}
			}
		})
	$("body").mouseup(function(event ){
			//console.log("x = "+mousx+"  y = "+mousy);
				control=false;
				//console.log("mouseup");
				});
	

	function readURL(input) {

	    if (input.files && input.files[0]) {
	        var reader = new FileReader();

	        reader.onload = function (e) {
	            $('#image').attr('src', e.target.result);
	            $("#imageContent").show();
	        };

	        reader.readAsDataURL(input.files[0]);
	    }
	}

	$("#imgInput").change(function(){
		$(".formImage").hide();
	    readURL(this);
	});

});

