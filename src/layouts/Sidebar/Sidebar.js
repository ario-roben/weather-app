import React ,{ Component}from 'react';
 import './Sidebar.css';

 class SideBar extends Component {
    constructor(props) {
        super(props);
        this.handleQuery = this.handleQuery.bind(this);
    }

    handleQuery(queryValue) {
        
        this.props.searchStation(queryValue)
    }
    render() {
    return(
    <div className="sidebar h-100 p-2 row justify-content-center">
            <div className='row'>
            <input type="search" className='form-control' placeholder="Search Station Name" onChange={event => this.handleQuery(event.target.value)} />
                </div>  
            
        
    </div>
    )}
}

export default SideBar;