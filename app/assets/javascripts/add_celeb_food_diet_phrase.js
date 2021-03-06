$(function () {
	add_celeb();
	add_food();
	add_diet();
	add_phrase();
});

function add_celeb() {
	$("#new_celeb").on("submit", function (e) {
		url = this.action
		data = {
			'authenticity_token': $("input[name='authenticity_token']").val(),
			'celeb': { 'name': $("#celeb_name").val() }
		}
		e.stopImmediatePropagation();
		$.ajax({
			type: 'POST',
			url: url,
			data: data,
			success: function () {
				$("#celeb_name").val('');
				$("#celeb_list").append(data.celeb.name + "<br>");
			}
		});
		e.preventDefault();
	});
}

function add_food() {
	$("#new_food").on("submit", function (e) {
		url = this.action
		data = {
			'authenticity_token': $("input[name='authenticity_token']").val(),
			'food': {
				'name': $("#food_name").val(),
				'group_id': $("#food_group_id").val(),
				'cals': $("#food_cals").val()
			}
		}

		e.stopImmediatePropagation();
		$.ajax({
			type: 'POST',
			url: url,
			data: data,
			success: function () {
				$("#food_name").val('')
				$("#food_cals").val('')
				$("#food_group_id").val('No group chosen')
				$("#food_list").append(data.food.name + "<br>")
			}
		});
		e.preventDefault();
	});
}

function add_diet() {
	$("#new_diet").on("submit", function (e) {
		url = this.action
		data = {
			'authenticity_token': $("input[name='authenticity_token']").val(),
			'diet': { 'name': $("#diet_name").val() }
		}
		e.stopImmediatePropagation();
		$.ajax({
			type: 'POST',
			url: url,
			data: data,
			success: function () {
				$("#diet_name").val('')
				$("#diet_list").append(data.diet.name + "<br>")
			}
		});
		e.preventDefault();
	});
}

function add_phrase() {
	$("#new_phrase").on("submit", function (e) {
		url = this.action
		data = {
			'authenticity_token': $("input[name='authenticity_token']").val(),
			'phrase': { 'content': $("#phrase_content").val() }
		}
		e.stopImmediatePropagation();
		$.ajax({
			type: 'POST',
			url: url,
			data: data,
			success: function () {
				$("#phrase_content").val('')
				$("#phrase_list").append(data.phrase.content + "<br>")
			}
		});
		e.preventDefault();
	});
}
