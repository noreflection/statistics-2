import { observable, action } from 'mobx';

export default class AuthorsStore {
  @observable authors = [];

  @action
  fetchAuthors() {
    fetch('http://localhost:5001/api/test')
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
        this.authors = data;
        //console.log('state', this.state);
      });
  }
}
