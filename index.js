var questions = [{
		"question": "What nationality was Claude Monet?",
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
var template = `<p id="question"></p>
				<p>Choose one of the following:</p>
				<form>
					<ul class="list">
						<li>
							<label for="a1"></label>
							<input type="radio" name="q1" value="1" />
						</li>
						<li>
							<label for="a2"></label>
							<input type="radio" name="q2" value="1" />
						</li>
						<li>
							<label for="a3"></label>
							<input type="radio" name="q2" value="1" />
						</li>
						<li>
							<label for="a4"></label>
							<input type="radio" name="q2" value="1" />
						</li>
					</ul>
					<input type="submit" value="Answer" />
				</form>`

function loadQuestion() {

	var toAppend = $(template)
	toAppend.find("#question").text(questions[counter].question)
	toAppend.find("label[for='a1']").text(Object.values(questions[counter].answers[0]))
	toAppend.find("label[for='a2']").text(Object.values(questions[counter].answers[1]))
	toAppend.find("label[for='a3']").text(Object.values(questions[counter].answers[2]))
	toAppend.find("label[for='a4']").text(Object.values(questions[counter].answers[3]))
	// put data into a template
	// update values
	// put into DOM
	$('.questions').html(toAppend)
	counter++
}

$(function() {
	console.log(questions[counter].question)
	loadQuestion()	
})



// start clickhandler
	// hide .start-message
	// show .question
	// loadQuestion()

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