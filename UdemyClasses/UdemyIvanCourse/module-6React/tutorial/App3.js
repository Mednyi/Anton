import React, {Component} from 'react';
import { ReactDOM } from 'react-dom';
import {Container} from 'react-bootstrap';
import './App.css';

class Form extends Component {

    render() {
        return (
            <Container>
                <form className="w-50 border mt-5 p-3 m-auto"
                style={{'overflow': 'hidden',
                        'position': 'relative'}}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input  type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <Portal>
                        <Msg/>
                    </Portal>
                </form>
            </Container>
        )
    }
}

const Portal = (props) => {
    const node = document.createElement('div');
    document.body.append(node);

    return ReactDOM.createPortal(props.children, node);
}

const Msg = () => {
    return (
        <div
            style={{'width': '500px',
                    'height': '150px',
                    'backgroundColor': 'red',
                    'position': 'absolute',
                    'right': '-50%',
                    'bottom': '-50%'}}>
                Hello
        </div>
    )
}

function App() {
    return (
        <Form/>
    );
}

export default App;
