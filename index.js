var questions = [{
		"question": "What nationality was Claude Monet?",
		"correct": 3,
		"answers": [{
			"ans": "Mexican"
		}, {
			"ans": "Irish"
		}, {
			"ans": "French"
		}, {
			"ans": "Italian"
		}]

	}, {
		"question": "Who taught Picasso?",
		"correct": 2,
		"answers": [{
			"ans": "Van Gogh"
		}, {
			"ans": "His father"
		}, {
			"ans": "Cezanne"
		}, {
			"ans": "Andy Warhol"
		}]
	}, {
		"question": "What was Dali's wife's name?",
		"correct": 1,
		"answers": [{
			"ans": "Gala"
		}, {
			"ans": "Frida"
		}, {
			"ans": "Emily"
		}, {
			"ans": "Anna Maria"
		}]
	}, {
		"question": "Matisse did not make art in which medium?",
		"correct": 2,
		"answers": [{
			"ans": "Sculpture"
		}, {
			"ans": "Pottery"
		}, {
			"ans": "Printmaking"
		}, {
			"ans": "Drawing"
		}]
	}, {
		"question": "Where did Da Vinci spend his youth?",
		"correct": 1,
		"answers": [{
			"ans": "Florence"
		}, {
			"ans": "Vinci"
		}, {
			"ans": "Rome"
		}, {
			"ans": "Greece"
		}]
	}]

var counter = 0
var score = 0
var template = `<div>
				<p id="question"></p>
				<p>Choose one of the following:</p>
				<form id="answers">
					
					<p>
						<input type="radio" name="ans" value="1" id="a1"/>
						<label for="a1"></label>
					</p>
					<p>
						<input type="radio" name="ans" value="2" id="a2"/>
						<label for="a2"></label>
					</p>
					<p>
						<input type="radio" name="ans" value="3" id="a3"/>
						<label for="a3"></label>
					</p>
					<p>
						<input type="radio" name="ans" value="4" id="a4"/>
						<label for="a4"></label>
					</p>
					
					<input id="submit" type="button" value="Answer"/>
				</form>
				</div>`

function loadContent() {

	if (counter === questions.length) {
		$('.questions').hide()
		$('.restart-message').show()
		$('.score').append(` ${score} / ${counter}`)
	}

	else {
		var toAppend = $(template)
		toAppend.find("#question").text(questions[counter].question)
		var answers = Object.values(questions[counter].answers)

		answers.forEach(function(answer, i) {
			toAppend.find(`label[for='a${i + 1}']`).text(answers[i].ans)
		}) 

		$('.questions').html(toAppend)
	}
}

function isCorrect() {
	var checkedAnswer = $('input:checked')
	
	if (checkedAnswer.length === 0) {
        alert("Please select an answer");
        event.preventDefault();
    }

    else {
        if (parseFloat(checkedAnswer.val()) === questions[counter].correct) {
        	counter++
        	score++
        }
        else {
        	counter++
        }
    }
}

// (rdr) => a+b 

// const jesse = hello => hello

// var jesse = function(hello) {
// 	return hello
// }

// function jesse(hello) {
// 	return hello
// }

$(function() {
	$('.restart-message').hide()

	$('#start-button').click(function(event) {
    	event.preventDefault();
    	$('.questions').show();
    	$('#start-button').hide()
		$('.start-message').hide()    	
		loadContent();
	});

	$(".questions").on("click", "#submit", function(event) {
		isCorrect();
		loadContent();
	});

	$('#restart-button').click(function(event) {
		event.preventDefault();
		counter = 0
		score = 0
		$('.restart-message').hide()
		$('.start-message').show()
		$('#start-button').show()
	})
});