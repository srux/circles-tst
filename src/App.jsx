import React, { Component } from 'react'

//styles
import './styles/app.css';

//images
import magnifierImg from './assets/Magnifier.svg';
import visitarrowImg from './assets/Visit Arrow.svg';

//components
import ReactSvgPieChart from "react-svg-piechart"

class App extends Component {
  
  constructor(props) {
    super(props)
      this.state = {
        circleName:'Circle Name',
        label:'x',
        data:[
          { title: 'One',value: 100, color: '#b9c6ce' },
          { title: 'One',value: 100, color: '#b9c6ce' },
          { title: 'One',value: 100, color: '#6c889a' },
          { title: 'One',value: 100, color: '#6c889a' },
          { title: 'One',value: 100, color: '#c42f2f' },
          { title: 'One',value: 100, color: '#c42f2f' },
          { title: 'One',value: 100, color: '#b9c6ce' },
          { title: 'One',value: 100, color: '#b9c6ce' },
        ]
      }

  }

  
  handleAddData = () => {
    console.log('Added')
    let {data} = this.state
    let newIndicator = { value: 100, color: '#b9c6ce' }
    data.push(newIndicator)
    this.setState({
      ...data,
    })

  }

  handleRemoveData = () => {
    console.log('Removed')
    let {data} = this.state
    data.splice(-1)
   
    this.setState({
      ...data,
    })

  }

  handleCircleName = (e) => {
    let data = this.state.data
    this.setState({
      ...data,
      circleName:e.target.value
    })

  }


  render() {
    let data = this.state.data
    let circleName = this.state.circleName
    return (
      <div className="App">
        <div className="wrapper">
          <div style={{zIndex:'10'}} className="interaction"> 
          <input onChange={this.handleCircleName} placeholder="Dynamic Text" type="text"/>
          <button  onClick={this.handleAddData}> + </button>
          <button  onClick={this.handleRemoveData}> - </button>
        </div>
          <div className="circle outer">
 
          <ReactSvgPieChart onChange={this.handleState}
            data={data}
            strokeWidth={2}
            expandOnHover={false}
            strokeColor="#89b5d0"
          />
          <div className="center-circle"></div>
            <div className="circle inner">          
                <div className="segments">
                    <div className="segment-name">
                  <svg className="circle-path" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 150">
                  <path id="tPath" d="M0,190a140,140,0,0,1,280,0" transform="translate(85 0)" fill="none"/>
                      <text fill="#fff">
                      <textPath  startOffset="50%" textAnchor="middle" letterSpacing="-1" className="circle-name" href="#tPath">
                        {circleName}
                      </textPath>
                    </text>
                    </svg>

                    </div>
                    <div className="segment-tools">
                      <div className="col left">
                        <img src={magnifierImg} alt="Magnifier"/>
                      </div>
                      <div className="col right">
                        <img src={visitarrowImg} alt="Visit"/>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default App;
