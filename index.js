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
				<form>
					<ul class="list">
						<li>
							<label for="a1"></label>
							<input type="radio" name="ans" value="1" />
						</li>
						<li>
							<label for="a2"></label>
							<input type="radio" name="ans" value="2" />
						</li>
						<li>
							<label for="a3"></label>
							<input type="radio" name="ans" value="3" />
						</li>
						<li>
							<label for="a4"></label>
							<input type="radio" name="ans" value="4" />
						</li>
					</ul>
					<input type="submit" value="Answer" />
				</form>
				</div>`

function loadQuestion() {
	var toAppend = $(template)
	toAppend.find("#question").text(questions[counter].question)
	toAppend.find("label[for='a1']").text(Object.values(questions[counter].answers[0]))
	toAppend.find("label[for='a2']").text(Object.values(questions[counter].answers[1]))
	toAppend.find("label[for='a3']").text(Object.values(questions[counter].answers[2]))
	toAppend.find("label[for='a4']").text(Object.values(questions[counter].answers[3]))
	$('.questions').html(toAppend)
	counter++
}

var userAnswer = $("input[name = 'ans']:checked").val()

function correctAnswer() {
	
}

// question clickhandler
	// get users answer
	// compare answer to actual answer
	// if they equal each other increment score counter
	// if counter < questions.length
		// loadQuestion()
	// else
		// hide .question
		// Insert score into restart-message
		// show .restart-message

// restart clickhandler
	// reset counter
	// reset score
	// hide restart-message
	// show .question
	//  loadQuestion()

	function hideStart() {
	$('#start-button').hide()
	$('.start-message').hide()
}



$(function() {
	$('#start-button').click( function(event) {
    event.preventDefault();
    hideStart();
    loadQuestion();

})
});