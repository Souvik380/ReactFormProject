import React from "react"
import './App.css';
import Spiderman from "./Images/spiderman.jpg"
import Superman from "./Images/Superman.jpg"
import Deadpool from "./Images/DeadPool.jpg"
import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";
import ThirdPage from "./Components/ThirdPage";
import FirstPageHead from "./Components/FirstPageHead";
import SecondPageHead from "./Components/SeaddcondPageHead";
import ThirdPageHead from "./Components/ThirdPageHead";
import SubmitForm from "./Components/SubmitForm";


class App extends React.Component{
  constructor(){
    super()

    this.state={
      image:Spiderman,
      page:1,
    }
  }

  clickHandler=()=>{
      let val=this.state.page+1
      this.setState({
        page:(val>=5?1:val),
        image:((val>=5 || val===1)?Spiderman:(val===2?Superman:Deadpool))
      })
  }

  prevPage=()=>{
    let val=this.state.page-1
    this.setState({
      page:(val<=0?3:val),
      image:((val>=5 || val===1)?Spiderman:(val===2?Superman:Deadpool))
    })
  }

  changeState=(flag)=>{
    if(flag){
      this.clickHandler()
    }
  }


  render(){
    const image=this.state.image
    const page=this.state.page
    
    return(
        <div className="App flex ">

          {page<=3?(<div className="flex h-full justify-around items-end">
            <img src={image} className="bg-center h-full rounded-[10px]"/>

            <div className="ml-0 bg-gray-200 rounded-[10px] flex flex-col h-full justify-around">

              <div className="ml-4">
              {
                  page===1?<FirstPageHead />:(page===2?<SecondPageHead />:<ThirdPageHead />)
              }
              
              </div>

              <div className="ml-4 object-contain h-[fit-content]">
                {
                  page===1?<FirstPage onChange={(flag)=>this.changeState(flag)} />:(page===2?<SecondPage onChange={(flag)=>this.changeState(flag)} />:<ThirdPage onChange={(flag)=>this.changeState(flag)} />)
                }

                {/* <ThirdPage /> */}
                
              </div>

              <div className="absolute mt-[360px] ml-[170px]">
                {
                  page!==1?(<button onClick={()=>this.prevPage()} className="decoration-black font-bold text-xl mr-4">Back</button>):(<p></p>)
                }

              </div>
            </div>

          </div>):<SubmitForm onChange={(flag)=>this.changeState(flag)} />}          
        </div>
      )
  }
} 

export default App;
