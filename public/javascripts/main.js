$(document).ready(function() {
	$('#btn').click(function(evt) {
		if ($('#chat_input').val() == "") {
			$('p').remove()
		}else{
			var chat = { id : $('#chat_input').val() }
			$('#form').append('<p>'+$('#chat_input').val()+'</p>')
			$.get('/id',chat,function(data) {
				console.log('send')	
			})
		}
	})
})
