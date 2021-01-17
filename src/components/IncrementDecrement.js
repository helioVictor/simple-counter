import React, { useState } from 'react'
import styled from 'styled-components'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

function IncrementDecrement () {
    const [counter, setCounter] = useState(0);

    const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-width: 30rem;
    height: 100vh;
    min-height: 25rem;
    `

    const Counter = styled.div`
    display: grid;
    grid-template-columns: 0.3fr 1fr 0.3fr;
    width: 30rem;
    height: 25rem;
    `

    const ArrowLeftRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    cursor: pointer;
    color: #e0d5fd;
    `

    const CounterValueContainer = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
    font-size: 7rem;
    width: 80%;
    height: 60%;
    margin: 0 auto;
    background: #865cfe;
    color: #eee7fd;
    border-radius: 4rem;
    font-weight: 700;
    box-shadow: 0.5rem 1rem 0 0 #e0d5fd;
    `

    return <Container>
        <Counter> 
            <ArrowLeftRight onClick={() => counter<=0 ? setCounter(999) : setCounter(counter - 1)}> <LeftOutlined /> </ArrowLeftRight>
            <CounterValueContainer> {counter} </CounterValueContainer>
            <ArrowLeftRight onClick={() => counter>=999 ? setCounter(0) : setCounter(counter + 1)}> <RightOutlined /> </ArrowLeftRight>
        </Counter>
    </Container>
}

export default IncrementDecrement;