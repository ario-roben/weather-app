
import React, { Component } from 'react';
import './Paging.css';

class Paging extends Component {
     constructor(props) {
          super(props);
     }

     setPageNumber(num) {
          this.props.setPageNumber(num);
     }

     render() {
         
          if(this.props.pageCount == 1){
               return <> </>
          }
          if(this.props.pageCount == 0){
               return <> {'No Result Found'} </>
          }
          return (
               <>
                    <span className='page' onClick={() => this.setPageNumber(1)}>1</span>
                    {
                         this.props.pageNumber > 3 &&
                         <span className='page'>...</span>
                    }
                    {
                         (this.props.pageNumber - 1) > 1 &&
                         <span className='page' onClick={() => this.setPageNumber(this.props.pageNumber - 1)}>{this.props.pageNumber - 1}</span>
                    }
                    {
                         this.props.pageNumber != 1 &&
                         <span className='page' onClick={() => this.setPageNumber(this.props.pageNumber)}>{this.props.pageNumber}</span>
                    }
                    {
                         (this.props.pageNumber + 1) < this.props.pageCount &&
                         <span className='page' onClick={() => this.setPageNumber(this.props.pageNumber + 1)}>{this.props.pageNumber + 1}</span>
                    }
                    {
                         (this.props.pageNumber + 2) < this.props.pageCount &&
                         <span className='page'>...</span>
                    }
                    {
                         this.props.pageCount > 1 &&
                         < span className='page' onClick={() => this.setPageNumber(this.props.pageCount)}>{this.props.pageCount}</span>
                    }
               </>
          )
     }
}
export default Paging;