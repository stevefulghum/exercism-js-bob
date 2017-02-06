const RESPONSES = {
  1: 'Whatever.',
  2: 'Whoa, chill out!',
  3: 'Sure.',
  4: 'Whatever.',
  5: 'Whatever.',
  6: 'Whoa, chill out!',
  7: 'Whoa, chill out!',
  8: 'Whatever.',
  9: 'Sure.',
  10:'Whoa, chill out!', 
  11:'Whoa, chill out!', 
  12:'Whatever.', 
  13:'Whoa, chill out!', 
  14:'Whatever.', 
  15:'Sure.', 
  16:'Fine. Be that way!', 
  17:'Fine. Be that way!', 
};


class Bob {

  analyzeStatement(statement) {
    let statementAnalysis = {};

    let chars = statement.length;

    // console.log(chars);

    let matches = {};

    matches.caps        = /[A-Z]/;
    matches.lower       = /[a-z]/;
    matches.nums        = /[0-9]/;
    matches.sentence    = /[\.]/;
    matches.exclamation = /[\!]/;
    matches.question    = /[\?]/;
    matches.punct       = /[\\\'\-\,%^*@#$\(\)\^]/;

    matches.caps.count = 0;
    matches.lower.count = 0;
    matches.nums.count = 0;
    matches.sentence.count = 0;
    matches.exclamation.count = 0;
    matches.question.count = 0;
    matches.punct.count = 0;

    for (let i = 0; i < chars; i++) {
      let currentChar = statement.charAt(i);

      for (let match in matches) {
        let tester = matches[match];
        if (tester.test(currentChar)) {
          tester.count++;
        }
      }
    }

    


    return statementAnalysis;
  }

  response(statementType) {
    let response = '';

  }

  hey(statement) {

    let statementAnalysis = analyzeStatement(statement)



    console.log(matches.caps.count);
    console.log(matches.lower.count);
    console.log(matches.nums.count);
    console.log(matches.sentence.count);
    console.log(matches.exclamation.count);
    console.log(matches.question.count);
    console.log(matches.punct.count);


    return response;
  }
}

module.exports = Bob;
