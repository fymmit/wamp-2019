import React from 'react'

const Course = (props) => {
    return (
        <div>
            <Header name={props.course.name} />
            <Contents parts={props.course.parts} />
            <Total parts={props.course.parts} />
        </div>
    )
}

const Header = (props) => {
    return (
        <h1>{props.name}</h1>
    )
}

const Contents = (props) => {
    const parts = props.parts.map(part => {
        return (
            <Part
                part={part}
                key={part.name} />
        )
    })
    return (
        <div>
            {parts}
        </div>
    )
}

const Part = (props) => {
    return (
        <p>{props.part.name} {props.part.exercises}</p>
    )
}

const Total = (props) => {
    let total = 0
    for (const part of props.parts) {
        total += part.exercises
    }
    return (
        <p>Total {total} exercises</p>
    )
}

export default Course