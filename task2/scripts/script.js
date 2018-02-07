 $( function() {
 
  $('#sortable').hide();
	var mans =new Array();
	var inputnumber=1;
	$("#but").click(function(){
		if($("#name1").val()!==""){
			mans.push($("#name1").val());
			$("#name1").val("");
		}else{
			alert("Add people names");
		}

		if(mans.length>6){
			$('#sortable').html("");
			for(i=0;i<mans.length;i++){
				$('#sortable').append("<li class='nameBloc ' id='item_"+(i+1) +"'><span class='ui-icon ui-icon-arrowthick-2-n-s'></span>"+mans[i]+"</li>");
			}
			$( "#sortable" ).sortable({
					    axis: 'y',
					    update: function (event, ui) {
					        var data = $("#sortable").sortable('serialize');
					       	data='&'+data;
					      	data= data.split('&item[]=');
					     	var arr=new Array();
						    for(i=0;i<mans.length;i++){
						     	arr[i]=mans[data[i+1]-1];
						    }
						       mans=arr;
					    }
					});
   			alert($( "#sortable" ).sortable( "toArray" ));
   			$('#sortable').show();
		}
	})

  } );

 