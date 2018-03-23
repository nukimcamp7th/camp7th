$(function(){
	$('.activity-content').hide();

	$('body').on('click', '.activity', function(){
		$('#activity-dialog-title').text($(this).find('.activity-title').text());
		$('#activity-dialog-body').html($(this).find('.activity-content').html());
	});
});