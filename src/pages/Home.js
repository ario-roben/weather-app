import { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../layouts/Header/Header';
import Station from '../components/Station/Station';
import Paging from '../components/Paging/Paging';
import { fetchStations,searchStation } from '../redux/ActionCreators';
import SideBar from '../layouts/Sidebar/Sidebar';

const mapStateToProps = state => {
  return {
    stations: state.stations,
  }
}
const mapDispatchToProps = dispatch => ({
  fetchStations: () => {
    dispatch(fetchStations())
  },
  searchStation:(query)=> dispatch(searchStation(query))
});

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNumber: 1,
      pageSize: 9
    }
  }

  componentDidMount() {
    this.props.fetchStations();
  }

getStations(){
  return this.props.stations.results
}

  getSlice() {
    const start = (this.state.pageNumber - 1) * this.state.pageSize;
    const end = start + this.state.pageSize;
    return this.getStations().slice(start, end)
  }

  getPageCount() {
    return Math.ceil(this.getStations().length / this.state.pageSize);
  }

  render() {
    return (
         <div className='container-fluid h-100'>
        
        <Header />
       
            <div className='row d-flex h-100'> 
            <div className='col-md-2 '  >
              <SideBar searchStation={this.props.searchStation} />
            </div>
  
          <div className='col-md-10 ' >  
            <div className='row'>
            {
              this.getSlice().map(entity =>
                <Station key={entity.id} station={entity} />
              )
            }
          </div>
          <div className='row'>
            <div className='m-auto'>
              <Paging
                pageNumber={this.state.pageNumber}
                pageCount={this.getPageCount()}
                setPageNumber={num => this.setState({ pageNumber: num })}
              />
            </div>
          </div>
          </div>
    </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
