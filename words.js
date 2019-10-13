const easy = [
    {
        hint1: "Stay connected with anyone",
        hint2: "_ o _ i _ _"
    },
    {
        hint1: "I am the best detective in the whole world",
        hint2: "_ a _ m _ _"
    },
    {
        hint1: "The ultimate goal for people is to satisfy me",
        hint2: "h _ _ g _ _"
    },
    {
        hint1: "This machine makes a lot of work easy",
        hint2: "_ a _ t _ _"
    },
    {
        hint1: "It is not an end, it continues...",
        hint2: "_ e _ _ _ l"
    },
];

const easyAns = [
    'mobile', 
    'batman',
    'hunger',
    'laptop',
    'sequel'
];

const medium = [
    {
        hint1: "Make it bigger",
        hint2: "_ a _ i _ _ z _"
    },
    {
        hint1: "I am here to carry your things",
        hint2: "_ a _ k _ _ c _"
    },
    {
        hint1: "Terrorists on a plane",
        hint2: "h _ _ a _ k _ _"
    },
    {
        hint1: "You can't play without me",
        hint2: "j _ _ s _ _ c _"
    },
    {
        hint1: "Courts give this at the end of a hearing",
        hint2: "j _ _ g _ e _ _"
    },
];

const mediumAns = [
    'maximize',
    'backpack',
    'hijacked',
    'joystick',
    'judgment'
];

const hard = [
    {
        hint1: "A martial art",
        hint2: "k _ _ k _ o _ i _ _"
    },
    {
        hint1: "Only entertainment back in the days",
        hint2: "_ e _ e _ _ s _ _ n"
    },
    {
        hint1: "increased 4x times",
        hint2: "j _ _ g _ e _ _"
    },
    {
        hint1: "You can't play without me",
        hint2: "_ p _ _ t i _ i _ _"
    },
    {
        hint1: "Don't let it move!",
        hint2: "_ m _ o _ i _ _ _ e"
    },
];

const hardAns = [
    'kickboxing',
    'television',
    'immobilize',
    'appetizing',
    'quadrupled'
];

export const getQuestions = (level) => {
    let questions, answers;
    if(level === 'easy') {
        questions = easy;
        answers = easyAns;
    }
    else if(level === 'medium') {
        questions = medium;
        answers = mediumAns;
    }
    else if(level === 'hard') {
        questions = hard;
        answers = hardAns;
    }
    let jumbledWords = questions.map((question, i) => {
        let answer = answers[i];
        let quesArr = answer.split('');
        let jumbled = '';
        while(quesArr.length > 0) {
            jumbled += quesArr.splice(Math.floor(quesArr.length * Math.random()), 1);
        }
        question.word = jumbled;
        return question;
    });
    return jumbledWords;
}

export const getAnswers = (level) => {
    switch(level) {
        case 'easy':
            return easyAns;
            break;
        case 'medium':
            return mediumAns;
            break;
        case 'hard':
            return hardAns;
            break;
    }
}
