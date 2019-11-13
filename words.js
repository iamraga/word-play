const easy = [
    {
        category: "Tech",
        hint1: "Stay connected with anyone",
        hint2: "_ o _ i _ _"
    },
    {
        category: "Character",
        hint1: "I am the best detective in the whole world",
        hint2: "_ a _ m _ _"
    },
    {
        category: "Feeling",
        hint1: "The ultimate goal for people is to satisfy this feeling",
        hint2: "h _ _ g _ _"
    },
    {
        category: "Tech",
        hint1: "Computing you can carry everywhere",
        hint2: "_ a _ t _ _"
    },
    {
        category: "Entertainment",
        hint1: "The franchise continues!",
        hint2: "_ e _ _ _ l"
    },
    {
        category: "Clothing",
        hint1: "Wear it while you ride a bike",
        hint2: "_ a _ k _ _"
    },
    {
        category: "Entertainment",
        hint1: "The ending sequence of a movie",
        hint2: "_ _ i _ a _"
    },
    {
        category: "Inter-Personal",
        hint1: "Keep me to yourself",
        hint2: "_ e _ _ _ t"
    },
    {
        category: "Physics",
        hint1: "Can't create me nor destroy me",
        hint2: "_ n _ r _ _"
    },
    {
        category: "Fantasy",
        hint1: "I'll literally burn you if you piss me off",
        hint2: "_ r _ _ _ n"
    }
];

const easyAns = [
    'mobile', 
    'batman',
    'hunger',
    'laptop',
    'sequel',
    'jacket',
    'climax',
    'secret',
    'energy',
    'dragon'
];

const medium = [
    {
        category: "Action",
        hint1: "Make it bigger",
        hint2: "_ a _ i _ _ z _"
    },
    {
        category: "Everyday use",
        hint1: "I am here to carry your things",
        hint2: "_ a _ k _ _ c _"
    },
    {
        category: "Evil Action",
        hint1: "Taking control of a plane with passengers",
        hint2: "h _ _ a _ k _ _"
    },
    {
        category: "Entertainment Tech",
        hint1: "You can't play without me",
        hint2: "j _ _ s _ _ c _"
    },
    {
        category: "Legal",
        hint1: "The end of a hearing",
        hint2: "j _ _ g _ e _ _"
    },
    {
        category: "Inter-Personal",
        hint1: "A special bond",
        hint2: "_ a _ r _ _ _ e"
    },
    {
        category: "Mathematics",
        hint1: "Without me, proving anything is impossible",
        hint2: "_ _ u _ t _ o _"
    },
    {
        category: "Ancient",
        hint1: "I used to exist in this planet many many years ago",
        hint2: "d _ n _ s _ _ _"
    },
    {
        category: "Action",
        hint1: "The acquisition of knowledge or skills",
        hint2: "_ e _ _ n _ _ g"
    },
    {
        category: "Action",
        hint1: "I'm the best medicine",
        hint2: "_ a _ _ h t _ _"
    }
];

const mediumAns = [
    'maximize',
    'backpack',
    'hijacked',
    'joystick',
    'judgment',
    'marriage',
    'equation',
    'dinosaur',
    'learning',
    'laughter'
];

const hard = [
    {
        category: "Sports",
        hint1: "A martial art",
        hint2: "k _ _ k _ o _ i _ _"
    },
    {
        category: "Entertainment Tech",
        hint1: "Only entertainment back in the days",
        hint2: "_ e _ e _ _ s _ _ n"
    },
    {
        category: "Action",
        hint1: "Don't let it move!",
        hint2: "_ m _ o _ i _ _ _ e"
    },
    {
        category: "Feeling",
        hint1: "Tempt a person to eat",
        hint2: "_ p _ _ t i _ i _ _"
    },
    {
        category: "Math term",
        hint1: "increased 4x times",
        hint2: "_ u _ d _ u _ _ _ d"
    },
    {
        category: "Education",
        hint1: "Educational institution",
        hint2: "_ _ i _ e r _ i _ _"
    },
    {
        category: "Feeling",
        hint1: "You feel me when you get what you love",
        hint2: "_ _ c _ t e _ _ n _"
    },
    {
        category: "Geography",
        hint1: "I am made of gases and surrond the earth",
        hint2: "_ t _ o _ _ h _ _ e"
    },
    {
        category: "Food",
        hint1: "The best dessert on a cheat day",
        hint2: "c _ _ e _ e _ a _ _"
    },
    {
        category: "A common term",
        hint1: "The end of something",
        hint2: "_ _ n _ l _ s _ _ _"
    }
];

const hardAns = [
    'kickboxing',
    'television',
    'immobilize',
    'appetizing',
    'quadrupled',
    'university',
    'excitement',
    'atmosphere',
    'cheesecake',
    'conclusion'
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
