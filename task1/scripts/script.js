$(document).ready(function(){
	//initializing
	$("#myRange1").attr({min:1,max:255,value:127});
	$("#myRange2").attr({min:1,max:255,value:127});
	$("#myRange3").attr({min:1,max:255,value:127});
	$("#myRange3Min").val($("#myRange2Min").val($("#myRange1Min").val(1).val()).val());
	$("#myRange3Max").val($("#myRange2Max").val($("#myRange1Max").val(255).val()).val());
	$("#space").css("background-color", "rgb("+$("#myRange1").val()+","+$("#myRange2").val()+","+$("#myRange3").val()+")");
	//control max and min
	function maxValue(val, obj){
		if ( val > 255 ) {
			obj.val(255);
			return 255
		}
		else {
			return val;
		}
	}
	function minValue(val, obj){
		if ( val < 1 ) {
			obj.val(1);
			return 1;
		}
		else {
			return val;
		}
	}
	//change max and min
	$('#myRange1Min').change(function() {
		$("#myRange1").attr({min: minValue( $('#myRange1Min').val() ,$('#myRange1Min')) }); 
	});
	$('#myRange1Max').change(function() {
	 	$("#myRange1").attr({ max : maxValue( $('#myRange1Max').val() ,$('#myRange1Max')) }); 
	});

	$('#myRange2Min').change(function() {
	 	$("#myRange2").attr({min: minValue( $('#myRange2Min').val() ,$('#myRange2Min')) });
	});
	$('#myRange2Max').change(function() {
		$("#myRange2").attr({max:maxValue( $('#myRange2Max').val() ,$('#myRange2Max'))});
	});

	$('#myRange3Min').change(function() {
		$("#myRange3").attr({min: minValue( $('#myRange3Min').val() ,$('#myRange3Min')) });
	});
	$('#myRange3Max').change(function() {
		$("#myRange3").attr({max:maxValue( $('#myRange3Max').val() ,$('#myRange3Max'))});
	});

//change Range
	function changeRange(){
		var rgbval="rgb("+$("#myRange1").val()+","+$("#myRange2").val()+","+$("#myRange3").val()+")";
		$("#space").css("background-color", rgbval);
		$("#colerView").val(rgbval);
	}
	$("#myRange1").change(function(){
		changeRange();
	});
	$("#myRange2").change(function(){
		changeRange();
	});
	$("#myRange3").change(function(){
		changeRange();
	});
   
});