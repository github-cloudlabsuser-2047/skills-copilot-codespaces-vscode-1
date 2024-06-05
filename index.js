import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;

const reverseSentence = (sentence) => {
    const reversed = sentence.split('').reverse().join('');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
};

const inputSentence = 'Hello, world!';
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence);
data.forEach((group) => {
    group.forEach((person) => {
        console.log(person.name);
        console.log(person.age);
    });
});
const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 }
    ],
    [
        { name: 'Bob', age: 35 },
        { name: 'Alice', age: 40 }
    ]
];

data.forEach((group) => {
    group.forEach((person) => {
        console.log(person.name);
    });
});
const names = data.flatMap(group => group.map(person => person.name));
console.log(names);