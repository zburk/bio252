$(document).ready(function () {
  var q1answer, q3answer;
  setup();

  // Question 1 validation
  $('#question-1').on('change textInput input', function () {
    if ($( "#question-1" )[0].value.toLowerCase() === q1answer) {
      setCorrect('#question-1');
    } else {
      setIncorrect('#question-1');
    }
  });

  // Question 2 validation
  $('#question-2').on('change textInput input', function () {
    var studentAnswers = $('#question-2')[0].value.toLowerCase().split(',').map(function(item) {
      return item.trim();
    });

    if (studentAnswers.includes('trigger zone')) {
      setCorrect('#question-2');
    } else {
      setIncorrect('#question-2');
    }
  });

  // Question 3 validation
  $('#question-3').on('change textInput input', function () {
    if ($('#question-3')[0].value === q3answer) {
      setCorrect('#question-3');
    } else {
      setIncorrect('#question-3');
    }
  });

  // Question 4 validation
  $('.question-4-inputs').on('change textInput input', function () {
    if (
        $('#question-4-na')[0].value === '>' &&
        $('#question-4-k')[0].value === '<' &&
        $('#question-4-hpo')[0].value === '<' &&
        $('#question-4-cl')[0].value === '>'
      ) {
      setCorrect('#question-4-na');
      setCorrect('#question-4-k');
      setCorrect('#question-4-hpo');
      setCorrect('#question-4-cl');
    } else {
      setIncorrect('#question-4-na');
      setIncorrect('#question-4-k');
      setIncorrect('#question-4-hpo');
      setIncorrect('#question-4-cl');
    }
  });

  // Question 5 validation
  $('.question-5-inputs').on('change textInput input', function () {
    var SOLUTIONS = {
      LP: 'LP',
      AP: 'AP'
    };

    if (
        $('#question-5-1')[0].value === SOLUTIONS.LP &&
        $('#question-5-2')[0].value === SOLUTIONS.AP &&
        $('#question-5-3')[0].value === SOLUTIONS.LP &&
        $('#question-5-4')[0].value === SOLUTIONS.AP &&
        $('#question-5-5')[0].value === SOLUTIONS.LP &&
        $('#question-5-6')[0].value === SOLUTIONS.LP &&
        $('#question-5-7')[0].value === SOLUTIONS.AP &&
        $('#question-5-8')[0].value === SOLUTIONS.LP &&
        $('#question-5-9')[0].value === SOLUTIONS.AP &&
        $('#question-5-10')[0].value === SOLUTIONS.LP &&
        $('#question-5-11')[0].value === SOLUTIONS.AP &&
        $('#question-5-12')[0].value === SOLUTIONS.AP
      ) {
      setCorrect('#question-5-1');
      setCorrect('#question-5-2');
      setCorrect('#question-5-3');
      setCorrect('#question-5-4');
      setCorrect('#question-5-5');
      setCorrect('#question-5-6');
      setCorrect('#question-5-7');
      setCorrect('#question-5-8');
      setCorrect('#question-5-9');
      setCorrect('#question-5-10');
      setCorrect('#question-5-11');
      setCorrect('#question-5-12');
    } else {
      setIncorrect('#question-5-1');
      setIncorrect('#question-5-2');
      setIncorrect('#question-5-3');
      setIncorrect('#question-5-4');
      setIncorrect('#question-5-5');
      setIncorrect('#question-5-6');
      setIncorrect('#question-5-7');
      setIncorrect('#question-5-8');
      setIncorrect('#question-5-9');
      setIncorrect('#question-5-10');
      setIncorrect('#question-5-11');
      setIncorrect('#question-5-12');
    }
  });

  // Question 6 validation
  $('#question-6').on('change textInput input', function () {
    var paragraph = $('#question-6')[0].value.toLowerCase().replace(/\./g,' ');
    var studentAnswers = paragraph.split(' ').map(function(item) {
      return item.trim();
    });

    if (
      (studentAnswers.includes('photoreceptor') || studentAnswers.includes('photoreceptors')) &&
      (studentAnswers.includes('color') || studentAnswers.includes('colors')) &&
      (studentAnswers.includes('bright') || studentAnswers.includes('day') || studentAnswers.includes('daylight'))
    ) {
      setCorrect('#question-6');
    } else {
      setIncorrect('#question-6');
    }
  });

  function setup() {
    // Load up question 1
    var q1rmp = calculateRMP();
    var q1threshold = calculateThreshold();
    var q1max = calculateMax();
    $('#question-1-rmp').append(q1rmp);
    $('#question-1-threshold').append(q1threshold);
    $('#question-1-max').append(q1max);

    if (q1rmp + 10 >= q1threshold) {
      q1answer = 'yes';
    } else {
      q1answer = 'no';
    }

    // Load up question 3
    var q3rmp = calculateRMP();
    var q3threshold = calculateThreshold();
    var q3max = calculateMax();
    $('#question-3-rmp').append(q3rmp);
    $('#question-3-threshold').append(q3threshold);
    $('#question-3-max').append(q3max);

    q3answer = Math.max(0, q3threshold - q3rmp).toString();

    // Load up question 4
    var question4 = [
      `<td>Na<sup>+</sup></td>
        <td>Out of the cell</td>
        <td><input type="text" class="form-control question-4-inputs" id="question-4-na" aria-describedby="question-4-na" placeholder="Answer"></td>
        <td>In the cell</td>`,
      `<td>K<sup>+</sup></td>
        <td>Out of the cell</td>
        <td><input type="text" class="form-control question-4-inputs" id="question-4-k" aria-describedby="question-4-k" placeholder="Answer"></td>
        <td>In the cell</td>`,
      `<td>Cl<sup>-</sup></td>
        <td>Out of the cell</td>
        <td><input type="text" class="form-control question-4-inputs" id="question-4-cl" aria-describedby="question-4-cl" placeholder="Answer"></td>
        <td>In the cell</td>`,
      `<td>HPO<sup>-</sup></td>
        <td>Out of the cell</td>
        <td><input type="text" class="form-control question-4-inputs" id="question-4-hpo" aria-describedby="question-4-hpo" placeholder="Answer"></td>
        <td>In the cell</td>`
    ];

    var numQuestion4 = question4.length;
    for (var i = 0; i < numQuestion4; i++) {
      var item = randomItem(question4);
      $('#question-4-table').append('<tr>' + item + '</tr>');
      question4.splice($.inArray(item, question4), 1);
    }

    // Load up question 5
    var question5 = [
      '<td><input type="text" class="form-control question-5-inputs" id="question-5-1" aria-describedby="question-5" placeholder="Answer"></td><td>Produced by gated channels on the dendrites and soma</td>',
      '<td><input type="text" class="form-control question-5-inputs" id="question-5-2" aria-describedby="question-5" placeholder="Answer"></td><td>All or none; either does not occur at all or exhibits the same peak voltage regardless of stimulus strength</td>',
      '<td><input type="text" class="form-control question-5-inputs" id="question-5-3" aria-describedby="question-5" placeholder="Answer"></td><td>Reversible; returns to RMP if stimulation ceases before threshold is reached</td>',
      '<td><input type="text" class="form-control question-5-inputs" id="question-5-4" aria-describedby="question-5" placeholder="Answer"></td><td>Self-propagating; has effects a great distance from point of origin</td>',
      '<td><input type="text" class="form-control question-5-inputs" id="question-5-5" aria-describedby="question-5" placeholder="Answer"></td><td>Decremental; signal grows weaker with distance</td>',
      '<td><input type="text" class="form-control question-5-inputs" id="question-5-6" aria-describedby="question-5" placeholder="Answer"></td><td>Graded; proportional to stimulus strength</td>',
      '<td><input type="text" class="form-control question-5-inputs" id="question-5-7" aria-describedby="question-5" placeholder="Answer"></td><td>Irreversible; goes to completion once it begins</td>',
      '<td><input type="text" class="form-control question-5-inputs" id="question-5-8" aria-describedby="question-5" placeholder="Answer"></td><td>Local; has effects for only a short distance from point of origin</td>',
      '<td><input type="text" class="form-control question-5-inputs" id="question-5-9" aria-describedby="question-5" placeholder="Answer"></td><td>Always begins with depolarization</td>',
      '<td><input type="text" class="form-control question-5-inputs" id="question-5-10" aria-describedby="question-5" placeholder="Answer"></td><td>May be a positive (depolarizing) or negative (hyperpolarizing) voltage change</td>',
      '<td><input type="text" class="form-control question-5-inputs" id="question-5-11" aria-describedby="question-5" placeholder="Answer"></td><td>Produced by voltage-gated channels on the trigger zone and axon</td>',
      '<td><input type="text" class="form-control question-5-inputs" id="question-5-12" aria-describedby="question-5" placeholder="Answer"></td><td>Nondecremental; signal maintains same strength regardless of distance</td>'
    ];

    var numQuestion5 = question5.length;
    for (var i = 0; i < numQuestion5; i++) {
      var item = randomItem(question5);
      $('#question-5-table').append('<tr>' + item + '</tr>');
      question5.splice($.inArray(item, question5), 1);
    }
  }

  function setCorrect(id) {
    $(id).addClass('text-success');
    $(id).removeClass('text-danger');
  }

  function setIncorrect(id) {
    $(id).removeClass('text-success');
    $(id).addClass('text-danger');
  }

  function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function calculateRMP() {
    return -1 * Math.floor(Math.random() * 100);
  }

  function calculateThreshold() {
    return -1 * Math.floor(Math.random() * 100);
  }

  function calculateMax() {
    return Math.floor(Math.random() * 100);
  }
});
