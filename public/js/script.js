var socket = io('http://localhost:3000');

function limpar(){
	$('#msg').val('');
}

$('#formulario').submit(()=>{
				
	socket.emit('send-client', $('#msg').val());
	limpar();
	return false;
});


socket.on('send-client', (msg)=>{
	$("#chat").append(
		$('	<div  class="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg"  ></div>').text(msg)
		
  );
});

socket.on("send-client",  (msg) =>{
  $("#chat1").append($('<div class="bg-green-300 float-right w-3/4 mx-4 my-2 p-2 rounded-lg clearfix"></div>').text(msg1));
});

