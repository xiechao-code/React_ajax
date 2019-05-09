import React,{Component} from 'react';
import PropTypes from 'prop-types'

class Search extends Component{

  static propTypes ={
    setSearchName:PropTypes.func.isRequired,
  }

  search=()=>{
    //得到输入的关键字
    const setSearchName = this.input.value.trim()
    //搜索
    if(setSearchName){
      this.props.setSearchName(setSearchName)
    }
  }
  render(){
    return(
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" ref={input=>this.input=input} placeholder="enter the name you search"/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}


export default Search