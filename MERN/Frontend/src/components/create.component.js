import React, {Component} from 'react';
import Axios from 'axios';


export default class create extends Component {

   constructor(props) {
      super(props);

      this.onChangefullname = this.onChangefullname.bind(this);
      this.onChangeemail = this.onChangeemail.bind(this);
      this.onChangemobile = this.onChangemobile.bind(this);
      this.onChangecity = this.onChangecity.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
         fullname: '',
         email: '',
         mobile: '',
         city: '',
      }
   }

   onChangefullname(e) {
      this.setState({
         fullname: e.target.value
      });
   }

   onChangeemail(e) {
      this.setState({
         email: e.target.value
      });
   }

   onChangemobile(e) {
      this.setState({
         mobile: e.target.value
      });
   }

   onChangecity(e) {
      this.setState({
         city: e.target.value
      });
   }

   onSubmit(e) {
      e.preventDefault();

      console.log(`Form submitted:`);
      console.log(`fullname: ${this.state.fullname}`);
      console.log(`email: ${this.state.email}`);
      console.log(`mobile: ${this.state.mobile}`);
      console.log(`city: ${this.state.city}`);
      
      const Course ={
          fullname:this.state.fullname,
          email:this.state.email,
          mobile:this.state.mobile,
          city:this.state.city
      }

      Axios.post('http://localhost:4000/course/add', Course) 
          .then(res => console.log(res.data));
      this.setState({
         fullname:'',
         email: '',
         mobile: '',
         city: '',
         
      })
   }

    render() {
        return (
            <div style={{marginTop: 20}}>
               <h3>Course Data</h3>
               <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                     <label>Full Name: </label>
                     <input type="text"
                            className="form-control"
                            value={this.state.fullname}
                            onChange={this.onChangefullname}
                            />
                  </div>
                  <div className="form-group">
                     <label>Email: </label>
                     <input type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeemail}
                            />
                  </div>
                  <div className="form-group">
                     <label>Mobile:</label>
                     <input type="text"
                            className="form-control"
                            value={this.state.mobile}
                            onChange={this.onChangemobile}
                            />
                  </div>
                  <div className="form-group">
                     <label>City:</label>
                     <input type="text"
                            className="form-control"
                            value={this.state.city}
                            onChange={this.onChangecity}
                            />
                  </div>
         
                  <div className="form-group">
                     <input type="submit" value="Submit" className="btn btn-primary"/>
                  </div>
               </form>
                
            </div>

        )
    }
}