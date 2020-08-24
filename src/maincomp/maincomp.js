import React from 'react';
import './maincomp.css';
import {
    BubbleAlgoHandler
} from './Algos/Bubblesort.js';
import {
    MergeAlgoHandler
} from './Algos/Mergesort.js';
import {
    InsertAlgoHandler
} from './Algos/Insertsort.js';
import {
    QuickAlgoHandler
} from './Algos/Quicksort.js';

class Maincomp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            array: []
        };
    }

    componentDidMount() {
        this.resetArr();
    }

    BubblesortHandler() {

        const [anims, sortedarr] = BubbleAlgoHandler(this.state.array.slice());
        const barz = document.getElementsByClassName('bar');

        for (let i = 0; i < anims.length; i++) {

            switch (anims[i][0]) {
                case 0:
                    this.HighlightTwo(anims[i], i, true);
                    break;
                case 1:
                    this.HighlightTwo(anims[i], i, false);
                    break;
                case 2:
                    this.updateHeight(anims[i], i)
                    break;
                default:
                    alert("oops");
            }
        }

        setTimeout(() => {
            this.setState({
                array: sortedarr
            });
            document.getElementById('run').disabled = false;
            document.getElementById('reset').disabled = false;
        }, anims.length * this.getSpeed())
    }

    HighlightTwo(animation, i, boo) {

        const col = (boo) ? 'red' : 'blue';
        const barz = document.getElementsByClassName('bar');
        const [ign, firstElmIndex, secondElmIndex] = animation;
        const barOne = barz[firstElmIndex].style;
        const barTwo = barz[secondElmIndex].style;
        setTimeout(() => {
            barOne.backgroundColor = col;
            barTwo.backgroundColor = col;
        }, i * this.getSpeed());

    }

    getSpeed(){

        return document.getElementById('speed').value;
    }

    updateHeight(animation, i) {
        const [ign3, index, height] = animation;
        const barz = document.getElementsByClassName('bar');
        const barStyle = barz[index].style;
        setTimeout(() => {
            barStyle.height = `${height*6}px`;
        }, i * this.getSpeed());
    }

    MergesortHandler() {
        const [anims, sortedarr] = MergeAlgoHandler(this.state.array.slice());
        const barz = document.getElementsByClassName('bar');

        for (let i = 0; i < anims.length; i++) {

            switch (anims[i][0]) {
                case 0:
                    this.HighlightTwo(anims[i], i, true);
                    break;
                case 1:
                    this.HighlightTwo(anims[i], i, false);
                    break;
                case 2:
                    this.updateHeight(anims[i], i)
                    break;
                default:
                    alert("oops");
            }
        }


        setTimeout(() => {
            this.setState({array: sortedarr});
            document.getElementById('run').disabled = false;
            document.getElementById('reset').disabled = false;
    }, anims.length * this.getSpeed())


    }

    InsertsortHandler() {
        const [anims, sortedarr] = InsertAlgoHandler(this.state.array);

        const barz = document.getElementsByClassName('bar');

        for (let i = 0; i < anims.length; i++) {

            switch (anims[i][0]) {
                case 0:
                    this.HighlightTwo(anims[i], i, true);
                    break;
                case 1:
                    this.HighlightTwo(anims[i], i, false);
                    break;
                case 2:
                    this.updateHeight(anims[i], i)
                    break;
                default:
                    alert("oops");
            }

        }

        setTimeout(() => {
            this.setState({
                array: sortedarr
            });
            document.getElementById('run').disabled = false;
            document.getElementById('reset').disabled = false;
        }, anims.length * this.getSpeed())

    }

    QuicksortHandler() {
        const [anims, sortedarr] = QuickAlgoHandler(this.state.array);
        const barz = document.getElementsByClassName('bar');

        for (let i = 0; i < anims.length; i++) {

            switch (anims[i][0]) {

                case 0:
                    this.HighlightTwo(anims[i], i, true);

                    break;
                case 1:
                    this.HighlightTwo(anims[i], i, false);

                    break;
                case 2:
                    this.updateHeight(anims[i], i)


                    break;
                default:
                    alert("oops");
            }

        }

        setTimeout(() => {
            this.setState({
                array: sortedarr
            });
            document.getElementById('run').disabled = false;
            document.getElementById('reset').disabled = false;
        }, anims.length * this.getSpeed())

    }

    runHandler() {

        document.getElementById('run').disabled = true;
        document.getElementById('reset').disabled = true;

        const selection = document.getElementById('algo').value;

        switch (selection) {
            case 'Bubblesort':
                this.BubblesortHandler();

                break;
            case 'Mergesort':
                this.MergesortHandler();
                break;

            case 'Insertsort':
                this.InsertsortHandler();
                break;

            case 'Quicksort':
                this.QuicksortHandler();
                break;
            default:
                alert("Not Implemented!")

        }

    }



    resetArr() {
        const array = [];
        for (let i = 0; i < 100; i++) {
            array.push(Math.floor(Math.random() * (101)));
        }
        this.setState({
            array: array
        });
    }

    render() {

        const arr = this.state.array;

        return ( <
            >
            <div className="sel">
            <
            button id="run" onClick = {
                () => this.runHandler()
            } > run! < /button> <
            button id="reset" onClick = {
                () => this.resetArr()
            } > reset! < /button>
            </div>
            <div className="sel">
            <p>Algorithims:</p>
            <select id = 'algo' >
            <option > Bubblesort < /option>
            <option > Mergesort < /option>
            <option > Insertsort < /option>
            <option > Quicksort < /option>
            </select>
            </div>
            <div className="sel">
            <p>Animation Speed (Ms):</p>
            <select id = 'speed' >
            <option > 1 < /option>
            <option > 2 < /option>
            <option > 4 < /option>
            <option > 8 < /option>
            <option > 16 < /option>
            <option > 32 < /option>
            <option > 64 < /option>
            </select>
            </div>
            <div className="arraydiv">{
                arr.map((val, idx) => ( <
                    div key = {
                        idx
                    }
                    className = "bar"
                    style = {
                        {
                            height: `${val*6}px`
                        }
                    } > < /div>
                ))
            }
            </div>

            <
            />
        )



    }

}

export default Maincomp;
