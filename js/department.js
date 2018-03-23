$(function(){
	$('.dept-members').hide();

	$('body').on('click', '.dept', function(){
		$('#dept-dialog-title').text($(this).find('.dept-name').text());
		$('#dept-dialog-body').html($(this).find('.dept-members').html());
		$('#dept-dialog-body').css('text-align', 'center');
		$('#dept-dialog').modal({show: true});
	});
});