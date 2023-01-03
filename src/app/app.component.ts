import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
    setInterval(() => {
      this.tick();
    }, 1000)
  }

  //properties of titles

  title = 'Angular Core';
  stringInterpolation = "String interpolation";
  propertyBinding = "Property Binding";
  eventBinding = "Event Binding";
  dataBindind = "Data Bindind with ngModel";
  controlStructures = "Control Structures"
  classAndStyle = "Class and Style";
  ngClassAndNgStyle = "ngClass And ngStyle";
  dateNow = new Date();

  //Properties of functionality
  btnDisabled = true;
  names: string[] = ["Adan","Andres", "Gustavo", "Bryan", "Ricardo"];
  addNewName = "";
  widthImg=100;

  boxProp = {
    width: 100,
    height: 100,
    background: "green"
  };

  person = {
    name: "Gustavo",
    age: 27,
    avatar: "https://www.w3schools.com/howto/img_avatar.png"
  };

  register = {
    name: '',
    email: '',
    password: ''
  };
  //methods

  buttonToggle = () => {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge = () => {
    this.person.age += 1;
  }

  changeName = (event: Event) => {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName = () => {
    this.names.push(this.addNewName);
    this.addNewName="";
  }

  deleteName = (index: number) => {
    this.names.splice(index,1);
  }
  tick() {
      this.dateNow = new Date()
  }

  onRegister = () => {
    console.log(this.register);
  }
}
