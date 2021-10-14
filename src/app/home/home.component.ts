import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public username : String = '';
  type = '';
  name = '';
  location = '';
  email = '';
  count = 0;
  twitterusername = '';
  avatar = '';
  counter()
  {
    this.count++;
  }


  /**async display()
  {
    let x = await this.getData()
    console.log(x);

  }*/

  async getData()
  { 
    try
    {
      await fetch(`https://api.github.com/users/${this.username}`).then(response => response.json()).then(data =>{
        this.type = data.type;
        this.name = data.login;
        this.location = data.location;
        this.email = data.email;
        this.twitterusername = data.twitter_username;
        this.avatar = data.avatar_url
        console.log(data);
    });
    }

    catch(e)
    {
      console.log(e);
    }


  }


}